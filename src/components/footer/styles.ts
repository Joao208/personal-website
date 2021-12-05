import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  height: 300px;

  z-index: 100;

  padding: 20px;

  padding-left: 50px;

  @media (max-width: 800px) {
    padding-left: 20px;

    height: 50%;

    flex-direction: column;
    display: flex;

    justify-content: center;
    align-items: center;
  }

  @media (max-width: 360px) {
    height: 70%;
  }

  @media (max-width: 320px) {
    height: 80%;
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
