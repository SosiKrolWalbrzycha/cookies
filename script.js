const addInputFields = document.querySelectorAll('.addinput')
const addButton = document.querySelector('.add')

const checkInputFields = document.querySelectorAll('.checkcookie')
const checkButton = document.querySelector('.check')

const changeCookie = document.querySelectorAll('.changecookie')
const changeButton = document.querySelector('.change')

const addCookie = () => {
	const expires = new Date(addInputFields[2].value)

	setCookie(addInputFields[0].value, addInputFields[1].value, expires, { path: '/', secure: 'true' })
}

const checkCookie = () => {
	getCookie(checkInputFields[0].value)
}


const changCookie = () => {
	deleteCookie(changeCookie[0].value, {path: '/'})
}







const test = () => {
	console.log('Dziala');
}

addButton.addEventListener('click', addCookie)
checkButton.addEventListener('click', checkCookie)
changeButton.addEventListener('click', changCookie)
