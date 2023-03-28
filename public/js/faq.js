"use strict";

const $ = (selector) => document.querySelector(selector);
let timer;
let timerCounter = 10;
const goToTerms = () =>{
    timerCounter -= 1;
    if(timerCounter>0){
        $("#seconds").textContent = timerCounter;
    }else{
        window.location.href = "terms"
    }
}
const acceptTerms = () =>{
    clearInterval(timer);
    $("#terms").setAttribute("class","hidden");
}
const toggleQuestion = (evt)=>{
    evt.currentTarget.classList.toggle("minus")
    let answerDiv = evt.currentTarget.nextElementSibling;
    answerDiv.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    //Check terms for accepting
    $("#seconds").textContent = timerCounter;
    const query = window.location.search;
    const urlParameters = new URLSearchParams(query)
    //const accepted = urlParameters.get("first_name")
    const accepted = urlParameters.get("accepted")
    //console.log(urlParameters.get("first_name")+" gabbldy gook")

    $("#accept").addEventListener("click", acceptTerms);

    const h2Element = document.querySelectorAll("h2");
    for (let h2 of h2Element){
        h2.addEventListener("click", toggleQuestion)
    }

    if(accepted){
        $("#terms").setAttribute("class","hidden");
    }else{
        timer = setInterval(goToTerms, 1000);

    }
});
