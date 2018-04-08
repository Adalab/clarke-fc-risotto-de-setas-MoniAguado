'use strict';

//   fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(json){
//     // Name
//     const recipe = json.recipe.name;
//     const nameHTML = document.querySelector('.header__title');
//     // Ingredients
//     const ingredients = json.recipe.ingredients;
//     const listHTML = '';
//     for (var i = 0; i < ingredients.length; i++) {
//       listHTML +=
//       '<li class="ingredients__item">
//         <input class="item__checkbox" type="checkbox">
//           <input class="item__quantity" id="item${i}--quantity" name="input--quantity" value="1" type="number">
//             <div class="item__description">
//               <h4 class="item__description--title">${ingredients[i].product}</h4>
//               <p class="item__description--brand">${ingredients[i].brand? `${ingredients[i].brand}` : ''}</p>
//               <p class="item__description--weight">${ingredients[i].quantity}</p>
//             </div>
//             <span class="item__price">${ingredients[i].price} €</span>
//           </li>'
//     }
//   })
//
// const listIngredients = document.querySelector('.ingredients__list');
// listIngredients.innerHTML = listHTML;

fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //Name
    const recipe = json.recipe.name;
    const nameHTML = document.querySelector('.header__title')
    nameHTML.innerHTML = recipe;
    //Ingredients
    const ingredients = json.recipe.ingredients;
    const listHTML = '';
    for (let i = 0; i < ingredients.length; i++) {
      let item =
      `<li class="ingredients__item">
          <input class="item__checkbox" type="checkbox">
          <input class="item__quantity" id="item${i}--quantity" name="input--quantity" value="1" type="number">
          <div class="item__description">
            <h4 class="item__description--title">${ingredients[i].product}</h4>
            <p class="item__description--brand">${ingredients[i].brand? `${ingredients[i].brand}` : ''}</p>
            <p class="item__description--weight">${ingredients[i].quantity}</p>
          </div>
          <span class="item__price">${ingredients[i].price} €</span>
      </li>`
const listIngredients = document.querySelector('.ingredients__list')
      listIngredients.insertAdjacentHTML('beforeend', item);
    }
  })
  .catch(function(error){
    console.log('Ha sucedido un error: ' + error);
})
