// import 'dotenv/config';
import axios from 'axios'

const url = 'https://lisboa-store-back-end.herokuapp.com/'

const APIConnection = axios.create({ baseURL: url });

export default APIConnection
