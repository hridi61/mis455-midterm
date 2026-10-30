// Button 1 (Home page)
function showOffer() {
  document.getElementById("offer-text").innerText =
    "🎉 Use code SHOE10 to get 10% off your first order!";
}

// Button 2 (Products page)
function addToCart(productName) {
  document.getElementById("cart-message").innerText =
    productName + " has been added to your cart! ✅";
}

// Button 3 (Contact page)
function sendMessage() {
  var name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name first.");
    return;
  }
  document.getElementById("form-response").innerText =
    "Thank you, " + name + "! We received your message.";
}