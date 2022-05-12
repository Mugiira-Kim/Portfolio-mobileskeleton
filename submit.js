const emailCont = document.getElementById('exampleInputEmail1');
const form = document.querySelector('form');
const error = document.querySelector('.error');

form.addEventListener('submit', (event) => {
const emailInput = emailCont.value;
if (emailInput.toLowerCase() !== emailInput) {
error.textContent = 'Please insert email address in lowercase!';
event.preventDefault(); 
} else {
form.submit();
}
});