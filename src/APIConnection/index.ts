// import 'dotenv/config';
import axios from 'axios'

const url = 'http://localhost:3001/'

const APIConnection = axios.create({ baseURL: url });

export default APIConnection
