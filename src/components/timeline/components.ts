import { InputHTMLAttributes } from 'react'

export interface CardInterface extends InputHTMLAttributes<HTMLInputElement> {
  selected?: boolean
}
