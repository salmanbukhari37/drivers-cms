import * as ActionTypes from './actions';
import produce from "immer";

const initialState = {
    formData: {
        passengerNo: '',
        flightNo: '',
        dropLocation: '',
        dropLat: '',
        dropLong: '',
        pickDateTime: '',
        pickDate: '',
        passenger: [],
    }
}

const ScheduleReducer = (state = initialState, action) => {
    try{
        switch (action.type) {
            case ActionTypes.SET_SCHEDULE_FORM_DATA:
                return {
                    ...state,
                    formData: action.payload
                }

            case ActionTypes.SET_SCHEDULE_PASSENGERS:
                return {
                    ...state,
                    passenger: action.payload
                }
            
            case ActionTypes.SET_SCHEDULE_PASSENGERS_LIST:
                let list;
                if (!state?.passengersList ) {
                     list = produce([], draftState => {
                        draftState.push(action.payload[0]);
                    })
                }else {
                    const checkExistedItem = state.passengersList.filter(passenger => passenger.staff_no === action?.payload[0].staff_no)

                    if (checkExistedItem.length === 0){
                        list = produce(state.passengersList, draftState => {
                            draftState.push(action.payload[0]);
                        })
                    }else {
                        list = state.passengersList;
                    }
                }
                return {
                    ...state,
                    passengersList: list
                } 
            
            default:
               return state;
          }
    }catch (e) {
        console.log(e);
    }
};

export default ScheduleReducer;
