import React, { useState } from 'react'
import { newSubscription } from 'src/services'
import { FooterInterface } from './components'
import * as S from './styles'

export const Footer: React.FC<FooterInterface> = ({ display, onClickOutside }) => {
  const [email, setEmail] = useState('')

  const onClickSubscribe = async () => {
    await newSubscription(email)

    localStorage.setItem('already_subscribed', 'true')
  }

  return (
    <>
      <S.ContainerOutSide display={display} onClick={onClickOutside} />
      <S.Container display={display}>
        <S.Title>Deseja receber notificação assim que um novo post for disponibilizado?</S.Title>
        <S.Content>
          <S.Input onChange={(e) => setEmail(e.target.value)} placeholder="Escreva seu e-mail aqui" type="email" />
          <S.Button onClick={onClickSubscribe}>Inscrever-se</S.Button>
        </S.Content>
      </S.Container>
    </>
  )
}
