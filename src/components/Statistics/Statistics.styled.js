import styled from 'styled-components';

export const StaticticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  span {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Span = styled.span`
  color: ${p =>
    p.children > 79 ? '#0cce6b' : p.children > 49 ? '#ffa400' : '#FF4E42'};
`;
