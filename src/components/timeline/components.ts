import { PostInterface } from '@/pages/blog-page/[pageId]'
import { InputHTMLAttributes } from 'react'

export interface CardInterface extends InputHTMLAttributes<HTMLInputElement> {
  selected?: boolean
}

export interface TimelineInterface extends InputHTMLAttributes<HTMLInputElement> {
  posts: PostInterface[]
}
