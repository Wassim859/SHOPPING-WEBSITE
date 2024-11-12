// Function to simulate adding product to cart
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
  }
  
  // Example: Search functionality (basic, just displays an alert)
  document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search-bar").value;
    if (query) {
      alert("You searched for: " + query);
    } else {
      alert("Please enter a search term.");
    }
  });
  