

//header

const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});


//card
function addToCart(productName, price) {
  alert("Added " + productName + " to cart for $" + price + "!");
  // You can add more logic here, like updating the cart count, etc.
}


  // Initialize Glide carousel
new Glide('.glide', {
  type: 'carousel',
  autoplay: 3000, // Set autoplay duration (in milliseconds)
  hoverpause: true // Pause autoplay on hover
}).mount();

//form
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Collect form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate name
  if (name.trim() === '') {
    document.getElementById("nameError").textContent = "Please enter your name";
    return;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address";
    return;
  }

  // Validate message
  if (message.trim() === '') {
    document.getElementById("messageError").textContent = "Please enter your message";
    return;
  }

  // If all validations pass, submit the form
  alert("Form submitted successfully!");
});
