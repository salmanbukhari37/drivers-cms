import React, {useState} from 'react'
import { Field, ErrorMessage, withFormik, Form } from 'formik';
import * as Yup from 'yup';
import {
    Label,
    FormGroup,
    Input,
    FormFeedback,
    ModalBody,
    Modal,
    Row, Col,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

import AdminLTE from 'adminlte';
import AutoComplete from '@app/customer/compnents/AutoComplete';


const InnerForm = ({
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    modal,
    toggle,
    className,
    pickAddress,
    setPickAddress,
    handlePickSelect,
    handleLocSelect,
    locAddress,
    setLocAddress,
    jobAreaProps,
    designationProps,
    statusProps,
    mode,
    locationCodeProps,
    temporaryData
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle} className={className} centered>
            <ModalHeader  toggle={toggle}>
                Add New Customer
            </ModalHeader>
            <Form onSubmit={handleSubmit} className="addressForm">
                <ModalBody>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="staffNo">Staff #</Label>
                                <Input size="sm" tag={Field} name="staffNo" id="staffNo" placeholder="Staff #" className={touched && touched.staffNo ? (errors && errors.staffNo ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="staffNo" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input size="sm" tag={Field} name="name" id="name" placeholder="Name" className={touched && touched.name ? (errors && errors.name ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="name" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="job_area">Job Area</Label>
                                <select
                                    name="job_area"
                                    id="job_area"
                                    bsSize="sm"
                                    onChange={handleChange}
                                    className={touched && touched.job_area ? (errors && errors.job_area ? 'is-invalid form-control form-control-sm' : 'is-valid form-control form-control-sm') : 'form-control form-control-sm'}>
                                    <option value="">Please select</option>
                                    {jobAreaProps?.map(job => <option value={job.value} selected={temporaryData?.job_area == job.value }>{job.title}</option>)}
                                </select>
                                <ErrorMessage component={FormFeedback} name="job_area" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="designation">Designation</Label>
                                <select
                                    name="designation"
                                    id="designation"
                                    bsSize="sm"
                                    onChange={handleChange}
                                    className={touched && touched.designation ? (errors && errors.designation ? 'is-invalid form-control form-control-sm' : 'is-valid form-control form-control-sm') : 'form-control form-control-sm'}>
                                    <option value="">Please select</option>
                                    {designationProps?.map(designation => <option value={designation.value} selected={temporaryData?.designation == designation.value }>{designation.title}</option>)}
                                </select>
                                <ErrorMessage component={FormFeedback} name="designation" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="pick_from">Address</Label>
                                <AutoComplete address={pickAddress} setAddress={setPickAddress} handleSelect={handlePickSelect} />
                                
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="location">Temp Address</Label>
                                <AutoComplete address={locAddress} setAddress={setLocAddress} handleSelect={handleLocSelect} />
                            </FormGroup>
                        </Col>
                        
                    </Row>


                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="location_code">Location Code</Label>
                                <select
                                    name="location_code"
                                    id="location_code"
                                    size="sm"
                                    onChange={handleChange}
                                    className={touched && touched.location_code ? (errors && errors.location_code ? 'is-invalid form-control form-control-sm' : 'is-valid form-control form-control-sm') : 'form-control form-control-sm'}>
                                    <option value="">Please select</option>
                                    {locationCodeProps?.map(location => <option value={location.value} selected={temporaryData?.location_code === location.value}>{location.title}</option>)}
                                </select>
                                
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="pick_from">Pick From</Label>
                                <Input size="sm" tag={Field} name="pick_from" id="pick_from" placeholder="Pick From" className={touched && touched.phone ? (errors && errors.phone ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="pick_from" />
                            </FormGroup>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="phone">Phone #</Label>
                                <Input size="sm" tag={Field} name="phone" id="phone" placeholder="phone" className={touched && touched.phone ? (errors && errors.phone ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="phone" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cell">Cell #</Label>
                                <Input size="sm" tag={Field} name="cell" id="cell" placeholder="cell" className={touched && touched.cell ? (errors && errors.cell ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="cell" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="status">Status</Label>
                                <select
                                    name="status"
                                    id="status"
                                    size="sm"
                                    onChange={handleChange}
                                    className={touched && touched.status ? (errors && errors.status ? 'is-invalid form-control form-control-sm' : 'is-valid form-control form-control-sm') : 'form-control form-control-sm'}>
                                    <option value="">Please select</option>
                                    {statusProps?.map(status => <option value={status.value} selected={temporaryData?.status == status.value }>{status.title}</option>)}
                                </select>
                                <ErrorMessage component={FormFeedback} name="status" />
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <div className="text-right">
                        <Input type="hidden" name="id" id="id" />
                        <AdminLTE.Button.Spinner 
                            block color="primary" 
                            isSubmitting={isSubmitting} 
                            disabled={isSubmitting} 
                            text={mode?.edit ? "Edit Customer" : "Add Customer"} 
                            type="submit" 
                            size="sm">
                            Saving Address...
                    </AdminLTE.Button.Spinner>
                    </div>
                </ModalFooter>
            </Form>
        </Modal>
    )
};

const CustomerForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ temporaryData, locCoordinates, pickCoordinates }) => {
        return {
            staffNo: temporaryData && temporaryData.staff_no,
            name: temporaryData && temporaryData.fullname,
            job_area: temporaryData && temporaryData.job_area,
            location_code: temporaryData && temporaryData?.location_code,
            designation: temporaryData && temporaryData.designation,
            pick_from: temporaryData && temporaryData?.pick_from,
            locCoordinates: temporaryData && locCoordinates,
            phone: temporaryData && temporaryData.phone,
            cell: temporaryData && temporaryData.cell,
            status: temporaryData && temporaryData?.status,
            password: temporaryData && temporaryData.password,
            id: temporaryData && temporaryData?._id
        }
    },
    validationSchema: Yup.object().shape({
        staffNo: Yup.string().required("Staff is required"),
        name: Yup.string().required("Name is required"),
        job_area: Yup.string().required("Job area is required"),
        designation: Yup.string().required("Designation is required"),
        phone: Yup.string().required("Landline is required"),
        cell: Yup.string().required("Cellphone is required"),
        status: Yup.string().required("Status is required"),
    }),
    handleSubmit: (values, { props: { submitCustomerHandler, closeModal, pickCoordinates, locCoordinates }, setSubmitting, resetForm }) => {
        values.address = pickCoordinates;
        values.address_tmp = locCoordinates;
        setSubmitting(true);
        submitCustomerHandler({payload: values, closeModal, setSubmitting, resetForm});
    },
})(InnerForm);


CustomerForm.defaultProps = {
    locationCodeProps: [
        {title: "isb", value: "1"},
        {title: "fsd", value: "2"},
        {title: "mtn", value: "3"},
        {title: "khi", value: "4"},
    ]
}

export default CustomerForm
