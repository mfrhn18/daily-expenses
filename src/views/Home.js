import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Day from "../components/Day";
import AddEntry from "../components/AddEntry";
import { useDispatch, useSelector } from "react-redux";
import { getEntries, hideModal, showModal } from "../store/actions/expenses";
import _ from "lodash";

const Home = () => {
    const expenses = useSelector(state => state.expenses.expenses)
    const show = useSelector(state => state.expenses.show)
    const dispatch = useDispatch()

    React.useEffect(() => {
        fetchEntries()
        //eslint-disable-next-line
    }, [])
    
    const fetchEntries = () => {
        dispatch(getEntries())
    }

    const openModal = () => {
        dispatch(showModal())
    }
    const hide = () => {
        dispatch(hideModal())
    }

    console.log(expenses)

    const showData = () => {
        if(!_.isEmpty(expenses)) {
            return expenses.reverse().map(day => {
                return <Day key={ day.id } data={ day } />
            })
        }
    }

    const month = new Date().toLocaleDateString('default', { month: 'long' }) + " " + new Date().getUTCFullYear()

    const sumTotal = expenses.reduce((previousValue, currentValue) => {
        return(previousValue += parseInt(currentValue.total))
    }, 0) 

    return(
        <Container style={{ marginTop: "2rem", textAlign:"center" }}>
            <h1>Diari Jajan { month }</h1>
            <h4>Pengeluaran bulan ini { new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IDR' }).format(sumTotal) }</h4>
            <Button onClick={ openModal }>Tambah Item</Button>

            <Row style={{ marginTop: "2rem", width: "100%", justifyContent: "space-between" }}>
                { expenses.reverse().map(day =>
                <Day key={ day.id } data={ day } /> 
                )}
                {/* { showData() } */}
            </Row>
            
            <AddEntry show={ show } hide={ hide } />
        </Container> 
    )
}

export default Home;