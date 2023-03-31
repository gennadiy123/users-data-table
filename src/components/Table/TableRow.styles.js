import styled, {css} from "styled-components";

const sharedStyle = css`
  border-radius: 20px;
  width: 60px;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const StyledTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;

export const TableRowCells = styled.td`
  padding: 12px;
  height: 40px;
  min-width: 30px;
`;

export const InputName = styled.input`
  width: 48px;
`;

export const InputAge = styled.input`
  width: 16px;
`;

export const InputAboutPerson = styled.input`
  width: 660px;
`;

export const ButtonSave = styled.button`
  margin-right: 10px;
  ${sharedStyle}
  background-color: #59b31d;
`;

export const ButtonEdit = styled.button`
  margin-right: 10px;
  ${sharedStyle}
  background-color: #3b9bdb;
`;

export const ButtonDelete = styled.button`
  ${sharedStyle}
  background-color: #d95959;
`;
