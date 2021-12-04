import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 9999;

  background: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    animation: lds-dual-ring 0.8s linear infinite;

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
