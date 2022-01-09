import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './style'
import { TimelineInterface } from './components'

const Timeline: React.FC<TimelineInterface> = ({ posts }) => {
  const router = useRouter()
  const { pageId } = router.query

  return (
    <S.Wrapper telegram="timeline">
      {posts.map(({ createdAt, title, description, id }) => (
        <Link key={id} href={`/blog-page/${id}`} passHref>
          <S.CardContainer>
            <S.Time>{moment(createdAt).format('LL')}</S.Time>
            <S.Card selected={id == pageId}>
              <S.CardTitle>{title}</S.CardTitle>
              <S.Description>{description}</S.Description>
            </S.Card>
          </S.CardContainer>
        </Link>
      ))}
    </S.Wrapper>
  )
}

export default Timeline
