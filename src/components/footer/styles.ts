import styled, { css } from 'styled-components'
import { ContainerInterface } from './components'

const invisible = css`
  display: none;
`

export const ContainerOutSide = styled.div<ContainerInterface>`
  position: fixed;

  cursor: pointer;

  ${({ display }) => !display && invisible}

  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

export const Container = styled.div<ContainerInterface>`
  background: #1c2c35;
  height: 300px;

  position: fixed;
  z-index: 100;

  padding: 20px;

  bottom: 0;
  left: 0;
  right: 0;

  transition: 5s;

  animation-duration: 1.5s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-bottom: -100%;
      width: 300%;
    }

    to {
      margin-bottom: 0%;
      width: 100%;
    }
  }

  ${({ display }) => !display && invisible}

  @media (max-width: 800px) {
    height: 50%;

    flex-direction: column;
    display: flex;

    ${({ display }) => !display && invisible}

    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;

  width: 60%;

  color: #ffffff;

  @media (max-width: 800px) {
    width: 100%;

    font-size: 25px;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 20px;

  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  height: 57px;
  width: 399px;
  border-radius: 9px;

  padding: 10px;

  color: #a6adb0;

  @media (max-width: 800px) {
    width: 100%;
  }

  :focus {
    outline: none;
  }
`

export const Button = styled.div`
  width: 159px;
  height: 57px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18.5149px;
  line-height: 23px;
  text-align: center;

  background: #b0fbbc;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: #000000;
`
