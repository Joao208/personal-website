import Link from 'next/link'

import { DefaultHead } from '@/components/DefaultHead'
import { Header } from '@/components/HeaderComponent'
import { useLanguage } from 'src/languages/hooks'

import * as S from '../components/home/styles'

const Home = () => {
  const { text } = useLanguage()

  return (
    <>
      <DefaultHead />
      <S.Container>
        <Header page="home" isAbsolute />
        <S.Image src="/home.png" />
        <S.Content>
          <S.Title>
            {text.title[0]} <br />
            {text.title[1]}
          </S.Title>
          <S.Paragraph>
            {text.paragraph[0]}
            <br />
            {text.paragraph[1]} <br />
            {text.paragraph[2]}
            {text.paragraph[3]} <br />
            {text.paragraph[4]}
          </S.Paragraph>
          <S.ButtonContainer>
            <Link href="/" passHref>
              <S.ButtonGreen>{text.buttonGreen}</S.ButtonGreen>
            </Link>
            <Link href="/projects" passHref>
              <S.ButtonGray>{text.buttonGray}</S.ButtonGray>
            </Link>
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Home
