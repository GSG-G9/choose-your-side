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



function xhrRequest(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
      //handle more status results
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

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
        let mealsArr = response.meals;
        mealsArr.forEach(meal => {
            let mealNameElement = document.createElement('p');
            mealNameElement.style.height = '100px';
            mealNameElement.textContent= meal.strMeal;
            let mealPic = document.createElement('img');
            mealPic.style.width = '50px';
            mealPic.style.height = '50px';
            mealPic.setAttribute('src', meal.strMealThumb);
            let mealInstructionElement = document.createElement('p');
            mealInstructionElement.textContent = meal.strInstructions;
            let MealVideoElement = document.createElement('a');
            MealVideoElement.textContent = 'guide video';
            MealVideoElement.setAttribute('href', meal.strYoutube);
            let mealDiv = document.createElement('div');
            mealDiv.setAttribute('class', 'meal-div');
            mealDiv.appendChild(mealNameElement);
            mealDiv.appendChild(mealInstructionElement);
            mealDiv.appendChild(MealVideoElement);
            mealDiv.appendChild(mealPic);
            mealsPageSearch.appendChild(mealDiv);
        });
    });
  }

});
