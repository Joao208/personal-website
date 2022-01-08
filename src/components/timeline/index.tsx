import React from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'

import * as S from './style'
import { TimelineInterface } from './components'

const Timeline: React.FC<TimelineInterface> = ({ posts }) => {
  const router = useRouter()
  const { pageId } = router.query

  return (
    <S.Wrapper>
      {posts.map(({ createdAt, title, description, id }) => (
        <S.CardContainer
          key={id}
          onClick={() => {
            window.location.href = `/blog-page/${id}`
          }}
        >
          <S.Time>{moment(createdAt).format('LL')}</S.Time>
          <S.Card selected={id == pageId}>
            <S.CardTitle>{title}</S.CardTitle>
            <S.Description>{description}</S.Description>
          </S.Card>
        </S.CardContainer>
      ))}
    </S.Wrapper>
  )
}

export default Timeline
