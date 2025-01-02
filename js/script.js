// SCRIPT //

//Init Page//
function initPage() {
  renderItems(dailyDishes, getDishesTemplate); // Load Daily Dishes by default
  setupNavigation(); // Set up event listeners for navigation
}

// Render Items
function renderItems(items, getTemplate) {
  const contentRef = document.getElementById("content");
  contentRef.innerHTML = ""; // Clear previous content
  items.forEach((item, index) => {
    contentRef.innerHTML += getTemplate(item, index);
  });

  // Add event listeners to the "X" buttons
  const buttons = contentRef.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => addToCart(items[index]));
  });
}

// Function to handle navigation clicks //
function setupNavigation() {
  // Set a click event listener to the navigation bar
  document.querySelector("nav").addEventListener("click", (event) => {
    // Check if the clicked element is an anchor tag (A)
    if (event.target.tagName === "A") {
      event.preventDefault(); // Prevent the default anchor tag behavior (page reload)

      // Get the text content of the clicked a tag and remove any whitespace
      const selectedTab = event.target.textContent.trim();

      // Use a switch statement to see which tab is clicked and render the right items
      switch (selectedTab) {
        case "Daily Dishes":
          // If Daily Dishes is clicked, render the daily dishes using its data and template
          renderItems(dailyDishes, getDishesTemplate);
          break;

        case "Drinks":
          renderItems(dailyDrinks, getDrinksTemplate);
          break;

        case "Toppings":
          renderItems(dailyToppings, getToppingsTemplate);
          break;
      }
    }
  });
}

// Add item to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    existingItem.amount += 1; // Increment the amount
  } else {
    // Add a new item to the cart
    cart.push({ ...item, amount: 1 });
  }

  // Render the cart
  renderCart();
}

function renderCart() {
  const cartRef = document.getElementById("cart");
  const orderSpan = document.getElementById("order");
  const totalSpan = document.getElementById("total");

  cartRef.innerHTML = ""; // Clear previous cart content

  if (cart.length === 0) {
    orderSpan.innerHTML = "Order: 0€"; // If cart is empty, display 0€ as order total
    totalSpan.innerHTML = "Total: 0€"; // No total if cart is empty
    return;
  }

  // Render cart items
  cart.forEach((item, index) => {
    cartRef.innerHTML += getCartTemplate(item, index);
  });

  // Calculate the order total
  const orderTotal = cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

  // Display the order total
  orderSpan.innerHTML = `Order: ${orderTotal}€`;

  // Delivery cost is fixed at 5€
  const deliveryCost = 5;
  const total = (parseFloat(orderTotal) + deliveryCost).toFixed(2);

  // Display the total cost (including delivery)
  totalSpan.innerHTML = `Total: ${total}€`;
}

// Update Cart Items
function updateCartItem(index, action) {
  if (action === "increase") {
    cart[index].amount += 1;
  } else if (action === "decrease") {
    cart[index].amount -= 1;

    if (cart[index].amount <= 0) {
      cart.splice(index, 1);
    }
  }

  renderCart(); // Re-render the cart after update
}

// Calculate Order
function calculateOrder() {
  return cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);
}

// Cart toggle (small screen)
function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.classList.toggle("hidden");
}

// Show Thank You
function showThankYou() {
  const thankYouMessage = document.getElementById("thankYouMessage");
  const emptyCartMessage = document.getElementById("emptyCartMessage");

  if (cart.length > 0) {
    thankYouMessage.classList.remove("hidden"); // Show Thank You modal
    clearCart(); // Empty the cart
  } else {
    emptyCartMessage.classList.remove("hidden"); // Show Empty Cart modal
  }
}

// Clear Cart
function clearCart() {
  cart = []; // Reset cart array
  renderCart(); // Re-render the cart UI
}

// Close Thank You
function closeThankYou() {
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.classList.add("hidden");
}

// Close Empty Cart Modal
function closeEmptyCart() {
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  emptyCartMessage.classList.add("hidden");
}
