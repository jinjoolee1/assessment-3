console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	document.querySelector("form").addEventListener("submit");
	const showAlert = () => {
	//console.log('form submit');
	button.addEventListener('click', () => {
		alert('Success! You have submitted your response');
		submit = confirm("Success! You have submitted your response!");
	  });
	}
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);