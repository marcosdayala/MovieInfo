import axios from "axios"

const { REACT_APP_LOCATION_KEY } = process.env;

const fecthIpAddress = async() => {
  const { data } = await axios.get('https://api.ipify.org')  
  return data
}

export const fecthLocation = async() => {
  const apiAddress = await fecthIpAddress()
  const { data } = await axios.get(`http://api.ipstack.com/${apiAddress}?access_key=${REACT_APP_LOCATION_KEY}`)
  return data.continent_code
}