



// console.log(imported.data)

// const x = data.x;

// data.x(item => console.log(item))

// const data  = import('./details.json', 
// {
//  assert: {type: 'json'}
 
// })
// console.log(data)

fetch("./details.json")
.then((res) => {
  return res.json();
})
.then((function(data) { 
    
    // console.log(data)


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


}))



// let object={};
// let keys = Object.keys(data);
// let values = Object.values(data);
// for (let i = 0; i < keys.length; i++) {
//   object[keys[i]] = values[i];
//   console.log(object)
// }






