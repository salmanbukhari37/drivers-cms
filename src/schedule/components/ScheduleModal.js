import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import AutoComplete from '@app/customer/compnents/AutoComplete';
import ScheduleTable from '@app/schedule/components/ScheduleTable';

function ScheduleModal({modal, toggle, className, dropAddress, setDropAddress, handleDropSelect, setFormData, loadPassengers, passengersList, saveSchedule, saveScheduleHandler}) {
    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Flight No</Label>
                            <Input type="number" name="flightNo" id="flight" placeholder="Flight No" className="form-control-sm" onChange={(e) =>{
                                setFormData(e.target.value, 'flightNo');
                            }}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input type="date" name="date" id="date" placeholder="Date" className="form-control-sm" onChange={(e) =>{
                                setFormData(e.target.value, 'pickDate');
                            }}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="time" name="time" id="time" placeholder="Time" className="form-control-sm" onChange={(e) =>{
                                setFormData(e.target.value, 'pickDateTime');
                            }}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="flight">Status</Label>
                            <select className="form-control form-control-sm" onChange={(e) =>{
                                setFormData(e.target.value, 'rideStatus');
                            }}>
                                <option>Please select</option>
                                {[{title: 'Pickup', value: 'pickup'}].map(status=> <option value={status.value}>{status.title}</option>)}
                            </select>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <FormGroup>
                            <Label for="passengerNo">P - No</Label>
                            <Input 
                                type="text" 
                                id="passengerNo" 
                                placeholder="Passenger No"
                                className="form-control-sm"
                                onChange={(e) =>{
                                    setFormData(e.target.value, 'passengerNo');
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <FormGroup>
                            <Label for="flight">Drop Location</Label>
                            <AutoComplete address={dropAddress} setAddress={setDropAddress} handleSelect={handleDropSelect} />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <FormGroup className="mt-4">
                            <Button color="info" block size="sm" onClick={loadPassengers}>Load Data</Button>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <ScheduleTable data={passengersList}/>
                </Row>
            </ModalBody>
            <div className="m-auto pb-4">
                <Button color="primary" size="sm" onClick={saveScheduleHandler}>Save</Button>{' '}
                <Button color="danger" size="sm" onClick={toggle}>Clear</Button>{' '}
                <Button color="secondary" size="sm" onClick={toggle}>Cancel</Button>
            </div>
        </Modal>
    )
}

export default ScheduleModal
