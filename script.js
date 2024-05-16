const tg = window.Telegram.WebApp;
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
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

// Event Listeners
inputs.forEach((input) => {
  input.addEventListener('input', validateForm);
});


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