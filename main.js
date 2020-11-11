const firstPage = document.querySelector(".first-page") ;
const CovidPage = document.querySelector(".covid");
const mealsPage = document.querySelector(".recipe");
const recipBtn = document.querySelector(".recipe-btn");//check
const covidBtn = document.querySelector(".covid-btn");//check
const mainRecipBtn = document.querySelector("#main-recipe");//check
const mainCovidBtn = document.querySelector("#main-covid");//check
const mealsPageSearch = document.querySelector(".recipe-search-result");//check
const CovidPageSearch = document.querySelector(".covid-search-result");//check
const mealsSearchBtn = document.querySelector("#meal-search-btn");
const CovidSearchBtn = document.querySelector("#covid-search-btn");
const mealsSearchInput = document.querySelector("#mealSearchInput"); //check
const CovidSearchInput = document.querySelector("#covidSearchResult");//check

recipBtn.addEventListener('click' , ()=>{
 firstPage.style.display="none";
 CovidPage.style.display="none";
 mealsPage.style.display="block";
// body.style.backgroundImage = "linear-gradient(to bottom,rgb(58, 57, 54),rgba(240, 32, 212, 0.575))";
})
covidBtn.addEventListener('click' , ()=>{
    firstPage.style.display="none";
    mealsPage.style.display="none";
    CovidPage.style.display="block";
   // body.style.backgroundImage = "linear-gradient(to bottom,rgb(58, 57, 54),rgba(240, 32, 212, 0.575))";
   })

   mainRecipBtn.addEventListener('click',()=>{
    firstPage.style.display="block";
    CovidPage.style.display="none";
    mealsPage.style.display="none";
   
   })

   mainCovidBtn.addEventListener('click',()=>{
    firstPage.style.display="block";
    CovidPage.style.display="none";
    mealsPage.style.display="none";
   })




CovidSearchBtn.addEventListener('click' , ()=>{
    const covidValue = CovidSearchInput.value;
    if(covidValue.length == 0){
        let message = document.createElement('p');
        message.textContent = "can't be empty";
        CovidPageSearch.appendChild(message);}
        else{
            const covidUrl = `https://api.covid19api.com/live/country/${covidValue}`;
            xhrRequest(covidUrl,(response)=>{
                CovidPageSearch.textContent = "";
                const covidCountey = document.createElement('p');
                covidCountey.textContent = "The Country is :" + response[1].Country;
                covidCountey.style.top = "80px";
                CovidPageSearch.appendChild(covidCountey);
                const covidDate = document.createElement('p');
                covidDate.textContent = "The Date is :" + response[1].Date;
                CovidPageSearch.appendChild(covidDate);
                const covidDeath = document.createElement('p');
                covidDeath.textContent = "Number Of Deaths is : " + response[1].Deaths;
                covidDeath.style.top = "110px";
                CovidPageSearch.appendChild(covidDeath);
                const covidActive = document.createElement('p');
                covidActive.textContent = "Number Of Active is : " + response[1].Active;
                covidActive.style.top = "130px";
                CovidPageSearch.appendChild(covidActive);
                const covidRecoverd = document.createElement('p');
                covidRecoverd.textContent = "Number Of Recovered is : " + response[1].Recovered;
                covidRecoverd.style.top = "160px";
                CovidPageSearch.appendChild(covidRecoverd);
            });
        }
});
mealsSearchBtn.addEventListener("click", () => {
  const mealValue = mealsSearchInput.value;
  if(mealValue.length == 0){
      let message = document.createElement('p');
      message.textContent = "can't be empty";
      mealsPageSearch.appendChild(message);
  }else{
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue}`;
    xhrRequest(urlMeal, (response) => {
      mealsPageSearch.textContent = '';
        let meal = response.meals[0];
        
            let mealNameElement = document.createElement('p');
            mealNameElement.style.top = "30px";
            mealNameElement.style.left = "140px";
            mealNameElement.style.height = '100px';
            mealNameElement.textContent= meal.strMeal;
            let mealPic = document.createElement('img');
             mealPic.style.width = '80px';
            mealPic.style.height = '80px';
            mealPic.style.left = "130px"; mealPic.setAttribute('src', meal.strMealThumb);
            let mealInstructionElement = document.createElement('p');
            mealInstructionElement.textContent = meal.strInstructions;
            mealInstructionElement.style.top = "60px";
            let mealDiv = document.createElement('div');
            mealDiv.setAttribute('class', 'meal-div');
            mealDiv.appendChild(mealPic);
            mealDiv.appendChild(mealNameElement);
            mealDiv.appendChild(mealInstructionElement);
            mealsPageSearch.appendChild(mealDiv);
        });
    
  }

});
