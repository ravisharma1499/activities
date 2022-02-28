// *
// * ─── ASYNC AWAIT AND HOW ARE THEY DIFFERENT FROM THE OTHERS ─────────────────────
// *

// * Based on promises
// * Syntactic sugar for promises
// * Allows us to write code that looks like synchronous code
// * But is actually asynchronous
// * a special syntax to work with promises in a more comfortable fashion
let login = (username, password) => {
	setTimeout(() => {
		if (username === "john" && password === "123") {
			return { username: username };
		} else {
			return "Invalid username or password";
		}
	}, 1000);
};

let login1 = (username, password) => {
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
	setTimeout(() => {
		if (username === "john") {
			return { email: "john@something.com" };
		} else {
			return "Invalid username";
		}
	}, 1000);
};

let emailVerified = (email) => {
	setTimeout(() => {
		if (email === "john@something.com") {
			return { email: email, verified: true };
		} else {
			return "Invalid email";
		}
	}, 1000);
};

// * “async” before a function means one simple thing
// * a function always returns a promise
// * async ensures that the function returns a promise
// * and wraps non-promises in it.

// * “await” before a variable means one simple thing
// * a variable can be a promise
// * await ensures that the variable is a promise
// * and unwraps it.
// * keyword await makes JavaScript wait until
// * that promise settles and returns its result
// * await literally suspends the function execution
// * until the promise settles
// * and then resumes it with the promise result
async function doItAll() {
	let user = await login("john", "123");
	let email = await getEmail(user.username);
	let verified = await emailVerified(email.email);
	console.log(`${user.username} is ${verified.verified ? "" : "not "}verified`);
}

doItAll();
