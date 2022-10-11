let res = fetch("./details.json", {
    body: JSON.stringify(),
    headers:{
      "Content-Type":'application/json',
      "Accept": 'application/json'
  }
}
)
.then((res) => {
  result = res.json()
    console.warn("result", result)
  return result
})
.then((function(data) { 


    const Infos = [data].map((info) =>
    {
        return (
            fullname = info.fullname,
            age = info.age,
            hobbies = info.hobbies,
            favoritefood = info.favoritefood

            )

    }
        )
        document.getElementById("description").innerHTML = `
        First Name: ${fullname} <br> 
        Age: ${age} <br>
        Hobbies:  ${hobbies} <br>
        Favorite food: ${favoritefood}
        `

     
    
console.log(Infos)


}

))


.catch((error) => {
  console.log(error)
})



// let object={};
// let keys = Object.keys(data);
// let values = Object.values(data);
// for (let i = 0; i < keys.length; i++) {
//   object[keys[i]] = values[i];
//   console.log(object)
// }






