import styled, { css } from "styled-components";

const sharedStyle = css`
  border-radius: 20px;
  width: 60px;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 70%;
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

export const CreatePerson = styled.form`
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  ${sharedStyle}
  background-color: #59b31d;
  margin-right: 10px;
`;

export const CancelButton = styled.button`
  ${sharedStyle}
  background-color: #ebb134;
`;
