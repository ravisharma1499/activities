// *
// *─── WHAT IS A CALLBACK FUNCTION? ───────────────────────────────────────────────
// *

// * Callback functions are functions that are passed into another
// * function as an argument.

let array = [1, 2, 3];

let append456 = () => {
	setTimeout(() => {
		array.push(4);
		array.push(5);
		array.push(6);
	}, 1000);
};

let printEntireArray = () => {
	console.log(array);
};

append456();

printEntireArray();

// let append789WithCallback = (callback) => {
// 	array.push(7);
// 	array.push(8);
// 	array.push(9);
// 	callback();
// };

// append789WithCallback(printEntireArray);

// * Obviously the "array" does not reprint itself after the append456
// * function is called. Its not an error/bug but just how code works.
// * Then why the big fuss?

// // * A more realistic situation would be:
// let login = (user) => {
// 	setTimeout(() => {
// 		console.log("Without a callback:-");
// 		return { username: user.username };
// 	}, 1000);
// };

// let displayName = (username) => {
// 	console.log(username);
// };

// let user = { username: "john", password: "123" };

// displayName(login(user));

// * We can however use the callback function
// * to resolve this situation.

// let loginWithCallback = (user, callback) => {
// 	setTimeout(() => {
// 		console.log("With a callback:-");
// 		callback(user.username);
// 	}, 1000);
// };

// loginWithCallback(user, displayName);
