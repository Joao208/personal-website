import { useRouter } from 'next/router'
import { getAbsoluteURL } from './utils'

export default function useOpenGraphImage() {
  const router = useRouter()
  const searchParams = new URLSearchParams()
  searchParams.set('path', router.asPath.replace('/posts/', '/posts/open-graph/'))
  const fullImageURL = getAbsoluteURL(`/api/open-graph-image?${searchParams}`)
  return { imageURL: fullImageURL }
}
