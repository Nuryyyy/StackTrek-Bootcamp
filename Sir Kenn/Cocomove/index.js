const express = require('express')   // express we use for API
const bodyParser = require('body-parser')  //interpret data
const  Pool  = require('pg').Pool //for postgres

//initialize
const app = express()  
const port =  3000 
const pool =  new  Pool({
    user:  'postgres',
    host:  'localhost',
	database:  'sirkencocomove',
    password: '14*NuBdulla_96',
    port:  5432
})

app.use(bodyParser.urlencoded({ extended: true })); //default true
app.use(bodyParser.json()); 


//home
app.get('/',  (request, response)  =>  { 
    response.json(
	    { info:  'Welcome to Cocomove'}
    )  
})

app.get('/skins', async (request, response) => {
    try {
        const skins = await pool.query("SELECT * FROM public.skin ORDER BY id ASC ")
        response.json(skins.rows)
    } catch (error) {
        console.log(error)
    }
})

app.get('/devices', async (request, response) => {
    try {
        const devices = await pool.query("SELECT * FROM public.device ORDER BY id ASC ")
        response.json(devices.rows)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,  ()  =>  { 
    console.log(`App running on port http://localhost:3000/.`)  
})
