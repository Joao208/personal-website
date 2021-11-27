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

  line-break: anywhere;

  @media (max-width: 800px) {
    font-size: 50px;
  }
`

export const Card = styled.div`
  width: 242px;
  height: 337px;

  cursor: pointer;

  background: #1c2c35;
  border-radius: 19px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 544px) {
    width: 100%;
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
  height: 181.3px;

  width: 100%;
  border-radius: 19px;

  @media (max-width: 544px) {
    object-fit: cover;
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
`
