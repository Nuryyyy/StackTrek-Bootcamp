const express = require('express')   // express we use for API
const bodyParser = require('body-parser')  //interpret data
const  Pool  = require('pg').Pool //for postgres

//initialize
const app = express()  
const port =  3000 
const pool =  new  Pool({
    user:  'postgres',
    host:  'localhost',
	database:  'studentapi',
    password: '14*NuBdulla_96',
    port:  5432
})

app.use(bodyParser.urlencoded({ extended: true })); //default true
app.use(bodyParser.json()); 

//home
app.get('/',  (request, response)  =>  { 
    response.json(
	    { info:  'Hello I am Backend developer now'  }
    )  
})

app.get("/students", async (request, response) => {
    try {
	    const students = await  pool.query('SELECT * FROM public.studentdata ORDER BY studentid ASC');
	    response.json(students.rows)
    } catch (error) {
	    console.log(error)
    }
})

//add new row
app.post("/student", async (request, response) => {
    try {
        const {name, studentid} = request.body
	    const student = await  pool.query("INSERT INTO public.studentdata(name,studentid) VALUES($1, $2) RETURNING *",[name, studentid]);
	    // response.json(student.rows[0])
        console.log(student); 
	    // student.push(student); 
	    response.send(`Student ${student.rows[0].name} is added to the database`);
    } catch (error) {
	    console.log(error)
    }
})
//delete row
app.delete("/student/:studentid", async (request, response) => {
    try {
        const studentid = request.params.studentid
	    pool.query("DELETE FROM public.studentdata WHERE studentid = $1", [studentid]);
	    // response.json(student.rows[0])
        console.log(studentid); 
	    response.send(`Student ${studentid} is deleted from database`);
    } catch (error) {
	    console.log(error)
    }
})

//get specific row based on name
app.get("/student/:name", async (request, response) => {
    try {
	    const name = request.params.name
	    const student = await pool.query("SELECT * FROM public.studentdata WHERE name = $1", [name]);
	    response.json(student.rows)
        // console.log(name); 
	    //response.send(`Student ${name} details.`);
    } catch (error) {
	    console.log(error)
    }
})

app.listen(port,  ()  =>  { 
    console.log(`App running on port http://localhost:3000/.`)  
})