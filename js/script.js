// SCRIPT //

//Init Page//
function initPage() {
  renderItems(dailyDishes, getDishesTemplate); // Load Daily Dishes by default
  setupNavigation(); // Set up event listeners for navigation
}

// Render Items//
function renderItems(items, getTemplate) {
  const contentRef = document.getElementById("content");
  contentRef.innerHTML = ""; // Clear previous content
  items.forEach((item, index) => {
    contentRef.innerHTML += getTemplate(item, index);
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
