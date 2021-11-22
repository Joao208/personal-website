import Head from "next/head";
import Link from "next/link";

import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <S.Container>
        <S.Header>
          <div>
            <Link href="/">
              <S.ButtonHeader active>Home</S.ButtonHeader>
            </Link>
            <Link href="/contact">
              <S.ButtonHeader>Contact</S.ButtonHeader>
            </Link>
            <Link href="/projects">
              <S.ButtonHeader>Projects</S.ButtonHeader>
            </Link>
            <Link href="/blog">
              <S.ButtonHeader>Blog</S.ButtonHeader>
            </Link>
          </div>
        </S.Header>
        <S.Image src="/home.png" />
        <S.Content>
          <S.Title>
            Hey there 👋 <br />I am João
          </S.Title>
          <S.Paragraph>
            I am a passionate full-stack developer. My passion is to develop
            <br />
            complete and complex software with increasing challenges. <br />I
            created sophisticated applications with amazing architectures <br />
            from scratch.
          </S.Paragraph>
          <S.ButtonContainer>
            <Link href="/contact">
              <S.ButtonGreen>Contact</S.ButtonGreen>
            </Link>
            <Link href="/projects">
              <S.ButtonGray>Let’s see projects</S.ButtonGray>
            </Link>
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
