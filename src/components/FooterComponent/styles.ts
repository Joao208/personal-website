import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
`

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;

  @media (max-width: 750px) {
    display: none;
  }
`

export const Content = styled.div`
  color: #fff;
`
