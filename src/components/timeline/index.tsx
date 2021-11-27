import moment from 'moment'
import Link from 'next/link'

import { posts } from 'src/constants/posts'
import * as S from './style'

const Timeline = () => {
  return (
    <S.Wrapper>
      {posts.map(({ createdAt, title, description }, index) => (
        <Link key={index} href={`/blog-page?pageId=${index + 1}`} passHref>
          <S.CardContainer>
            <S.Time>{moment(createdAt).format('LL')}</S.Time>
            <S.Card>
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
