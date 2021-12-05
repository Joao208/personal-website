import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://bk-personal-website.onrender.com',
  timeout: 30000,
})

export const getPosts = async (lang: string, pageId?: string | string[] | undefined) => {
  try {
    const response = await api.get(`/posts?pageId=${pageId}&lang=${lang}`)

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getProjects = async (lang: string) => {
  try {
    const response = await api.get(`/projects?lang=${lang}`)

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
