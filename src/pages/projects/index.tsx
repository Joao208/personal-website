import { Footer } from '@/components/FooterComponent'
import { Header } from '@/components/HeaderComponent'
import { projects } from 'src/constants/projects'
import { Container } from '../home/styles'
import * as S from './styles'

const Projects = () => {
  return (
    <>
      <Container>
        <Header page="projects" />
        <S.Title>What i’ve done</S.Title>
        <S.FlexWrapper>
          {projects.map(({ title, description, gitLink }, index) => (
            <a key={index} target="_blank" href={gitLink} rel="noreferrer">
              <S.Card>
                <S.CardImage src={`/cards/cardimage${index + 1}.png`} />
                <S.ContainerText>
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardDescription>{description}</S.CardDescription>
                  <S.CardButton></S.CardButton>
                </S.ContainerText>
              </S.Card>
            </a>
          ))}
        </S.FlexWrapper>
        <Footer />
      </Container>
    </>
  )
}

export default Projects
