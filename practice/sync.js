// *
// * ─── JS READS CODE LINE BY LINE ─────────────────────────────────────────────────
// *

// ? What is the output of the following code?

console.log("Start");

setTimeout(() => {
	console.log("Inside setTimeout 1");
}, 1000);

setTimeout(() => {
	console.log("Inside setTimeout 2");
}, 2000);

setTimeout(() => {
	console.log("Inside setTimeout 3");
}, 0);

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
	sum += i;
}
console.log(sum);
console.log("End");

function isItAsynchronous() {
	// ? Is setTimeout asynchronous?
	// * No it is not, atleast not in implementation
	// * Execution based on stack and a timer
	// ! Check cooperative asynchronous programming for more info
}
