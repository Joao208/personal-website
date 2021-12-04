import { InputHTMLAttributes } from 'react'

export interface FooterInterface extends InputHTMLAttributes<HTMLInputElement> {
  display: boolean
  onClickOutside: () => void
}

export interface ContainerInterface extends InputHTMLAttributes<HTMLInputElement> {
  display: boolean
}
