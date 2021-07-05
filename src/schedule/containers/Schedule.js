import React, {useState, useEffect} from 'react'
import PrivateTwoColumns from 'modules/layouts/PrivateTwoColumns';
import { connect } from 'react-redux';
import { Content } from 'adminlte';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';
import DataTableListing from 'pages/dataTable/DataTableListing';
import * as genericAction from 'generic/actions';
import PageLoading from 'components/page-loading/PageLoading';
import ScheduleModal from '@app/schedule/components/ScheduleModal';
import  {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import produce from 'immer';
import * as actions from '../actions';

function Schedule({dispatch, formData, passengersList}) {
    const [appLoadingState, updateAppLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [dropAddress, setDropAddress] = useState("");
    const [dropCoordinates, setDropCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [data, setData] = useState([]);

    const getScheduleAsync = () => {
        dispatch(genericAction.callGenericGetterAsync('api/schedule/admin', (res) => {
            if (res?.data)
                setData(res?.data);
        }))
    }

    const loadPassengersAsync = () => {
        const {passengerNo} = formData;

        dispatch(genericAction.callGenericGetterAsync(`/api/users/${passengerNo}`, (res) => {
            if (res?.data)
                dispatch(actions.setSchedulePassengersList(res?.data));
        }))
        
    }

    const setFormData = (value, name) => {
        const producedData = produce(formData, drafState => {
            drafState[name] = value;
        })
        dispatch( actions.setScheduleFormData(producedData) );
    }

    useEffect(() => {
        getScheduleAsync();
    },[]);


    const handleDropSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setDropAddress( value );
        setDropCoordinates(latLng);
        setFormData(value, 'dropLocation');
    }

    const saveScheduleHandler = () => {
        const payload =  {
            // passenger: data?._id,
            // pickLocation: data?.location_tmp,
            dropLocation: dropAddress,
            picklat: data?.lat,
            pickLong: data?.lng,
            droplat: dropCoordinates?.lat,
            droplong: dropCoordinates?.lng,
            // rideStatus: formData?.rideStatus,
            pickDateTime: formData?.pickDate,
            passenger: passengersList
        }
        
        dispatch(genericAction.callGenericAsync(payload, 'api/schedule', 'post', (res) => {
            if(res) {
              console.log(res);
            }
        }))
    }

    const columns = [
        {
            name: "Pick Location",
            selector: "pickLocation",
            sortable: true
        },
        {
            name: "Drop Location",
            selector: "dropLocation",
            sortable: true,
        },
        {
            name: "Passenger",
            selector: (row) => {
                return row?.passenger?.fullname
            },
            sortable: true
        },
        {
            name: "Ride Status",
            selector: (row) => {
              return row?.rideStatus;
            },
            sortable: true
        },
        {
          name: "Action",
            cell: (data) => {
              return (<i className="text-info fas fa-edit"  onClick={() => {
                console.log(data);
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
                        }}>+ Add new Schedule</Button>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <DataTableListing columns={columns} data={data} title="Schedule Listing" />
                    </CardBody>
                </Card>
                </Content.Wrapper>
                <ScheduleModal 
                    modal={modal} 
                    toggle={toggle} 
                    handleDropSelect={handleDropSelect} 
                    dropAddress={dropAddress}
                    setDropAddress={setDropAddress}
                    setFormData={setFormData}
                    loadPassengers={loadPassengersAsync}
                    passengersList={passengersList}
                    saveScheduleHandler={saveScheduleHandler}
                />
            </Content>
        </PrivateTwoColumns>
        }
        </>
    )
}

const mapStateToProps = ({ auth, schedule }) => {
    return {
      ...auth,
      ...schedule
    }
  }
  export default connect(mapStateToProps)(Schedule);