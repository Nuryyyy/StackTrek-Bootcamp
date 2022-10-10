function myfunction_y() {
    document.getElementById("drpbtnList").classList.toggle("show");
    console.log("hello")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.mainTabsLinks')) {
      var dropdowns = document.getElementsByClassName("dropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// function myfunction_x(evt, menuTab) {
//   var i, tabContent, mainTabsLinks;
//   tabContent = document.getElementsByClassName("tabContent");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }
//   mainTabsLinks = document.getElementsByClassName("mainTabsLinks");
//   for (i = 0; i < mainTabsLinks.length; i++) {
//     mainTabsLinks[i].className = mainTabsLinks[i].className.replace(" active", "");
//   }
//   document.getElementById(menuTab).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

// function myfunction_z(){
const hobbies = ["Read fiction book", "Watch documentaries", "Playing Genshin Impact"]
let hLen = hobbies.length;

let textHobbies = "<ul>"
for (let i = 0; i < hLen; i++) {
  textHobbies += "<li>" + hobbies[i] + "</li>";
}
textHobbies += "</ul>";

document.getElementById("hobbies").innerHTML = textHobbies;

console.log(textHobbies)


//food
const food = ["Shawarma", "Seafoods", "Lasagna", "Manga with bagoong","Kwek-kwek","Fish Sinigang"]
let fLen = food.length;

let textFood = "<ul>"
for (let i = 0; i < fLen; i++) {
  textFood += "<li>" + food[i] + "</li>";
}
textFood += "</ul>";

document.getElementById("food").innerHTML = textFood;

//tvSeries
const tvSeries = ["The Crown", "The Queen's Gambit", "The Haunting of Hill House", "Bridgerton", "The Witcher","Code-Geass","Death-Note","Jujutse-Kaisen"]
let tLen = tvSeries.length;

let texttvSeries = "<ul>"
for (let i = 0; i < tLen; i++) {
  texttvSeries += "<li>" + tvSeries[i] + "</li>";
}
texttvSeries += "</ul>";

document.getElementById("tvSeries").innerHTML = texttvSeries;

//movies
const movies = ["White Tiger", "Sherlock Holmes","Hunger Games", "Twilight", "Me before you", "Black Panther", "Lord of the Rings", "Star-Wars"]
let mLen = movies.length;

let textmovies = "<ul>"
for (let i = 0; i < mLen; i++) {
  textmovies += "<li>" + movies[i] + "</li>";
}
textmovies += "</ul>";

document.getElementById("movies").innerHTML = textmovies;