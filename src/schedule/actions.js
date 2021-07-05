export const SET_SCHEDULE_FORM_DATA = 'SET_SCHEDULE_FORM_DATA';
export const SET_SCHEDULE_PASSENGERS = 'SET_SCHEDULE_PASSENGERS';
export const SET_SCHEDULE_PASSENGERS_LIST = 'SET_SCHEDULE_PASSENGERS_LIST';

export const setScheduleFormData = (payload) => ({
    type: SET_SCHEDULE_FORM_DATA, payload
});

export const setSchedulePassengers = (payload) => ({
    type:SET_SCHEDULE_PASSENGERS, payload
})

export const setSchedulePassengersList = (payload) => ({
    type: SET_SCHEDULE_PASSENGERS_LIST, payload
})