import Link from 'next/link'
import Head from 'next/head'

import { Container } from '../../components/home/styles'
import { Header } from '@/components/HeaderComponent'

import * as S from '../../components/blog/styles'
import { useEffect, useState } from 'react'
import { getPosts } from 'src/services'
import { Loading } from '@/components/Loading'
import { useLanguage } from 'src/languages/hooks'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const { lang, text } = useLanguage()

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const response = await getPosts(lang)

      setPosts(response)
      setLoading(false)
    }

    loadPosts()
  }, [lang])

  return (
    <>
      <Head>
        <title>João Augusto</title>

        <meta property="og:title" content="João Augusto - Software Engineer" />
        <meta property="og:image" content="https://joaobarros.s3.us-east-2.amazonaws.com/Component+1.png" />
        <meta property="og:description" content="Hi, I'm João! Join my Blog to see my tutorials and my stories" />
        <meta property="og:site_name" content="João Augusto" />
        <meta property="og:type" content="website" />
      </Head>
      {loading && <Loading />}
      <Container>
        <Header page="blog" />
        <S.Title>{text.blogTitle}</S.Title>
        <S.FlexWrapper>
          {posts.map(({ title, description, id, cover }) => (
            <Link key={id} href={`/blog-page?pageId=${id}`} passHref>
              <S.Card>
                <S.CardImage src={cover} />
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
