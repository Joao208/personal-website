import Link from 'next/link'
import Head from 'next/head'

import { Container } from '../../components/home/styles'
import { Header } from '@/components/HeaderComponent'

import * as S from '../../components/blog/styles'
import { posts } from 'src/constants/posts'

const Blog = () => {
  return (
    <>
      <Head>
        <title>João Augusto - Blog</title>
        <meta name="description" content="Hi! I'm João, come talking with me..." />
      </Head>
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
      </Container>
    </>
  )
}

export default Blog
