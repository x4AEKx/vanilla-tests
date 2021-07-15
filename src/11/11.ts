export const func = (arr: Array<number>) => {
	let temp = 0
	let result
	let arrType = []

	for (let i = 0; i < arr.length; i++) {
		// console.log(`temp = ${temp}, arr[i] = ${arr[i]}`)
		if (temp <= arr[i]) {
			arrType.push(1)
		} else {
			arrType.push(0)
		}

		temp = arr[i]
		console.log(`arrType = ${arrType}`)
	}

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arrType) {
	// 		if (temp <= arr[i]) {
	// 			result = true
	// 		} else {
	// 			result = false
	// 		}
	// 	} else {
	// 		if (temp >= arr[i]) {
	// 			result = true
	// 		} else {
	// 			result = false
	// 		}
	// 	}
	// }

	return true
}
