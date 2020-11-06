import React from 'react'
import styled from 'styled-components'
import { 
  transparentBlack,
  transparentDarkerBlack,
  white 
} from '../../config/colors'

const ModalWrapper = styled.div`
  background-color: ${transparentBlack};
  z-index: 1; 
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto; 
  padding-top: 120px; 
`

const ModalContent = styled.div`
  background-color: ${white};
  width: 70%;
  max-width: 400px; 
  height: 50%; 
  margin: auto;
  border-radius: 8px;
  padding: 32px;
`

const CloseWrapper = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  color: ${white};
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 20px;
  cursor: pointer;
  display: flex:
  align-items: center;
  justify-content: center

  &:hover {
    background-color: ${transparentDarkerBlack}
  }

  svg {
    color: ${white};
    fill: currentColor;
  }
`

export const Modal = (props) => (
  <ModalWrapper>
    <ModalContent>
      {props.children}
    </ModalContent>
    <CloseWrapper onClick={props.onClose}>
      <svg height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M15.18 12l7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z"></path></svg>
    </CloseWrapper>
  </ModalWrapper>
)