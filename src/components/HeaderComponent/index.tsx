import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { HeaderComponentInterface } from './components'

export const Header: React.FC<HeaderComponentInterface> = ({ page, isAbsolute }) => {
  const children = (
    <div>
      <Link href="/home" passHref>
        <S.ButtonHeader active={page === 'home'}>Home</S.ButtonHeader>
      </Link>
      <Link href="/projects" passHref>
        <S.ButtonHeader active={page === 'projects'}>Projects</S.ButtonHeader>
      </Link>
      <Link href="/blog" passHref>
        <S.ButtonHeader active={['blog', 'blog-page'].includes(page)}>Blog</S.ButtonHeader>
      </Link>
    </div>
  )

  if (isAbsolute) return <S.AbsoluteHeader>{children}</S.AbsoluteHeader>

  return <S.Header>{children}</S.Header>
}
