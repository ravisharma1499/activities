let waterTrap = function (height) {
	let water = 0; // amount of water trapped
	let left = 0; // current left wall
	let right = height.length - 1; // current right wall
	let leftMax = 0; //the wall with the highest height on the left
	let rightMax = 0; //the wall with the highest height on the right
	if (height.length < 3) {
		// if there are less than 3 walls, there is no water
		// water cannot be trapped
		return 0;
	}
	while (left < right) {
		// while there are walls on both sides and not consecutive
		// or coincident

		// LOGIC
		// In any given plane, the water can be trapped between two walls
		// it will atleast trap water at the level with the minimum
		// height of the walls on either side
		// the water trapped will be the minimum of the two walls
		// minus the height of the walls in between

		// we can use the two pointer approach to find the water
		// trapped between the walls
		// we can use the left and right pointers to find the
		// left and right walls with the highest height
		// we can use the leftMax and rightMax to find the
		// water trapped between the walls as we then subtract
		// the height of the walls in between

		// if the left wall is higher than the right wall
		// we can move the right pointer towards the left wall
		// as right wall is not capable of trapping water
		// more than or equal to the left wall
		// and update the rightMax if necessary
		// otherwise water upto the height of the rightMax wall
		// can be trapped
		if (height[left] > height[right]) {
			rightMax = Math.max(height[right], rightMax);
			water += rightMax - height[right];
			right--;
		} else {
			// if the right wall is higher than the left wall
			// we can move the left pointer towards the right wall
			// as left wall is not capable of trapping water
			// more than or equal to the right wall
			// and update the leftMax if necessary
			// otherwise water upto the height of the leftMax wall
			// can be trapped
			leftMax = Math.max(height[left], leftMax);
			water += leftMax - height[left];
			left++;
		}
	}
	return water;
};

heights = [
	[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
	[4, 2, 0, 3, 2, 5],
	[5, 4, 1, 2],
];
heights.forEach((list) => {
	console.log(waterTrap(list));
});
