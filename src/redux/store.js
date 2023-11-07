import { combineReducers , configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
 

const reducers = combineReducers({
    Auth : AuthReducer
})

export const store =configureStore({
    reducer:reducers,
    middleware:getDefaultMiddleware => getDefaultMiddleware({ serializableCheck:false })
}) 