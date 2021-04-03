import { number } from "prop-types";

const addUser = (userObject) => {
  return {
    type: "ADD_USER",
    payload: userObject,
  };
};

const deleteUser = (name) => {
  return {
    type: "DELET_USER",
    payload: name,
  };
};

const changeFilter = (value) => ({
  type: "CHANGE_FILTER",
  payload: value,
});

// const addUser = (userObject) => {
//   return {
//     type: "ADD_USER",
//     payload: {
//       id: id(),
//       mail: userObject.email,
//       pass: userObject.pass,
//     },
//   };
// };
export default { addUser, deleteUser, changeFilter };
