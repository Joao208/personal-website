import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 67px;

  color: #ffffff;

  text-align: center;

  padding: 0 5px;
`

export const Card = styled.div`
  width: 541.55px;
  height: 181px;

  cursor: pointer;

  background: #1c2c35;
  border-radius: 19px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    height: auto;

    width: 90%;

    align-items: center;
    justify-content: center;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 5px 10px;
`

export const CardTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`

export const CardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`

export const CardButton = styled.div``

export const CardImage = styled.img`
  width: 211.71px;
  height: 181px;

  border-radius: 19px;

  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 20px;

  > a {
    display: flex;

    align-items: center;
    justify-content: center;
  }
`
