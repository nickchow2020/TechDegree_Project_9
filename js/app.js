//****************   ******************/
// Header Title Animation
//****************   ******************/
const headerTitle = document.querySelector(".header-title");
const headerTitleContent = headerTitle.textContent;
const headerTitleArray = headerTitleContent.split("");
headerTitle.textContent = "";

for(let i=0; i<headerTitleArray.length; i++){
    headerTitle.innerHTML += `<span>${headerTitleArray[i]}</span>`;
}

let index = 0;
let timer = setInterval(animaText,60)

function animaText(){
    const span = headerTitle.querySelectorAll("span")[index];
    span.classList.add("animate");
    index ++;
    if(index === headerTitleArray.length){
        clearInterval(timer);
        index = 0;
    }
}

