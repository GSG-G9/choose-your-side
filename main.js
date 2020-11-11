const firstPage = document.querySelector(".first-page") ;
const covidPage = document.querySelector(".covid");
const recipePage = document.querySelector(".recipe");
const recipBtn = document.querySelector(".recipe-btn");
const covidBtn = document.querySelector(".covid-btn");
const mainRecipBtn = document.querySelector("#main-recipe");
const mainCovidBtn = document.querySelector("#main-covid");
const inputMeal = document.querySelector("#recipe-input-meal");
const inputCountry = document.querySelector("#covid-input-country");
const recipeSearchBtn = document.querySelector("#recipe-search-btn");
const covidSearchBtn = document.querySelector("#covid-search-btn");
const recipeResult = document.querySelector(".recipe-search-result");
const covidResult = document.querySelector(".covid-search-btn");

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

   function makeSearch (){
    let xhr= XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4){
            if(xhr.status == 200){
               const resObj = JSON.parse(xhr.responseText);
               console.log(resObj);
               covidSearchBtn.addEventListener('click' , ()=>{
               covidResult=resObj[0].Deaths;
               })

            }else {
                console.log ("Error");
            }
        }
    } 
    const url = `https://api.covid19api.com/live/country/${inputCountry}`;
  xhr.open("GET" , url ,true);
  xhr.send();
   }