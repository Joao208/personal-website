import Head from 'next/head'

import { Container } from '../../components/home/styles'
import * as S from '../../components/blog-page/styles'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { Header } from '@/components/HeaderComponent'
import Timeline from '@/components/timeline'
import { getPosts } from 'src/services'
import { Footer } from '@/components/footer'
import { GetStaticPropsContext } from 'next'
import { RenderHead } from '@/components/DefaultHead/renderHead'

export interface PostInterface {
  id: string
  title: string
  description: string
  markdown: string
  subtitle: string
  cover: string
  createdAt: string
}

interface BlogPageInterface {
  posts: PostInterface[]
  post: PostInterface
}

const BlogPage: React.FC<BlogPageInterface> = ({ posts, post }) => {
  return (
    <>
      <Head>
        <title>{post?.title}</title>

        <RenderHead titleComplete={post?.title} image={post?.cover} description={post?.subtitle} />

        <meta property="article:published_time" content={post?.createdAt} />
        <meta property="article:author" content="João Barros" />
        <meta property="article:section" content="Technology" />

        <meta prefix="og: http://ogp.me/ns#" name="twitter:card" content="summary_large_image" />
      </Head>

      <Container>
        <Header page="blog-page" />
        <Timeline posts={posts} />
        <S.Title>{post?.title}</S.Title>
        <S.Subtitle>{post?.subtitle}</S.Subtitle>
        <S.ContainerMarkdown>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')

                return !inline && match ? (
                  <SyntaxHighlighter language={match[1]} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post?.markdown}
          </ReactMarkdown>
        </S.ContainerMarkdown>
        {/* <Reactions /> */}
        <Footer loadingGlobal={false} />
      </Container>
    </>
  )
}

export default BlogPage

export async function getStaticPaths() {
  const posts = await getPosts('en')

  const paths = posts.map((post: PostInterface) => ({
    params: { pageId: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const pageId = params?.pageId

  const posts = await getPosts('en')
  const post = await getPosts('en', pageId)

  return {
    props: {
      posts,
      post,
    },
    revalidate: 1000,
  }
}
