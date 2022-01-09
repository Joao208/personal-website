import { InputHTMLAttributes } from 'react'

export interface CardInterface extends InputHTMLAttributes<HTMLInputElement> {
  selected?: boolean
}

export interface TimelineInterface extends InputHTMLAttributes<HTMLInputElement> {
  posts: never[]
}

export interface WrapperInterface extends InputHTMLAttributes<HTMLInputElement> {
  telegram?: string
}
