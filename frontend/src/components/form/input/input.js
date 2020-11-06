import React from 'react'
import styled from 'styled-components'
import { borderGray, inputFocusBlue } from '../../../config/colors'

const InputWrapper = styled.div`
  margin: 10px 0;

  input {
    height: 35px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 2px solid ${borderGray};
    width: 100%;
    max-width: 360px;
    outline: none;
    font-size: 16px;

    &:focus {
      box-shadow: 0 0 0 4px ${inputFocusBlue};
      outline: 0;
    }
  }
`
export const Input = (props) => (
  <InputWrapper>
    <input 
      type={props.type} 
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </InputWrapper>
)