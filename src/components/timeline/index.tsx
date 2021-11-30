import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { posts } from 'src/constants/posts'
import * as S from './style'

const Timeline = () => {
  const router = useRouter()
  const { pageId } = router.query

  const index = typeof pageId === 'string' && parseFloat(pageId ?? '0')

  return (
    <S.Wrapper>
      {[...posts].reverse().map(({ createdAt, title, description }, ind) => (
        <Link key={ind} href={`/blog-page?pageId=${ind + 1}`} passHref>
          <S.CardContainer>
            <S.Time>{moment(createdAt).format('LL')}</S.Time>
            <S.Card selected={ind + 1 == index}>
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
