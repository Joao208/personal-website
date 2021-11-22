import Link from "next/link";
import Head from "next/head";

import { Container, Header, ButtonHeader } from "../Home/styles";
import * as S from "./styles";

const Contact = () => {
  const cards = ["a", "b", "c", "d", "e", "f"];

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
      <Container>
        <Header>
          <div>
            <Link href="/">
              <ButtonHeader active>Home</ButtonHeader>
            </Link>
            <Link href="/contact">
              <ButtonHeader>Contact</ButtonHeader>
            </Link>
            <Link href="/projects">
              <ButtonHeader>Projects</ButtonHeader>
            </Link>
            <Link href="/blog">
              <ButtonHeader>Blog</ButtonHeader>
            </Link>
          </div>
        </Header>
        <S.Title>What i’ve done</S.Title>
        <S.FlexWrapper>
          {cards.map((_, index) => (
            <S.Card>
              <S.CardImage src={`/cardimage${index + 1}.png`} />
              <S.ContainerText>
                <S.CardTitle>There is more than you know</S.CardTitle>
                <S.CardDescription>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </S.CardDescription>
                <S.CardButton></S.CardButton>
              </S.ContainerText>
            </S.Card>
          ))}
        </S.FlexWrapper>
      </Container>
    </>
  );
};

export default Contact;
