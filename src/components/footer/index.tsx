import React, { useState } from 'react'
import { newSubscription } from 'src/services'
import { Loading } from '../Loading'
import * as S from './styles'

interface FooterInterface {
  loadingGlobal: boolean
}

export const Footer: React.FC<FooterInterface> = ({ loadingGlobal }) => {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('Inscrever-se')
  const [loading, setLoading] = useState(false)
  const [suscribed, setSuscribed] = useState(false)

  const onClickSubscribe = async () => {
    try {
      if (loading || suscribed) return

      setText('Carregando...')

      setLoading(true)
      await newSubscription(email)

      setLoading(false)
      setSuscribed(true)
      setText('Inscrito!')
    } catch {
      setLoading(false)
      setText('Tente novamente!')
    }
  }

  return (
    <>
      {!loadingGlobal && (
        <>
          {loading && <Loading />}
          <S.Container>
            <S.Title>Deseja receber notificação assim que um novo post for disponibilizado?</S.Title>
            <S.Content>
              <S.Input onChange={(e) => setEmail(e.target.value)} placeholder="Escreva seu e-mail aqui" type="email" />
              <S.Button loading={loading || suscribed} onClick={onClickSubscribe}>
                {text}
              </S.Button>
            </S.Content>
          </S.Container>
        </>
      )}
    </>
  )
}
