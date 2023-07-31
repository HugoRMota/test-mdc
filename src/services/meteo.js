import axios from 'axios'
const BASE_URL = (latitude, longitude) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
const BASE_URL_IP =
  'https://api.ipbase.com/v2/info?apikey=ipb_live_qBfoWFZdidsbuL7RbJtjRB3bvJmVeBRm41XtvrnG&ip=1.1.1.1'

export const getMeteo = (latitude, longitude) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(BASE_URL(latitude, longitude))
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const getIP = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(BASE_URL_IP)
      resolve(data.data)
    } catch (error) {
      reject(error)
    }
  })
}
