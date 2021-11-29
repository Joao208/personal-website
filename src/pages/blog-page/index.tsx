import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container } from '../../components/home/styles'
import * as S from '../../components/blog-page/styles'

import { Header } from '@/components/HeaderComponent'
import { markdowns, posts } from 'src/constants/posts'
import Timeline from '@/components/timeline'

const BlogPage = () => {
  const router = useRouter()
  const { pageId } = router.query

  const index = typeof pageId === 'string' && parseFloat(pageId ?? '0') - 1
  const indexOf = typeof index === 'number' ? index : -1

  const post = posts[indexOf]

  return (
    <>
      <Head>
        <title>{post?.title ?? 'João Augusto'}</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="description" content={post?.subtitle ?? `Hi! I'm João, come talking with me...`} />
      </Head>
      <Container>
        <Header page="blog-page" />
        <Timeline />
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
            {markdowns[indexOf]}
          </ReactMarkdown>
        </S.ContainerMarkdown>
      </Container>
    </>
  )
}

export default BlogPage
