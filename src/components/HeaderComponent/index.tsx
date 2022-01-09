import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { HeaderComponentInterface } from './components'
import { useLanguage } from 'src/languages/hooks'

export const Header: React.FC<HeaderComponentInterface> = ({ page, isAbsolute }) => {
  const { text, lang, pathname } = useLanguage()

  const opposite = { pt: 'en', en: 'pt' } as { [key: string]: string }

  const children = (
    <S.DivWrapper id="telegram:header">
      <Link href={`/?lang=${lang}`} passHref>
        <S.ButtonHeader active={page === 'home'}>{text.home}</S.ButtonHeader>
      </Link>
      <Link href={`/projects?lang=${lang}`} passHref>
        <S.ButtonHeader active={page === 'projects'}>{text.project}</S.ButtonHeader>
      </Link>
      <Link href={`/blog?lang=${lang}`} passHref>
        <S.ButtonHeader active={['blog', 'blog-page'].includes(page)}>{text.blog}</S.ButtonHeader>
      </Link>
      <S.Image
        onClick={() => (window.location.href = `${pathname}?lang=${opposite[lang]}`)}
        src={`/languages/${opposite[lang]}.png`}
      />
    </S.DivWrapper>
  )

  if (isAbsolute) return <S.AbsoluteHeader>{children}</S.AbsoluteHeader>

  return <S.Header>{children}</S.Header>
}
