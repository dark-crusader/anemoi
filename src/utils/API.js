/**
 * weather react serverless API functions URL
 */
// const isProduction = process.env.NODE_ENV === 'production'
const isProduction = true

export default `https://cors-anywhere.herokuapp.com/${isProduction
  ? 'https://weather-react-api.now.sh'
  : 'https://weather-react-api-dev.now.sh'}`
