import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5001',
  timeout: 30000,
})

export const getPosts = async (pageId?: string | string[] | undefined) => {
  try {
    const response = await api.get(`/posts?pageId=${pageId}`)

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getProjects = async () => {
  try {
    const response = await api.get(`/projects`)

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const newSubscription = async (email: string) => {
  try {
    const response = await api.post(`/emails`, { email })

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}
