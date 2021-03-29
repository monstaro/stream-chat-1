const express = require('express')
const app = express()
const port = 8000
const StreamChat = require('stream-chat').StreamChat;
const cors = require("cors");
app.use(cors());
app.use(express.json());
require('dotenv').config({ path: '../../.env' })
 
const apiKey = process.env["REACT_APP_KEY"];
const secret = process.env["REACT_APP_SECRET"];
const serverClient =  StreamChat.getInstance(apiKey, secret);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/token', async (req, res) => {
    const { user_id } = req.body;
    const token = serverClient.createToken(user_id)
    try {
        res.status(200).send(token)
    } catch(err) {
        res.status(500).send('Server Error:', err)
    }
})

app.listen(port, () => {
  console.log(`express listening at http://localhost:${port}`)
})