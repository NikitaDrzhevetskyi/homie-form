const tg = window.Telegram.WebApp;
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const mainButton = tg.MainButton;
const priceInput = document.getElementById('price');
const areaInput = document.getElementById('area');

// TG
mainButton.setText('Підтвердити').setParams({ color: '#D8753A' });
tg.expand();

// Functions
function validateForm() {
  const isValid = Array.from(inputs).every((input) => input.value.trim() !== '');
  if (isValid) {
    mainButton.enable().show();
  } else {
    mainButton.disable().hide();
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

function handleInputs(input) {
  let value = input.value;

  while (value.length > 1 && value.charAt(0) === '0') {
    value = value.substring(1);
  }
  let validValue = '';
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value.charAt(i)) && value.charAt(i) !== ' ') {
      validValue += value.charAt(i);
    }
  }
  input.value = validValue;
}

// Event Listeners
inputs.forEach((input) => {
  input.addEventListener('input', validateForm);
});

priceInput.addEventListener('input', () => handleInputs(priceInput));
areaInput.addEventListener('input', () => handleInputs(areaInput));

document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.form')) {
    document.activeElement.blur();
  }
});

// mainButton.onClick(function () {
//   const formData = getFormData();
//   tg.sendData(formData);
//   tg.close();
// });
