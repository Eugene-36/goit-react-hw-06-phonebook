const init = [{ name: "", number: "", id: "" }];

const allUsersReducers = (state = init, { type, payload }) => {
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

export default allUsersReducers;
