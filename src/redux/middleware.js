import axios from "axios";
import { nanoid } from "nanoid";
import { getUsers, deleteUser, addUser, updateUser } from "./usersSlice";

const url = "https://64234be5001cb9fc203ca00b.mockapi.io/users-data";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      let data;
      if (!localStorage.getItem("tableData")) {
        data = await axios.get(url).then((response) => response.data);
        localStorage.setItem("tableData", JSON.stringify(data));
      } else {
        data = JSON.parse(localStorage.getItem("tableData"));
      }

      dispatch(getUsers(data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      const data = await axios
        .delete(`${url}/${id}`)
        .then((response) => response.data);
      dispatch(deleteUser(data.id));
      const storage = JSON.parse(localStorage.getItem("tableData"));
      const filteredStorage = storage.filter((item) => item.id !== data.id);
      localStorage.setItem("tableData", JSON.stringify(filteredStorage));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const addOneUser = ({ name, age, aboutPerson }) => {
  return async (dispatch) => {
    try {
      const id = nanoid();
      const data = await axios({
        method: "post",
        url: url,
        data: {
          name: `${name}`,
          age: `${age}`,
          "about-person": `${aboutPerson}`,
          id: id,
        },
      }).then((response) => response.data);
      dispatch(addUser(data));
      const storage = JSON.parse(localStorage.getItem("tableData"));
      const updatedStorage = storage.concat(data);
      localStorage.setItem("tableData", JSON.stringify(updatedStorage));
    } catch (error) {}
  };
};

export const changeOneUser = ({
  id,
  age,
  name,
  "about-person": aboutPerson,
}) => {
  return async (dispatch) => {
    try {
      const data = await axios({
        method: "put",
        url: `${url}/${id}`,
        data: {
          name: name,
          age: age,
          "about-person": aboutPerson,
        },
      }).then((response) => response.data);
      dispatch(updateUser(data));
      const storage = JSON.parse(localStorage.getItem("tableData"));
      const updatedStorage = storage.map((el) => {
        if (el.id === data.id) {
          return Object.assign(el, {
            name: data.name,
            age: data.age,
            "about-person": data["about-person"],
          });
        }
        return el
      });
      localStorage.setItem("tableData", JSON.stringify(updatedStorage));
    } catch (error) {
      console.log("error", error);
    }
  };
};
