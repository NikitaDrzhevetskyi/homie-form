// TG
const tg = window.Telegram.WebApp;

// Variables
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const mainButton = tg.MainButton; // Create MainButton instance
const errorDiv = document.getElementById('error-message');

// Functions
function validateForm(event) {
  event.preventDefault();

  let isValid = true;
  const emptyInputs = [];

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
      emptyInputs.push(input);
    }
  });

  if (isValid) {
    mainButton.enable(); // Enable MainButton if form is valid
    mainButton.show(); // Show MainButton if form is valid
  }

  window.scrollTo(0, 0);
}

function getFormData() {
  return {
    district: document.getElementById('district').value,
    price: document.getElementById('price').value,
    currency: document.getElementById('currency').value,
    description: document.getElementById('description').value,
    room_number: document.getElementById('room_number').value,
    area: document.getElementById('area').value,
  };
}

// Event Listeners
inputs.forEach((input) => input.addEventListener('input', validateForm));
mainButton.onClick(() => {
  const formData = getFormData();
  console.log(formData);
  // Perform actions with formData, like sending it to a server
});
