import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(158.86deg, #1c2a34 10.36%, #111a20 49.58%, #111a20 49.58%);
  width: 100vw;
  min-height: 100vh;
`

export const Image = styled.img`
  width: 470.97px;
  height: 470.97px;

  object-fit: contain;

  position: absolute;
  top: 100px;

  @media (max-width: 488px) {
    width: 70%;
    top: -120px;
    left: -40px;
  }
`

export const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 74.0596px;
  line-height: 90px;
  text-align: center;

  margin: 10px;
  color: #ffffff;

  padding: 10px;

  @media (max-width: 517px) {
    font-size: 50px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  color: #ffffff;

  padding: 10px;

  @media (max-width: 800px) {
    font-size: 17px;

    > br {
      display: none;
    }
  }
`

export const ButtonGreen = styled.div`
  width: 130.76px;
  height: 56.7px;

  background: #b0fbbc;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18.5149px;
  line-height: 23px;
  text-align: center;

  cursor: not-allowed;

  margin-right: 20px;

  @media only screen and (max-width: 378px) {
    margin: 20px;
  }
`

export const ButtonGray = styled.div`
  width: 229.12px;
  height: 56.7px;

  background: #1c2c35;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18.5149px;
  line-height: 23px;
  text-align: center;

  cursor: pointer;

  color: #ffffff;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: absolute;

  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
`
