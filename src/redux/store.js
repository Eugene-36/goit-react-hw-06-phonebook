import { createStore, combineReducers } from "redux";

import allUsersReducers from "./reducers/allUsersReducer";
import changeReducer from "./reducers/filterUserReducer";
const rootReducer = combineReducers({
  allUsers: allUsersReducers,
  changeFilter: changeReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
