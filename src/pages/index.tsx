import { Header } from '@/components/HeaderComponent'
import Link from 'next/link'

import * as S from '../components/home/styles'

const Home = () => {
  return (
    <>
      <S.Container>
        <Header page="home" isAbsolute />
        <S.Image src="/home.png" />
        <S.Content>
          <S.Title>
            Hey there 👋 <br />I am João
          </S.Title>
          <S.Paragraph>
            I am a passionate full-stack developer. My passion is to develop
            <br />
            complete and complex software with increasing challenges. <br />I created sophisticated applications with amazing
            architectures <br />
            from scratch.
          </S.Paragraph>
          <S.ButtonContainer>
            <Link href="/" passHref>
              <S.ButtonGreen>Contact</S.ButtonGreen>
            </Link>
            <Link href="/projects" passHref>
              <S.ButtonGray>Let’s see projects</S.ButtonGray>
            </Link>
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Home
