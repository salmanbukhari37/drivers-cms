import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

function ScheduleModal({modal, toggle, className}) {
    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Flight No</Label>
                            <Input type="number" name="email" id="flight" placeholder="Flight No" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Date</Label>
                            <Input type="date" name="email" id="flight" placeholder="Flight No" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Time</Label>
                            <Input type="time" name="email" id="flight" placeholder="Flight No" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Status</Label>
                            <select className="form-control">
                                <option>Please select</option>
                                {[{title: 'Pickup', value: 'pickup'}].map(status=> <option value={status.value}>{status.title}</option>)}
                            </select>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <FormGroup>
                            <Label for="flight">P - No</Label>
                            <Input type="text" name="email" id="flight" placeholder="Flight No" />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <FormGroup>
                            <Label for="flight">Drop Location</Label>
                            <Input type="text" name="email" id="flight" placeholder="Flight No" />
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <FormGroup >
                            <Button color="info">Load Data</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <div className="m-auto pb-4">
                <Button color="primary" onClick={toggle}>Save</Button>{' '}
                <Button color="danger" onClick={toggle}>Clear</Button>{' '}
                
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </div>
        </Modal>
    )
}

export default ScheduleModal
