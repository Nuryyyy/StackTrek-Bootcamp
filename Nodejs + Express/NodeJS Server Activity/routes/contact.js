
fetch("./contact.json")
.then((res) => {
  return res.json();
})
.then((function(data) { 
    
    // console.log(data)


    const Infos = [data].map((info) =>
    {
        return (
            email = info.email,
            linkedin = info.linkedin,
            github = info.github,
            contactnumber = info.contactnumber
            )

    }
        )
        document.getElementById("description").innerHTML = `
        Email: ${email} <br> 
        Linkedin: ${linkedin} <br>
        Github:  ${github} <br>
        Contact Number: ${contactnumber}
        `


    
     
    
console.log(Infos)


}))

