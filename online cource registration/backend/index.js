const express = require('express')
const app = express()
const dataBase = require('./db')
const cors = require('cors')
const port = 5000
dataBase()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use(cors())
app.use(express.json())
app.use('/api/user', require('./User/userRoute'))
app.use('/api/course', require('./Course/courseRoute'))
app.use('/admin', require('./admin/adminRoute'))

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})