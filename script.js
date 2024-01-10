const form = document.getElementById('cta-form')
const firstNameInputEl = form.elements.firstName
const lastNameInputEl = form.elements.lastName
const emailInputEl = form.elements.email
const passwordInputEl = form.elements.password

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const firstName = firstNameInputEl.value
	const lastName = lastNameInputEl.value
	const email = emailInputEl.value
	const password = passwordInputEl.value

	if (!firstName) {
		showEmptyError(firstNameInputEl, 'First Name cannot be empty')
	} else {
		removeEmptyError(firstNameInputEl)
	}
	if (!lastName) {
		showEmptyError(lastNameInputEl, 'Last Name cannot be empty')
	} else {
		removeEmptyError(lastNameInputEl)
	}
	if (!password) {
		showEmptyError(passwordInputEl, 'Password cannot be empty')
	} else {
		removeEmptyError(passwordInputEl)
	}
	if (!email) {
		showEmailError(emailInputEl)
	} else {
		removeEmailError(emailInputEl)
	}
})

function showEmptyError(el, message) {
	el.classList.add('error')
	el.parentElement.getElementsByClassName('error-message')[0].innerText =
		message
}

function showEmailError(el) {
	el.classList.add('error')
	el.setAttribute('placeholder', 'email@example/com')
	el.parentElement.getElementsByClassName('error-message')[0].innerText =
		'Looks like this is not an email'
}

function removeEmptyError(el) {
	el.classList.remove('error')
	el.parentElement.getElementsByClassName('error-message')[0].innerText = ''
}

function removeEmailError(el) {
	el.classList.remove('error')
	el.setAttribute('placeholder', 'Email Address')
	el.parentElement.getElementsByClassName('error-message')[0].innerText = ''
}
