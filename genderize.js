const serverUrl = 'https://api.genderize.io';
//const firstName = 'artem';
//const url = `${serverUrl}?name=${firstName}`;
const BUTTON = document.querySelector('.button');
const INPUT = document.querySelector('.input');
const RESULT = document.querySelector('.result');

BUTTON.addEventListener('click', addGender)

function addGender() {
	//event.preventDefault();
	//console.log(INPUT.value);

	const firstName = INPUT.value
	const url = `${serverUrl}?name=${firstName}`;
	let testPromise = fetch(url)
	//console.log(testPromise);
	// testPromise.onload = () => resolve(testPromise);
	// testPromise.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
	// testPromise
	// 	.then(
	// 		testPromise => testPromise.json()
	// 	)
	// 	.then(
	// 		testPromise =>
	// 			RESULT.textContent = `${firstName} is ${testPromise.gender} 
	// 	with probability ${testPromise.probability}`,
	// 		error =>
	// 			alert(`Ошибка: ${error.message}`)
	// 	)
	testPromise
		.then(
			testPromise => testPromise.json(),
			console.log(testPromise),
		)
		.then(
			testPromise => RESULT.textContent = `${firstName} is ${testPromise.gender} 
			with probability ${testPromise.probability}`
		)
		.catch(err => alert(err))
	// error =>
	// 	alert(`Ошибка: ${error.message}`)
}
// function showResult() {
// 	RESULT.textContent = `${firstName} is ${testPromise.gender}
// 	with probability ${testPromise.probability}`
// }