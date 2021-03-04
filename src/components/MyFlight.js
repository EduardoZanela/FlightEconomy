import React from 'react';
import styled from 'styled-components';

const FlightsArea = styled.View`
  width: 95%;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 35px;
  border: 1px solid #83D6E3;
  margin-bottom: 10px;
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


export default ({data}) => {
  return(
    <FlightsArea>
      <TextTitle>{data.name}</TextTitle>
    </FlightsArea>
  );
}