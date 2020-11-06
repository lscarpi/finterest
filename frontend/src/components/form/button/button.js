import React from 'react'
import styled from 'styled-components'
import { themeRed, white } from '../../../config/colors'

const ButtonWrapper = styled.button`
  border: 0px;
  height: 40px;
  display: inline-block;
  border-radius: 20px;
  padding: 0px 18px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  background-color: ${themeRed};
  color: ${white};
  width: ${props => props.isLogin ? '100%' : 'auto'}
`
export const Button = (props) => (
  <ButtonWrapper 
    isLogin={props.isLogin}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </ButtonWrapper>
)