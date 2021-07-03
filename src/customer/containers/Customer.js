import React, {useState, useEffect} from 'react';
import PrivateTwoColumns from 'modules/layouts/PrivateTwoColumns';
import { connect } from 'react-redux';
import { Content } from 'adminlte';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';
import CustomerForm from 'customer/compnents/CustomerForm';
import DataTableListing from 'pages/dataTable/DataTableListing';
import  {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import * as genericAction from 'generic/actions';

function Customer({dispatch}) {
  const [temporaryData, setTemporaryData] = useState({});
  const [mode, setMode] = useState({
    edit: false,
  });
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [pickAddress, setPickAddress] = useState("");
  const [pickCoordinates, setPickCoordinates] = useState({
      lat: null,
      lng: null
  })

  const [locAddress, setLocAddress] = useState("");
  const [locCoordinates, setLocCoordinates] = useState({
      lat: null,
      lng: null
  });

  const [data, setData] = useState(
    [
      {name: "Salman Bukhari", staff: "75441", designation: "React Developer", status: "open"},
      {name: "Steve", staff: "65344", designation: "Full Stack Developer", status: "open"},
      {name: "Jack", staff: "52311", designation: "Backend Developer", status: "close"},
      {name: "John Doe", staff: "42245", designation: "Graphic Designer", status: "open"}
    ]
  );

  useEffect(() => {
    getCustomersAsync();
  }, [])

  const getCustomersAsync = () => {
    dispatch(genericAction.callGenericGetterAsync('/api/customer', (res) => {
      if (res) 
        setData(res?.data?.data);
    }));
  }

  const handleLocSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocAddress(value)
    setLocCoordinates(latLng)
  }

  const handlePickSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setPickAddress(value)
    setPickCoordinates(latLng)
  }

  const deleteCustomerHandler = ({id}) => {
    if (id) {
      dispatch(genericAction.callGenericAsync({}, `/api/customer/${id}`, 'delete', (res) => {
        if(res) {
          closeModal(false);
          setSubmitting(false);
          resetForm();
        }
      }))
    }else {
      alert("Data not found.");
    }
  }

  const submitCustomerHandler = ({payload, closeModal, setSubmitting, resetForm }) => {
    if (mode?.edit) {
      dispatch(genericAction.callGenericAsync(payload, '/api/customer', 'put', (res) => {
        if(res) {
          closeModal(false);
          setSubmitting(false);
          resetForm();
        }
      }))
    } else {
      dispatch(genericAction.callGenericAsync(payload, '/api/customer', 'post', (res) => {
        if(res) {
          closeModal(false);
          setSubmitting(false);
          resetForm();
        }
      }))
    }
  }

  const jobAreaProps = [
    {title: "IT", value: 1},
    {title: "Health", value: 2},
    {title: "Business", value: 3}
  ];

  const designationProps = [
    {title: "Software Developer", value: 1},
    {title: "Full Stack Developer", value: 2},
    {title: "Accounts Manager", value: 3}
  ];

  const statusProps = [
    {title: "Active", value: 1},
    {title: "InActive", value: 0}
  ];

  const columns = [
    {
        name: "Name",
        selector: "name",
        sortable: true
    },
    {
        name: "Staff",
        selector: "staff",
        sortable: true,
        wrap: true
    },
    {
        name: "Designation",
        selector: "designation",
        sortable: true
    },
    {
        name: "Status",
        selector: "status",
        sortable: true
    },
    {
      name: "Action",
        cell: (data) => {
          return (<i className="text-info fas fa-edit"  onClick={() => {
            setTemporaryData(data);
            setMode({
              edit: true
            });
            toggle();
          }}/>)
      },
      maxWidth: "5%",
    },
    {
      name: "",
        cell: (data) => {
          return (<i className="text-danger fas fa-trash-alt" onClick={() => deleteCustomerHandler({id: data?.id})}/>)
      },
      maxWidth: "5%",
    }
  ];

  

  return (
    <PrivateTwoColumns pageTitle="Customer">
       <Content>
          <Content.Header>
            <Content.Title>Create Customer</Content.Title>
          </Content.Header>
          <Content.Wrapper>
            <Card className="card-info card-outline">
              <CardHeader>
                <div>
                  <h3 class="card-title">Customer Information</h3>
                </div>
                <div className="text-right">
                  <Button color="info" size="sm" onClick={() => {
                    toggle()
                    setMode({
                      edit: false
                    });
                    setTemporaryData({});
                  }}>+ Add new customer</Button>
                </div>
              </CardHeader>
              <CardBody>
                <CustomerForm 
                  modal={modal} 
                  toggle={toggle}
                  pickAddress={pickAddress}
                  setPickAddress={setPickAddress}
                  handlePickSelect={handlePickSelect}
                  pickCoordinates={pickCoordinates}
                  setPickCoordinates={setPickCoordinates}
                  handleLocSelect={handleLocSelect}
                  locCoordinates={locCoordinates}
                  setLocCoordinates={setLocCoordinates}
                  locAddress={locAddress}
                  setLocAddress={setLocAddress}
                  submitCustomerHandler={submitCustomerHandler}
                  designationProps={designationProps}
                  jobAreaProps={jobAreaProps}
                  statusProps={statusProps}
                  temporaryData={temporaryData}
                  mode={mode}
                />
                <DataTableListing columns={columns} data={data} title="Customer Listing" />
              </CardBody>
            </Card>
          </Content.Wrapper>
      </Content>
    </PrivateTwoColumns>
  );
}


const mapStateToProps = ({ auth }) => {
  return {
    ...auth
  }
}
export default connect(mapStateToProps)(Customer);