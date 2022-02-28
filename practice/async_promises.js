// *
// *─── WHAT ARE PROMISES? ─────────────────────────────────────────────────────────
// *

// * Promise is a proxy for a value not
// * necessarily known when the promise is created.
// * They act as substitute for an "async" function's
// * EVENTUAL success value or failure reason/error.

let array = [1, 2, 3];

// ? What is resolve and reject?
let promiseAppend456 = () => {
	return new Promise((resolve, reject) => {
		array.push(4);
		array.push(5);
		array.push(6);
		resolve();
	});
};

promiseAppend456().then(() => {
	console.log(array);
});

// * In our example for a user login
let login = (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === "john" && password === "123") {
				resolve({ username: username });
			} else {
				reject("Invalid username or password");
			}
		}, 1000);
	});
};

let getEmail = (username) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === "john") {
				resolve({ email: "john@something.com" });
			} else {
				reject("Invalid username");
			}
		}, 1000);
	});
};

let emailVerified = (email) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === "john@something.com") {
				resolve({ email: email, verified: true });
			} else {
				reject("Invalid email");
			}
		}, 1000);
	});
};

// * We can do either this
// ? synchronous async?
login("john", "123")
	.then((user) => {
		console.log(`User logged in: ${user.username}`);
		return getEmail(user.username);
	})
	.then((user) => {
		console.log(`User's email: ${user.email}`);
		return emailVerified(user.email);
	})
	.then((user) => {
		console.log(`User's email verified: ${user.verified}`);
	})
	.catch((error) => {
		console.log(error);
	});

// ? asynchronous async?
Promise.all([
	login("john", "123"),
	getEmail("john"),
	emailVerified("john@something.com"),
]).then((values) => {
	console.log(values);
});
// ! Does not work for this example
