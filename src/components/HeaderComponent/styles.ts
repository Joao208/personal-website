import styled, { css } from 'styled-components'
import { ButtonHeaderInterface } from './components'

export const Header = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
  width: 100%;

  > div {
    align-items: center;

    width: 50%;

    display: flex;
    justify-content: space-around;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`

export const AbsoluteHeader = styled(Header)`
  position: absolute;
  z-index: 1;
`

export const ButtonHeader = styled.div<ButtonHeaderInterface>`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;

  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #fff;
    `}
`

export const Image = styled.img`
  width: 32px;

  cursor: pointer;

  @media (max-width: 800px) {
    width: 28px;
  }
`
