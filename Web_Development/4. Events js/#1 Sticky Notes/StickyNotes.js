//const txt = document.getElementById('newnote');
//const btn = document.getElementById('addNote')
// const out = document.getElementById('output1')
// // const mainID = document.getElementById('stickynotes')
// // const iDunooo = mainID.querySelector('.output')

// function display() {
//     out.innerHTML = txt.value;
// }
// btn.addEventListener('click', display);
// document.body.appendChild(display)
// function newnote(){

// }


document.querySelector('#addNote').onclick = function() 

{
    if (document.querySelector('#newnote input').value.length == 0) {
        alert("Please enter your note/s.")
    }

    else {
        //changeColor();
        document.querySelector("#notes").innerHTML +=`
            <div class="note">
                <span id="notename">
                ${document.querySelector('#newnote input').value}
                </span>
               
            </div>
           
        `
    }
}

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.getElementById(notes).style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }

document.querySelector('#notes').style.background.backgroundColor = 'red';


function changeColor() {
    background.style.backgroundColor=
    'rgb('+Math.round(Math.random()*255) + 
    ',' + Math.round(Math.random()*255) + 
    ',' + Math.round(Math.random()*255) + ')';

}
          

// document.querySelector(".note").style.backgroundColor = function(){
//     background.style.backgroundColor=
//     'rgb('+Math.round(Math.random()*255) + 
//     ',' + Math.round(Math.random()*255) + 
//     ',' + Math.round(Math.random()*255) + ')';
// }