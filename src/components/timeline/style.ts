import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;

  height: 500px;
  width: 250px;

  right: 0px;
  top: 80px;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 800px) {
    position: relative;

    width: 100%;
    height: 200px;

    padding: 0;

    margin-top: -70px;
    margin-bottom: 50px;

    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;

    padding: 20px;
  }
`

export const CardContainer = styled.div`
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;

  display: inline-block;
`

export const Card = styled.div`
  width: 220.44px;

  background: rgba(28, 44, 53, 0.37);
  border-radius: 9px;

  padding: 10px;

  height: 140px;

  cursor: pointer;

  @media (max-width: 800px) {
    white-space: break-spaces;

    margin-right: 20px;
  }
`

export const CardTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13.8496px;
  line-height: 17px;

  color: #ffffff;
`

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12.6955px;
  line-height: 15px;

  color: rgba(255, 255, 255, 0.56);
`

export const Time = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12.6955px;
  line-height: 15px;

  color: rgba(255, 255, 255, 0.57);

  width: 220.44px;

  @media (max-width: 800px) {
    display: none;
  }
`
