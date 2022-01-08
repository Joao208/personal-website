import Head from 'next/head'

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
import { GetServerSidePropsContext } from 'next'
import { RenderHead } from '@/components/DefaultHead/renderHead'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageId = context.query.pageId

  const response = await getPosts('en', pageId)

  return {
    props: {
      response,
    },
  }
}

interface PostInterface {
  title: string
  description: string
  markdown: string
  subtitle: string
  cover: string
  createdAt: string
}

const BlogPage = ({ response }: { response: PostInterface }) => {
  const router = useRouter()
  const [post, setPost] = useState<PostInterface>({
    title: '',
    description: '',
    markdown: '',
    subtitle: '',
    cover: '',
    createdAt: '',
  })
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const { lang } = useLanguage()

  const { pageId } = router.query

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const responsePost = pageId && (await getPosts(lang, pageId))
      const allPosts = await getPosts(lang)
      if (responsePost) setPost(responsePost)
      setPosts(allPosts)
      setLoading(false)
    }

    loadPosts()
  }, [pageId, lang])

  return (
    <>
      <Head>
        <title>{response?.title || post?.title}</title>

        <RenderHead
          titleComplete={response?.title || post?.title}
          image={response?.cover || post?.cover}
          description={response?.subtitle || post?.subtitle}
        />

        <meta property="article:published_time" content={response?.createdAt || post?.createdAt} />
        <meta property="article:author" content="João Barros" />
        <meta property="article:section" content="Technology" />

        <meta prefix="og: http://ogp.me/ns#" name="twitter:card" content="summary_large_image" />
      </Head>

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
        {/* <Reactions /> */}
        <Footer loadingGlobal={loading} />
      </Container>
    </>
  )
}

export default BlogPage
