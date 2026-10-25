import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./reducers/ContactSlice";



const rootReducer = combineReducers( {
  contact : contactSlice.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer : rootReducer,
    devTools: true
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch =  AppStore['dispatch']