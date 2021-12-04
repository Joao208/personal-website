import Link from 'next/link'

import { Container } from '../../components/home/styles'
import { Header } from '@/components/HeaderComponent'

import * as S from '../../components/blog/styles'
import { useEffect, useState } from 'react'
import { getPosts } from 'src/services'
import { Loading } from '@/components/Loading'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const response = await getPosts()

      setPosts(response)
      setLoading(false)
    }

    loadPosts()
  }, [])

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Header page="blog" />
        <S.Title>knowledge I want to pass on</S.Title>
        <S.FlexWrapper>
          {[...posts].reverse().map(({ title, description, id, cover }) => (
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
