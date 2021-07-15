export const arr = [77, 23, 12, 44, 32, 68, 28]

for (let j = 0; j < arr.length - 1; j++) {
	for (let i = 0; i < arr.length - 1 - j; i++) {
		if (arr[i] > arr[i + 1]) {
			;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

			// let temp = arr[i + 1]
			// arr[i + 1] = arr[i]
			// arr[i] = temp
		}
	}
}

export function polindrom(str: string) {
	const arr = str.split("")

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[arr.length - 1]) {
			return true
		}
		return false
	}
}
