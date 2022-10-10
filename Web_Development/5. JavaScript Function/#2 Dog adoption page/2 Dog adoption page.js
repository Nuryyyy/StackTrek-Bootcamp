
const dog1 = {
    name: "Sushi",
    age: dogYears(1),
    image: "germanshepered.jpg",
    faveToys: ["bone","water","bottle"]
}

const dog2 = {
    name: "Dosan",
    age: dogYears(2),
    image: "beagle.jpg",
    faveToys: ["Ball","Shoes"]
}

const dog3 = {
    name: "Moonchin",
    age: dogYears(2),  
    image: "maltese.jpg",
    faveToys: ["Ducklins","Tabo"]
}



function dogYears(year) {
 let age = 7 * year
 return age
}

// const display = document.getElementById("dog1display");
// //const display = document.getElementById("dog2display");

// display.innerHTML = dog2.name


document.getElementById("dog1display").innerHTML =
`Name: ${dog1.name} <br>
Age: Your doggie is ${dog1.age} years old in dog years <br>
<image src=${dog1.image}> <br>
fave toys: ${dog1.faveToys}`

document.getElementById("dog2display").innerHTML =
`Name: ${dog2.name} <br>
Age: Your doggie is ${dog2.age} years old in dog years <br>
<image src=${dog2.image}> <br>
fave toys: ${dog2.faveToys}`




