const firstPage = document.querySelector(".first-page") ;
const covidPage = document.querySelector(".covid");
const recipePage = document.querySelector(".recipe");
const recipBtn = document.querySelector(".recipe-btn");
const covidBtn = document.querySelector(".covid-btn");
const mainRecipBtn = document.querySelector("#main-recipe");
const mainCovidBtn = document.querySelector("#main-covid");

recipBtn.addEventListener('click' , ()=>{
 firstPage.style.display="none";
recipePage.style.display="block";
// body.style.backgroundImage = "linear-gradient(to bottom,rgb(58, 57, 54),rgba(240, 32, 212, 0.575))";
})
covidBtn.addEventListener('click' , ()=>{
    firstPage.style.display="none";
    covidPage.style.display="block";
   // body.style.backgroundImage = "linear-gradient(to bottom,rgb(58, 57, 54),rgba(240, 32, 212, 0.575))";
   })

   mainRecipBtn.addEventListener('click',()=>{
    firstPage.style.display="block";
    recipePage.style.display="none";
   
   })

   mainCovidBtn.addEventListener('click',()=>{
    firstPage.style.display="block";
    covidPage.style.display="none";
   
   })