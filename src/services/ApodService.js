import { logger } from '../utils/Logger'

const { default: axios } = require('axios')
const { AppState } = require('../AppState')

class ApodService {
  async getApod() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=VRBv2NH0MY6Y37om5hXZZU7aNFvkNXpaXyvmLHNL')
    logger.log(res.data)
    AppState.apod = res.data
  }
}

export const apodService = new ApodService()
