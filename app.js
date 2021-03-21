const express = require('express')
const cors = require('cors')
const router = require('./src/routes')
const path = require('path');
const { json, urlencoded } = express
const app = express()
const host = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 4500
app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))
app.use(router)
app.use('/revisasivivo',(req,res) => {
     res.json({"status":"si estoy vivo"});
})
app.use('/', (req, res) => { res.send(`<h1> Esta es la aplicación 2</h1>`);})
app.listen(port,host, () => { console.log(`Server listening on port ${port} in the host ${host}`); })
