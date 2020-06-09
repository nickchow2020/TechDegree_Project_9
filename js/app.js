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
let timer = setInterval(animaText,60);

function animaText(){
    const span = headerTitle.querySelectorAll("span")[index];
    span.classList.add("animate");
    index ++;
    if(index === headerTitleArray.length){
        clearInterval(timer);
        index = 0;
    }
};

//****************   ******************/
// Header Text Animation
//****************   ******************/
const blinkWorks = ["coding","do project","learning","workout"];
const blinkText = document.querySelector(".headerP");
const cursor = document.querySelector(".cursor");
let arrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < blinkWorks[arrayIndex].length){
        if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        blinkText.textContent += blinkWorks[arrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type,300);
    }else{
        cursor.classList.remove("typing");
        setTimeout(erase,2000);
    }
}

function erase(){
    if(charIndex > 0){
        if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        blinkText.textContent = blinkWorks[arrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(erase,200)
    }else{
        cursor.classList.remove("typing");
        arrayIndex ++;
        if(arrayIndex >= blinkWorks.length){
            arrayIndex = 0;
        }
        setTimeout(type,1000);
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    type();
})

//****************   ******************/
// modal window Wechat Animation
//****************   ******************/

function wechatClick() {
    var x = document.getElementById("wechatQRdiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }