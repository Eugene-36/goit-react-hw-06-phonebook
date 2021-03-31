import { createStore, combineReducers } from "redux";

import allUsersReducers from "./reducers/allUsersReducer";
const rootReducer = combineReducers({
  allUsers: allUsersReducers,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
