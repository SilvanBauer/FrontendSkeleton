import { combineReducers } from "redux";
import { testReducer } from "..";

export const combinedReducers = combineReducers({
    test: testReducer
});
