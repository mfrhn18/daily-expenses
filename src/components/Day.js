import React from "react";
import { Card, Col, Table } from "react-bootstrap";

const Day = ({ data }) => {
    const totalPrice = data.entries.reduce((previousValue, currentValue) => {
        return(previousValue += parseInt(currentValue.price))
    }, 0) 
    console.log(totalPrice)
    return(
        <Col md={4} style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <Card>
                <Card.Header>
                    <h6 style={{ textAlign: "left", justifyContent: "space-between" }}>
                        { data.date }
                    </h6>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <tbody style={{ textAlign: "left" }}>
                            { data.entries.map(item => 
                                <tr key={ item.id }>
                                    <td>
                                        { item.timestamp }
                                    </td>
                                    <td>
                                        { item.item }
                                    </td>
                                    <td>
                                        { new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IDR' }).format(item.price) }
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td></td>
                                <td>
                                    <b>Total</b>
                                </td>
                                <td>
                                    <b>{ new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IDR' }).format(totalPrice) }</b>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Day;