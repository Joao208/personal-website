import Link from 'next/link'

import { Container } from '../styles'
import { Header } from '@/components/HeaderComponent'

import * as S from './styles'
import { Footer } from '@/components/FooterComponent'
import { posts } from 'src/constants/posts'

const Blog = () => {
  return (
    <>
      <Container>
        <Header page="blog" />
        <S.Title>knowledge I want to pass on</S.Title>
        <S.FlexWrapper>
          {posts.map(({ title, description }, index) => (
            <Link key={index} href={`/blog-page?pageId=${index + 1}`} passHref>
              <S.Card>
                <S.CardImage src={`/blogCards/blogCard${index + 1}.png`} />
                <S.ContainerText>
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardDescription>{description}</S.CardDescription>
                  <S.CardButton></S.CardButton>
                </S.ContainerText>
              </S.Card>
            </Link>
          ))}
        </S.FlexWrapper>
        <Footer />
      </Container>
    </>
  )
}

export default Blog
