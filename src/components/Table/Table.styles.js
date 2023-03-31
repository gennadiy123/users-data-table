import styled from "styled-components";

export const StyledTable = styled.table`
  /* border: 1px solid black;
  border-collapse: collapse; */
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 70%;
  /* width: 100%; */
  
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    text-align: center;
`;

export const StyledHeader = styled.tr`
  background-color: #009879;
  color: white;
`;

export const HeaderCell = styled.th`
  height: 50px;
  /* width: 30px; */
`;

export const ButtonAdd = styled.button`
  border-radius: 20px;
  width: 160px;
  height: 40px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #59b31d;
  margin-bottom: 20px;
`;
