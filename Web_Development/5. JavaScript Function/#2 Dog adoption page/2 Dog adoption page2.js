
const dog = [
    {
    name: "Sushi",
    age: dogYears(1),
    image: "germanshepered.jpg",
    faveToys: ["bone","water","bottle"]
},
{
    name: "Dosan",
    age: dogYears(2),
    image: "beagle.jpg",
    faveToys: ["Ball","Shoes"]
},

{
    name: "Moonchin",
    age: dogYears(2),  
    image: "maltese.jpg",
    faveToys: ["Ducklins","Tabo"]
}];



function dogYears(year) {
 let age = 7 * year
 return age
}




console.log(dog[1].age)

document.getElementById("dog1display").innerHTML =
`Name: ${dog[0].name} <br>
Age: Your doggie is ${dog[0].age} years old in dog years <br>
<image src=${dog[0].image}> <br>
fave toys: ${dog[0].faveToys}`

document.getElementById("dog2display").innerHTML =
`Name: ${dog[1].name} <br>
Age: Your doggie is ${dog[1].age} years old in dog years <br>
<image src=${dog[1].image}> <br>
fave toys: ${dog[1].faveToys}`

document.getElementById("dog3display").innerHTML =
`Name: ${dog[2].name} <br>
Age: Your doggie is ${dog[2].age} years old in dog years <br>
<image src=${dog[2].image}> <br>
fave toys: ${dog[2].faveToys}`




