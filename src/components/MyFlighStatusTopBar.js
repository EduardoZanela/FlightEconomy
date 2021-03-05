import React from 'react';
import styled from 'styled-components';

const HeaderArea = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  flex-direction: row;
  margin-bottom: 20px;
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const TextTitle= styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: tomato;
`;
const TextDefault= styled.Text`
  font-size: 23px;
  color: gray;
  margin-right: 5px;
`;


export default ({status}) => {
  return(
    <HeaderArea>
      <TextDefault>Status:</TextDefault><TextTitle>No aircraft</TextTitle>
    </HeaderArea>
  );
}