import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddExpenses = () => {
    return(
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>
                    Tambah Entri
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Entry</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Tambah</Button>
                <Button variant="warning">Batal</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddExpenses;