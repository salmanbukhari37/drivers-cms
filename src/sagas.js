import { all } from 'redux-saga/effects';
import {
    watcherSaga,
    watcherGetterSaga
 } from "generic/sagas";

export default function* rootSaga() {
    yield all([
       watcherSaga(),
       watcherGetterSaga(),
    ]);
 }