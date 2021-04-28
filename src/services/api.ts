import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.0.101:3333'
})

export default api

/* json-server ./src/services/server.json --host 10.0.0.101 --port 3333 --delay 400 */