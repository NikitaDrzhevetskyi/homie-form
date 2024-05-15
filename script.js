// Variables
const tg = window.Telegram.WebApp;
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const mainButton = tg.MainButton;

//TG
mainButton.setText('Підтвердити').setParams({ color: '#D8753A' });
tg.expand();

// Functions
function validateForm(event) {
  event.preventDefault();

  const isValid = Array.from(inputs).every((input) => input.value.trim() !== '');

  if (isValid) {
    mainButton.enable().show();
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
inputs.forEach((input) => input.addEventListener('input', validateForm));

//focus for keyboard
document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.form')) {
    document.activeElement.blur();
  }
});

//get data for backend
Telegram.WebApp.onEvent('mainButtonClicked', function () {
  const formData = getFormData();
  tg.sendData(formData);
});
