// Variables
const tg = window.Telegram.WebApp;
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const mainButton = tg.MainButton;

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
    mainButton.enable();
    mainButton.show();
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

//EVENT Listeners
//getData
inputs.forEach((input) => input.addEventListener('input', validateForm));
mainButton.onClick(() => {
  const formData = getFormData();
  console.log(formData);
  tg.close();
});

//keyboard focus
document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.form')) {
    document.activeElement.blur();
  }
});
