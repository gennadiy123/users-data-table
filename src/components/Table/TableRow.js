import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser, changeOneUser } from "../../redux/middleware";
import {
  StyledTableRow,
  TableRowCells,
  SaveButton,
  CancelButton,
  EditButton,
  DeleteButton,
} from "./TableRow.styles";

export const TableRow = ({ name, age, aboutPerson, id }) => {
  const [pressedEdit, setPressedEdit] = useState("");
  const [inputName, setInputName] = useState(name);
  const [inputAge, setInputAge] = useState(age);
  const [inputAboutPerson, setInputAboutPerson] = useState(aboutPerson);

  const dispatch = useDispatch();

  const onPressedEdit = (id) => {
    setPressedEdit(id);
  };

  const onPressSave = () => {
    dispatch(
      changeOneUser({
        id: id,
        name: inputName,
        age: inputAge,
        "about-person": inputAboutPerson,
      })
    );
    setPressedEdit("");
  };

  const onPressCancel = () => {
    setPressedEdit("");
  };

  const onDeleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const changeName = (event) => {
    setInputName(event.target.value);
  };

  const changeAge = (event) => {
    setInputAge(event.target.value);
  };
  const changeAboutPerson = (event) => {
    setInputAboutPerson(event.target.value);
  };

  return (
    <>
      <StyledTableRow>
        {pressedEdit ? (
          <>
            <td width="240px">
              <input
                max-width="240px"
                type="text"
                name="name"
                value={inputName}
                onChange={changeName}
              />
            </td>
            <td width="14%">
              <input
                type="text"
                name="age"
                value={inputAge}
                onChange={changeAge}
              />
            </td>
            <td width="36%">
              <input
                type="text"
                name="about-person"
                value={inputAboutPerson}
                onChange={changeAboutPerson}
              />
            </td>
          </>
        ) : (
          <>
            <TableRowCells>{name}</TableRowCells>
            <TableRowCells>{age}</TableRowCells>
            <TableRowCells>{aboutPerson}</TableRowCells>
          </>
        )}
        <TableRowCells width="20%">
          {pressedEdit ? (
            <>
              <SaveButton onClick={() => onPressSave()}>Save</SaveButton>
              <CancelButton onClick={onPressCancel}>Cancel</CancelButton>
            </>
          ) : (
            <>
              <EditButton onClick={() => onPressedEdit(id)}>Edit</EditButton>
              <DeleteButton onClick={() => onDeleteUser(id)}>
                Delete
              </DeleteButton>
            </>
          )}
        </TableRowCells>
      </StyledTableRow>
    </>
  );
};
