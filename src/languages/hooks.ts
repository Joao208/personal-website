import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { pt, en } from '../languages'

interface ILanguage {
  title: string[]
  paragraph: string[]
  buttonGreen: string
  buttonGray: string
  home: string
  project: string
  blog: string
  blogTitle: string
  projectTitle: string
}

export const useLanguage = () => {
  const router = useRouter()

  const { query, pathname } = router

  const { lang = 'en' } = query as { lang: string }
  const obj = { pt, en } as { [key: string]: ILanguage }

  const text = obj[lang] ?? en

  useEffect(() => {
    if (lang && !['pt', 'en'].includes(lang)) window.location.search = '?lang=en'
  }, [lang])

  return { text, lang, pathname }
}
