import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  background-color: #c0c0c0;
  transition: transform 250ms ease-in-out;
  :hover {
    background-color: #5090ff;
    transform: scale(1.05);
  }
`;
