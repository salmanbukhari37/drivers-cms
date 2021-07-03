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
    mode
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
                                <Label for="staff">Staff #</Label>
                                <Input size="sm" tag={Field} name="staff" id="staff" placeholder="Staff #" className={touched && touched.staff ? (errors && errors.staff ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="staff" />
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
                                    {jobAreaProps?.map(job => <option value={job.value}>{job.title}</option>)}
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
                                    {designationProps?.map(designation => <option value={designation.value}>{designation.title}</option>)}
                                </select>
                                <ErrorMessage component={FormFeedback} name="designation" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="pick_from">Pick From</Label>
                                <AutoComplete address={pickAddress} setAddress={setPickAddress} handleSelect={handlePickSelect} />
                                
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <AutoComplete address={locAddress} setAddress={setLocAddress} handleSelect={handleLocSelect} />
                            </FormGroup>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="landline">Landline #</Label>
                                <Input size="sm" tag={Field} name="landline" id="landline" placeholder="landline" className={touched && touched.landline ? (errors && errors.landline ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="landline" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cellphone">Cell #</Label>
                                <Input size="sm" tag={Field} name="cellphone" id="cellphone" placeholder="cellphone" className={touched && touched.cellphone ? (errors && errors.cellphone ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="cellphone" />
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
                                    {statusProps?.map(status => <option value={status.value}>{status.title}</option>)}
                                </select>
                                <ErrorMessage component={FormFeedback} name="status" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input size="sm" tag={Field} type="password" name="password" id="password" placeholder="Cell Phone" className={touched && touched.password ? (errors && errors.password ? 'is-invalid' : 'is-valid') : ''} />
                                <ErrorMessage component={FormFeedback} name="password" />
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
            staff: temporaryData && temporaryData.staff,
            name: temporaryData && temporaryData.name,
            job_area: temporaryData && temporaryData.job_area,
            designation: temporaryData && temporaryData.designation,
            pickfromCoordinates: temporaryData && pickCoordinates,
            locCoordinates: temporaryData && locCoordinates,
            landline: temporaryData && temporaryData.landline,
            cellphone: temporaryData && temporaryData.cellphone,
            status: temporaryData && temporaryData.status,
            password: temporaryData && temporaryData.password,
            id: temporaryData && temporaryData?.id
        }
    },
    validationSchema: Yup.object().shape({
        staff: Yup.string().required("Staff is required"),
        name: Yup.string().required("Name is required"),
        job_area: Yup.string().required("Job area is required"),
        designation: Yup.string().required("Designation is required"),
        landline: Yup.string().required("Landline is required"),
        cellphone: Yup.string().required("Cellphone is required"),
        status: Yup.string().required("Status is required"),
        password: Yup.string().required("Password is required"),
    }),
    handleSubmit: (values, { props: { submitCustomerHandler, closeModal, pickCoordinates, locCoordinates }, setSubmitting, resetForm }) => {
        values.pickfromCoordinates = pickCoordinates;
        values.locCoordinates = locCoordinates;
        setSubmitting(true);
        submitCustomerHandler({payload: values, closeModal, setSubmitting, resetForm});
    },
})(InnerForm);

export default CustomerForm
