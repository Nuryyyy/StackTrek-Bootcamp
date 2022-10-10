const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('It works! Welcome to the home page.')
})

app.get('/data', (req, res) => {
    const data = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(data);
})

app.get('/unknown', (req, res) => {
    res.status(404).send('Sorry, we can\'t find the specified page :(')
})

app.get('/secret', (req, res) => {
    res.status(403).end(); // 403 means Forbidden
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})
