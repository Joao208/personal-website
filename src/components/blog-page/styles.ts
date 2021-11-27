import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 55.3984px;
  line-height: 68px;
  margin-left: 50px;
  margin-bottom: 10px;

  color: #ffffff;

  width: 60%;

  @media (max-width: 800px) {
    width: auto;

    margin-left: 20px;
  }
`

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16.1579px;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.45);

  width: 397.02px;

  margin-left: 50px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    width: auto;

    margin-left: 20px;
  }
`

export const ContainerMarkdown = styled.div`
  flex-flow: column;
  display: flex;

  > * ::marker {
    color: #fff;
  }

  > * {
    color: #ffffff;
  }

  > pre {
    > div {
      border-radius: 9px;

      background-color: #1c2c35 !important;
      text-shadow: 0 0 black !important;

      > code {
        text-shadow: 0 0 black !important;
      }
    }
  }

  max-width: 80%;

  padding-left: 50px;

  @media (max-width: 800px) {
    max-width: 100%;

    padding: 20px;
  }
`
