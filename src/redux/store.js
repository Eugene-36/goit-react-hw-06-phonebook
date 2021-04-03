//import { configureStore, combineReducers,  } from "@reduxjs/toolkit";

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import allUsersReducers from "./reducers/allUsersReducer";
import todosReducer from "../redux/reducers/allUsersReducer";

//import todosReducer from "../redux/reducers/filterUserReducer";

const contactsReducer = combineReducers({
  allUsers: todosReducer,

  //changeFilter: todosReducer,
});

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
