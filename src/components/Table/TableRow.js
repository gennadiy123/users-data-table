import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions";
import {
  StyledTableRow,
  TableRowCells,
  InputName,
  InputAge,
  InputAboutPerson,
  ButtonSave,
  ButtonEdit,
  ButtonDelete,
} from "./TableRow.styles";

export const TableRow = ({ name, age, aboutPerson, id }) => {
  const [pressedEdit, setPressedEdit] = useState("");

  const dispatch = useDispatch();

  const onPressedEdit = (id) => {
    setPressedEdit(id);
  };

  const onPressSave = () => {
    setPressedEdit("");
  };

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  const OnChangeForm = () => {
    return (
      <form>
        <input type="text" name="name" value={name} />
        <input type="text" name="age" value={age} />
        <input type="text" name="about person" value={aboutPerson} />
      </form>
    );
  };

  return (
    <>
      <StyledTableRow>
        {pressedEdit ? (
          <>
            {/* <TableRowCells>
              <InputName type="text" placeholder={name} />
            </TableRowCells>
            <TableRowCells>
              <InputAge type="text" placeholder={age} />
            </TableRowCells>
            <TableRowCells>
              <InputAboutPerson type="text" placeholder={aboutPerson} />
            </TableRowCells> */}
            <OnChangeForm />
          </>
        ) : (
          <>
            <TableRowCells>{name}</TableRowCells>
            <TableRowCells>{age}</TableRowCells>
            <TableRowCells>{aboutPerson}</TableRowCells>
          </>
        )}
        <TableRowCells>
          {pressedEdit ? (
            <ButtonSave onClick={() => onPressSave()}>Save</ButtonSave>
          ) : (
            <ButtonEdit onClick={() => onPressedEdit(id)}>Edit</ButtonEdit>
          )}
          <ButtonDelete onClick={() => onDeleteUser()}>Delete</ButtonDelete>
        </TableRowCells>
      </StyledTableRow>
    </>
  );
};
