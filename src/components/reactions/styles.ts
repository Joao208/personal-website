import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 50px;

  @media (max-width: 800px) {
    padding: 20px;
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
`

export const ReactionContainer = styled.div`
  width: 82px;
  height: 101px;

  overflow: hidden;

  > svg {
    cursor: pointer;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`
