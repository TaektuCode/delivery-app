// TEMPLATE //
function getDishesTemplate(dish, index) {
  return `
      <article class="my-2 border-b-2 border-b-deep-green">
        <div class="flex items-center justify-between">
          <h2 class="font-poppins font-bold">${dish.name}</h2>
          <button>X</button>
        </div>
        <p class="font-roboto mb-2">${dish.description}</p>
        <span>${dish.price}€</span>
      </article>
    `;
}

function getDrinksTemplate(drink, index) {
  return `
      <article class="my-2 border-b-2 border-b-deep-green">
        <div class="flex items-center justify-between">
          <h2 class="font-poppins font-bold">${drink.name}</h2>
          <button>X</button>
        </div>
        <p class="font-roboto mb-2">${drink.description}</p>
        <span>${drink.price}€</span>
      </article>
    `;
}

function getToppingsTemplate(topping, index) {
  return `
      <article class="my-2 border-b-2 border-b-deep-green">
        <div class="flex items-center justify-between">
          <h2 class="font-poppins font-bold">${topping.name}</h2>
          <button>X</button>
        </div>
        <p class="font-roboto mb-2">${topping.description}</p>
        <span>${topping.price}€</span>
      </article>
    `;
}
