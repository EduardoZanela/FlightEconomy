import React from 'react';
import styled from 'styled-components';

const NoFlightsArea = styled.View`
  width: 95%;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 35px;
  border: 1px solid #83D6E3;
  height: 50%;
`;
const TextTitle= styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: tomato;
  margin-top: 10;
  margin-bottom: 20px;
`;
const TextDefault= styled.Text`
  font-size: 18px;
  text-align: center;
  color: gray;
  margin-bottom: 5px;
`;


export default () => {
  return(
    <NoFlightsArea>
      <TextTitle>Status: No aircraft</TextTitle>
      <TextDefault>You need to rent an aircraft before you can start your flight.</TextDefault>
      <TextDefault>Holding Area - Empty</TextDefault>
      <TextDefault>No assignments selected</TextDefault>
    </NoFlightsArea>
  );
}