import { number } from "prop-types";

const createUser = (user) => {
  return {
    type: "create_User",
    payload: {
      name: user.name,
      number: user.number,
      id: user.id,
    },
  };
};

export default createUser;
