import axios from 'axios'
const BASE_URL = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1'
export const getText = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(BASE_URL)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
