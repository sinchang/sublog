import axios from 'axios'
import NProgress from 'nprogress'
import config from './config.js'

const token = config.token.split('#').join('')

export const ajax = (url) => {
  NProgress.inc()
  return axios.get(url)
    .then(response => {
      NProgress.done()
      return response
    })
    .catch(error => {
      NProgress.done()
      return Promise.reject(error)
    })
}

export const getPostApi = id => {
  return `https://api.github.com/repos/${config.owner}/${config.repo}/issues/${id}?access_token=${token}`
}

export const getIndexApi = page => {
  return `https://api.github.com/repos/${config.owner}/${config.repo}/issues?page=${page}&per_page=${config.perPage}&filter=created&access_token=${token}`
}
