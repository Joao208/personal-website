import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Header } from '@/components/HeaderComponent'
import { Loading } from '@/components/Loading'
import { getProjects } from 'src/services'
import { Container } from '../../components/home/styles'
import * as S from '../../components/blog/styles'
import { useLanguage } from 'src/languages/hooks'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const { lang, text } = useLanguage()

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const response = await getProjects(lang)

      setProjects(response)
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
        <Header page="projects" />
        <S.Title>{text.projectTitle}</S.Title>
        <S.FlexWrapper>
          {projects.map(({ title, description, gitLink, cover, id }) => (
            <a key={id} target="_blank" href={gitLink} rel="noreferrer">
              <S.Card>
                <S.CardImage src={cover} />
                <S.ContainerText>
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardDescription>{description}</S.CardDescription>
                  <S.CardButton></S.CardButton>
                </S.ContainerText>
              </S.Card>
            </a>
          ))}
        </S.FlexWrapper>
      </Container>
    </>
  )
}

export default Projects
