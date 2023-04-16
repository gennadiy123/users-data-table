import axios from "axios";
import { nanoid } from "nanoid";
import { getUsers, deleteUser, addUser, updateUser } from "./usersSlice";

const url = "https://64234be5001cb9fc203ca00b.mockapi.io/users-data";

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => dispatch(getUsers(data)))
      .catch((error) => console.log("error", error));
  };
};

export const removeUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch(deleteUser(id)))
      .catch((error) => console.log("error", error));
  };
};

export const addOneUser = ({ name, age, aboutPerson }) => {
  return (dispatch) => {
    const id = nanoid();
    axios({
      method: "post",
      url: url,
      data: {
        name: `${name}`,
        age: `${age}`,
        "about-person": `${aboutPerson}`,
        id: id,
      },
    })
      .then((response) => response.data)
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log("error", error));
  };
};

export const changeOneUser = ({
  id,
  age,
  name,
  "about-person": aboutPerson,
}) => {
  return (dispatch) => {
    axios({
      method: "put",
      url: `${url}/${id}`,
      data: {
        name: name,
        age: age,
        "about-person": aboutPerson,
      },
    })
      .then((response) => response.data)
      .then((data) => dispatch(updateUser(data)))
      .catch((error) => console.log("error", error));
  };
};
 