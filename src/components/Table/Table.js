import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, addOneUser } from "../../redux/middleware";
import { TableRow } from "./TableRow";
import {
  StyledTable,
  TableWrapper,
  StyledHeader,
  HeaderCell,
  ButtonAdd,
  CreatePerson,
  StyledInput,
  SubmitButton,
  CancelButton,
} from "./Table.styles";

export const Table = () => {
  const [newPerson, setNewPerson] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const addPerson = () => {
    setNewPerson(true);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [newPerson]);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const data = new FormData(e.target);

    const name = data.get("name");
    const age = data.get("age");
    const aboutPerson = data.get("about person");
    dispatch(addOneUser({ name, age, aboutPerson }));

    for (const key of data.keys()) {
      e.target[key].value = "";
    }

    setNewPerson(false);
  };

  const onCancel = () => {
    setNewPerson(false);
  };

  return (
    <TableWrapper>
      <h1>Users data table</h1>
      <StyledTable>
        <thead>
          <StyledHeader>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Age</HeaderCell>
            <HeaderCell>About person</HeaderCell>
            <HeaderCell>Actions</HeaderCell>
          </StyledHeader>
        </thead>
        <tbody>
          {users.map((item) => (
            <TableRow
              key={item.id}
              name={item.name}
              age={item.age}
              aboutPerson={item["about-person"]}
              id={item.id}
            />
          ))}
        </tbody>
      </StyledTable>
      {newPerson && (
        <>
          <CreatePerson onSubmit={handleSubmit}>
            <StyledInput
              required
              placeholder="name"
              type="text"
              name="name"
              defaultValue=""
            />

            <StyledInput
              required
              placeholder="age"
              type="number"
              name="age"
              defaultValue=""
              min="1"
              max="150"
            />

            <StyledInput
              required
              placeholder="about person"
              type="text"
              name="about person"
              defaultValue=""
            />
            <SubmitButton>Submit</SubmitButton>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>
          </CreatePerson>
        </>
      )}
      <ButtonAdd onClick={addPerson}>Add new person</ButtonAdd>
    </TableWrapper>
  );
};
