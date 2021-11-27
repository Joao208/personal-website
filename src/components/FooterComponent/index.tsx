import React from 'react'
import * as S from './styles'
import { FooterComponentInterface } from './components'
import { FooterImage } from 'public/footerImage'

export const Footer: React.FC<FooterComponentInterface> = () => {
  return (
    <S.Container>
      <S.Footer>
        <S.Content id="1">Copyright © 2021 All rights reserved.</S.Content>
        <S.Content id="2">
          <FooterImage />
        </S.Content>
        <S.Content id="3">Source code available</S.Content>
      </S.Footer>
    </S.Container>
  )
}
