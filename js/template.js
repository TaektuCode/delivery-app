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

function getCartTemplate(item, index) {
  return `
    <article class="my-2 border-b-2 border-b-gray-300">
      <div class="flex items-center justify-between">
        <h2 class="font-poppins font-bold">${item.name}</h2>
        <span>${(item.price * item.amount).toFixed(2)}€</span>
      </div>
      <p class="font-roboto flex items-center">
        Quantity: 
        <button class="px-2 ml-2 bg-gray-200 rounded" onclick="updateCartItem(${index}, 'decrease')">-</button>
        <span class="mx-2">${item.amount}</span>
        <button class="px-2 bg-gray-200 rounded" onclick="updateCartItem(${index}, 'increase')">+</button>
      </p>
    </article>
  `;
}
