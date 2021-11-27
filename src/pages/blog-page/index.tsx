import { Container } from '../../components/home/styles'
import * as S from '../../components/blog-page/styles'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { Header } from '@/components/HeaderComponent'
import { useRouter } from 'next/router'
import { Footer } from '@/components/FooterComponent'
import { posts } from 'src/constants/posts'

const BlogPage = () => {
  const router = useRouter()
  const { pageId } = router.query

  const index = typeof pageId === 'string' && parseFloat(pageId ?? '0') - 1

  const post = posts[index || -1]

  return (
    <>
      <Container>
        <Header page="blog-page" />
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
        <Footer />
      </Container>
    </>
  )
}

export default BlogPage
