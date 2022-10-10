const inputCelsius = document.getElementById('Celsius')
const displayOutput = document.getElementById('outputDisplay')
//const convert = document.getElementById()



//convert.addEventListener('click', convert);

// document.querySelector('#button').onclick = degreeToFarenheit()

function degreeToFarenheit() {
    let x = inputCelsius.value;
    if ((isNaN(x) == true) || (x == "")){
        console.log("invalid")
        alert("Invalid input! Please enter a value.")
    }
    else {
        result = ((9/5)*x)+32
        displayOutput.innerHTML = `${result} Farenheit`
        console.log(result)
    }

    
}
