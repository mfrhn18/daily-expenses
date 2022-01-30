import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addEntries } from "../store/actions/expenses";

const AddEntry = props => {
    const { show, hide } = props
    const [entry, setEntry] = useState({
        item: "",
        price: ""
    })
    // const [item, setItem] = useState()
    // const [price, setPrice] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value
        setEntry({
            ...entry,
            [e.target.name]: value
        })
    }

    const add = (e) => {
        e.preventDefault()
        dispatch(addEntries(entry))
        setEntry({
            item: "",
            price: ""
        })
    }

    if(show) {
        return(
            <Modal show={ show } onHide={ hide }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Tambah Entri
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={ add }>
                        <Form.Group className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={ entry.item } name="item" onChange={ handleChange } placeholder="Type product name..." />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={ entry.price } name="price" onChange={ handleChange } placeholder="0" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" type="reset" onClick={ hide }>Batal</Button>
                    <Button variant="primary" type="submit" onClick={ add }>Tambah</Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return null
    }
}

export default AddEntry;