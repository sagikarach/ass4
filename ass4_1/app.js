import express from 'express'
const app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('<html><body><h1>GET</h1></body></html>')
})
app.listen(808)
