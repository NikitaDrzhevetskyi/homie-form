const tg = window.Telegram.WebApp;
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const form = document.querySelector('.form');
const mainButton = tg.MainButton;
const submitBtn = document.getElementById('submitBtn');

// TG
mainButton.setText('Підтвердити').setParams({ color: '#D8753A' });
tg.expand();

// Functions
function validateForm() {
  const isValid = Array.from(inputs).every((input) => input.value.trim() !== '');
  if (isValid) {
    mainButton.enable().show();
  } else {
    mainButton.hide();
  }
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
inputs.forEach((input) => {
  input.addEventListener('blur', validateForm);
});

// Add event listener to form
form.addEventListener('click', (event) => {
  const target = event.target;
  // Focus input fields when clicking anywhere on the form
  if (target.matches('input, select, textarea')) {
    target.focus();
  }
});

mainButton.addEventListener('click', function (event) {
  event.preventDefault();
  const formData = getFormData();
  tg.sendData(formData);
  tg.close();
});
