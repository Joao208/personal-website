import { Container } from '../../components/home/styles'
import * as S from '../../components/blog-page/styles'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { Header } from '@/components/HeaderComponent'
import { useRouter } from 'next/router'
import Timeline from '@/components/timeline'
import { useEffect, useState } from 'react'
import { getPosts } from 'src/services'
import { Loading } from '@/components/Loading'
import { Footer } from '@/components/footer'
import { useLanguage } from 'src/languages/hooks'

interface PostInterface {
  title: string
  description: string
  markdown: string
  subtitle: string
}

const BlogPage = () => {
  const router = useRouter()
  const [post, setPost] = useState<PostInterface>({ title: '', description: '', markdown: '', subtitle: '' })
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showSubscribe, setShowSubscribe] = useState(false)
  const { lang } = useLanguage()

  const { pageId } = router.query

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const response = await getPosts(lang, pageId)
      const allPosts = await getPosts(lang)

      if (response) setPost(response)
      setPosts(allPosts)
      setLoading(false)

      if (!localStorage.getItem('already_subscribed')) {
        setTimeout(() => {
          setShowSubscribe(true)
        }, 300)
      }
    }

    loadPosts()
  }, [pageId, lang])

  return (
    <>
      {loading && <Loading />}
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
      </Container>
      <Footer
        display={showSubscribe}
        onClickOutside={() => {
          setShowSubscribe(false)
          localStorage.setItem('already_subscribed', 'true')
        }}
      />
    </>
  )
}

export default BlogPage
