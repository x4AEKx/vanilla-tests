/*
    Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет.
    Примеры:
    [1, 2, 3, 6] - true
    [6, 3, 2, 1] - true
    [5, 5] - true
    [5] - true
    [1, 1, 2, 3, 6] - true
    [6, 5, 3, 2, 1] - true
    [1, 2, 5, 5, 5, 8, 9] - true
    [1, 2, 5, 5, 5, 2, 1] - false
    [1, 10, 6] - false
*/

import { func } from "./11"

describe("Test", () => {
	test("", () => {
		expect(func([1, 2, 3, 6])).toBe(true) //1
		expect(func([6, 3, 2, 1])).toBe(true) //1
		expect(func([5, 5])).toBe(true) //1
		expect(func([5])).toBe(true) //1
		expect(func([1, 1, 2, 3, 6])).toBe(true) //1
		expect(func([6, 6, 3, 2, 1])).toBe(true) //0
		expect(func([1, 2, 5, 5, 5, 8, 9])).toBe(true) //0
		expect(func([1, 2, 5, 5, 5, 2, 1])).toBe(true) //0
		expect(func([1, 10, 6])).toBe(true) //1
	})
})
