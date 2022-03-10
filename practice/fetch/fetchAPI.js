async function response1() {
	// * fetching a text file from the file system
	const response = await fetch("/practice/fetch/textResponse.txt").then(
		(response) => response.text()
	);
	return response;
}

async function response2() {
	// * fetching a json file from the file system
	const response = await fetch("/practice/fetch/jsonResponse.json").then(
		(response) => response.json()
	);
	return response.message;
}

async function response3() {
	// * a fetch GET request to the localhost server
	const response = await fetch("http://127.0.0.1:3000/index", {
		mode: "cors", // * mode of request to be sent, CrossOriginResourceSharing
	}).then((response) => response.json());
	return response.message;
}

async function response4() {
	// * a fetch POST request to the localhost server
	const response = await fetch("http://127.0.0.1:3000/index", {
		method: "POST", // * method of request to be sent
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			message: "Hello World",
		}),
	}).then((response) => response.json());
	return response.message;
}

async function response5() {
	// * a fetch PUT request to the localhost server
	const response = await fetch("http://127.0.0.1:3000/index", {
		method: "PUT", // * GET, POST, PUT, DELETE, etc.
		mode: "cors", // * no-cors, cors, same-origin
		cache: "no-cache", // * default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // * include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// * 'Content-Type': 'application/x-www-form-urlencoded',
			// * 'Content-Type': 'multipart/form-data',
			// * 'Content-Type': 'text/plain',
			// * 'Content-Type': 'text/html',
		},
		body: JSON.stringify({ message: "Hello again!" }), // * body data type must match "Content-Type" header
	}).then((response) => response.json());
	return response.message;
}

async function fillTable() {
	document.getElementById("response1").innerHTML = await response1();
	document.getElementById("response2").innerHTML = await response2();
	document.getElementById("response3").innerHTML = await response3();
	document.getElementById("response4").innerHTML = await response4();
	document.getElementById("response5").innerHTML = await response5();
	let response = await fetch(
		"https://jsonplaceholder.typicode.com/posts/1"
	).then((response) => {
		console.log(response);
		return response.json();
	});
	console.log(response);
	document.getElementById("response6").innerHTML = response.title;
}

fillTable();
