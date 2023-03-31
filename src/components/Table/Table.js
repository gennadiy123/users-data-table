import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../redux/reducer";
import { data } from "./mockData";
import { TableRow } from "./TableRow";
import {
  StyledTable,
  TableWrapper,
  StyledHeader,
  HeaderCell,
  ButtonAdd,
} from "./Table.styles";
import { setUsers } from "../../redux/reducer";


// const url = "https://64234be5001cb9fc203ca00b.mockapi.io/users-data";

// const getUsersData = async () => {
//     const result = await axios.get(url).then(response => response.data)
//     console.log('result', result)
//     return result
// }

export const Table = () => {
    const users = useSelector((state) => state.users);
    console.log('users', users)

    const dispatch = useDispatch();
    // dispatch(setUsers(data));
  // const data = getUsersData().then(data => {return data})
  // getUsersData()
  // console.log('data', data)
    
    // useEffect(() => {
    //     const getUsersData = async () => {
    //         await axios
    //           .get(url)
    //           .then((response) => response.data)
    //           .then((result) => getUsersData(result));
    //     }
    //     console.log('getUserData', getUsersData())
    //   dispatch(getUsersData());
    // //   dispatch(setIsRewardUpdated(false));
    // }, []);

    // useEffect(() => {
    //     console.log('useEffect')
    //     dispatch(fetchUsers());
    //     console.log("useEffect2");
    // }, [dispatch]);

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
          {data.map((item) => (
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
      <ButtonAdd>Add new person</ButtonAdd>
    </TableWrapper>
  );
};
