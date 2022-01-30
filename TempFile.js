import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './App.css';
import AddEntry from './components/AddEntry';
import Day from './components/Day';

class App extends React.Component {
  state = {
    expenses: [
      {
        id: 1,
        date: "28 January",
        entries: [
          {
            id: 1,
            timestamp: "10:00",
            item: "pisang goreng",
            price: "10000"
          },
          {
            id: 2,
            timestamp: "12:00",
            item: "es teh",
            price: "5000"
          }
        ],
        total: "15000"
      },
      {
        id: 2,
        date: "29 January",
        entries: [
          {
            id: 1,
            timestamp: "10:00",
            item: "es kopi susu",
            price: "20000"
          }
        ],
        total: "20000"
      },
      {
        id: 3,
        date: "30 January",
        entries: [
          {
            id: 1,
            timestamp: "10:00",
            item: "es kopi susu",
            price: "20000"
          }
        ],
        total: "20000"
      },
      {
        id: 4,
        date: "31 January",
        entries: [
          {
            id: 1,
            timestamp: "10:00",
            item: "es kopi susu",
            price: "20000"
          }
        ],
        total: "20000"
      }
    ],
    show: false
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }

  addEntries = data => {
    const latestEntry = this.state.expenses[Object.keys(this.state.expenses)[Object.keys(this.state.expenses).length-1]]
    const date = new Date().getUTCDate()
    const month = new Date().toLocaleDateString('default', { month: 'long' })
    const time = new Date().getHours() + "." + new Date().getMinutes()
    const currentDate = date + " " + month
    console.log(currentDate)

    // check if current date is the same date as the latest entry, add to latest expenses entries
    if(currentDate === latestEntry.date) {
      const id = latestEntry.entries.length
      const entries = latestEntry.entries
      const newEntry = {
        id: id + 1,
        timestamp: time,
        item: data,
        price: data
      }
      this.setState({
        
      })
    } else {  // if current date is a new date, add to expenses
      const id = this.state.expenses.length
      const newExpense = {
        id: id + 1,
        date: currentDate,
        entries: [
          {
            id: 1,
            timestamp: time,
            item: data,
            price: data
          }
        ],
        total: data
      }
      this.setState({
        expenses: [...this.state.expenses, newExpense]
      })
    }
  }

  render(){
    const { expenses } = this.state
    const aloha = expenses[Object.keys(expenses)[Object.keys(expenses).length - 1]] 
    console.log(aloha, aloha.date)
    return(
      <Container style={{ marginTop: "2rem", textAlign:"center" }}>
        <h1>Diari Jajan Februari 2021</h1>
        <h4>Pengeluaran bulan ini Rp</h4>
        <Button onClick={ this.showModal }>Tambah Item</Button>

        <Row style={{ marginTop: "2rem", width: "100%", justifyContent: "space-between" }}>
          { expenses.reverse().map(day =>
            <Day key={ day.id } data={ day } /> 
          )}
        </Row>
        
        <AddEntry show={ this.state.show } hide={ this.hideModal } />
      </Container> 
    )
  }
}

export default App;
