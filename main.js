const mealsPage = document.querySelector(".nba hide");
const CovidPage = document.querySelector(".recipe hide");
const mealsPageSearch = document.querySelector(".nba-search-result");
const CovidPageSearch = document.querySelector(".recipe-search-result");
const mealsSearchBtn = document.querySelector("#nba-search-btn");
const CovidSearchBtn = document.querySelector("#recipe-search-btn");
const mealsSearchInput = document.querySelector("#nbaSearchInput");
const CovidSearchInput = document.querySelector("#recipeSearchInput");

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
  const urlMeal = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue}`;
  xhrRequest(urlMeal, (response) => {
    mealsPageSearch.textContent = '';
      let mealsArr = response.meals;
      mealsArr.forEach(meal => {
          let mealNameElement = document.createElement('p');
          mealNameElement.textContent= meal.strMeal;
          let mealPic = document.createElement('img');
          mealPic.setAttribute('src', meal.strMealThumb);
          let mealCategoryElement = document.createElement('p');
          mealCategoryElement.textContent = meal.strCategory;
          let mealInstructionElement = document.createElement('p');
          mealInstructionElement.textContent = meal.strInstructions;
          let MealVideoElement = document.createElement('a');
          MealVideoElement.textContent = 'guide video';
          MealVideoElement.setAttribute('href', meal.strYoutube);
          let mealDiv = document.createElement('div');
          mealDiv.setAttribute('class', 'meal-div');
          mealDiv.appendChild(mealNameElement);
          mealDiv.appendChild(mealCategoryElement);
          mealDiv.appendChild(mealInstructionElement);
          mealDiv.appendChild(MealVideoElement);
          mealDiv.appendChild(mealPic);
          mealsPageSearch.appendChild(mealDiv);
      });
      console.log(response);
  });
});
