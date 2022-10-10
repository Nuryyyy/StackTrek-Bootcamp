
function totalClick(click){
    const totalClicks = document.getElementById('output');
    const value = parseInt(totalClicks.innerHTML) + click;
    totalClicks.innerHTML = value;
}