import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-js-quiz-app-default-rtdb.europe-west1.firebasedatabase.app/'
})