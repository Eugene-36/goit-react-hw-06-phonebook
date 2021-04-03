import { combineReducers } from "redux";
// const init = [{ name: "", number: "", id: "" }];

const contacts = (state = [], { type, payload }) => {
  console.log(state);
  switch (type) {
    case "ADD_USER":
      const newS = [...state, payload];
      return newS;

    case "DELET_USER":
      console.log(payload);
      const delet = state.filter((elem) => elem.id !== payload);
      return delet;

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case "CHANGE_FILTER":
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
