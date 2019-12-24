const dotenv = require('dotenv')
dotenv.config()

const _PORT = process.env.PORT || 4002

const _MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongo:27017/subject-areas'

export default {
    PORT: _PORT,
    MONGODB_CONNECTION_STRING: _MONGODB_CONNECTION_STRING
}