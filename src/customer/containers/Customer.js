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
import DeleteModal from '@app/pages/confirmation/DeleteModal';
import PageLoading from 'components/page-loading/PageLoading';

function Customer({dispatch}) {
  const [appLoadingState, updateAppLoading] = useState(false);
  const [temporaryData, setTemporaryData] = useState({});
  const [mode, setMode] = useState({
    edit: false,
  });
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [deleteModal, setDeleteModal] = useState(false);
  const deleteToggle = () => {
    setDeleteModal(!deleteModal)
  };

  const [uniqueId, setUniqueId] = useState(1);
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

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      getCustomersAsync();

    }
  }, [])

  const getCustomersAsync = () => {
    updateAppLoading(true);
    dispatch(genericAction.callGenericGetterAsync('/api/admin/users', (res) => {
      if (res) {
        setData(res?.data);
        updateAppLoading(false);
      }
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

  const deleteCustomerHandler = () => {
      if (uniqueId) {
        dispatch(genericAction.callGenericAsync({}, `/api/admin/user-save/${uniqueId}`, 'delete', (res) => {
          if(res) {
            getCustomersAsync();
          }
        }))
      }else {
        alert("Data not found.");
      }
  }

  const submitCustomerHandler = ({payload, closeModal, setSubmitting, resetForm }) => {
    payload.address = locAddress;
    payload.address_tmp = pickAddress;
    payload.lat = locCoordinates?.lat;
    payload.long = locCoordinates?.lng;
    
    if (mode?.edit) {
      dispatch(genericAction.callGenericAsync(payload, `/api/admin/user-save/${payload.id}`, 'put', (res) => {
        if(res) {
          toggle();
          setSubmitting(false);
          resetForm();
          getCustomersAsync();
          setTemporaryData({})
        }
      }))
    } else {
      dispatch(genericAction.callGenericAsync(payload, '/api/admin/user-save', 'post', (res) => {
        if(res) {
          toggle();
          setSubmitting(false);
          resetForm();
          getCustomersAsync();
          setTemporaryData({})
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
        selector: "fullname",
        sortable: true
    },
    {
        name: "Staff",
        selector: "type",
        sortable: true,
    },
    {
        name: "Designation",
        selector: "designation",
        sortable: true
    },
    {
        name: "Status",
        selector: (row) => {
          return row?.status ? "true" : "false";
        },
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
          return (<i className="text-danger fas fa-trash-alt" onClick={() => {
            setUniqueId(data?._id);
            deleteToggle();
          }}/>)
      },
      maxWidth: "5%",
    }
  ];

  

  return (
    <>
    {appLoadingState ? <PageLoading /> :
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
            <DeleteModal modal={deleteModal} toggle={deleteToggle} deleteCustomer={deleteCustomerHandler}/>
        </Content>
      </PrivateTwoColumns>
    }
    </>
  );
}


const mapStateToProps = ({ auth }) => {
  return {
    ...auth
  }
}
export default connect(mapStateToProps)(Customer);