import {multiply, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
		a = 1;
		b = 2;
		c = 3;
})

test("sum should be correct", () => {
		const result1 = sum(a, b)
		const result2 = sum(b, c)

		expect(result1).toBe(3)
		expect(result2).toBe(5)
})

test("multiply should be correct", () => {
		const result1 = multiply(a, b)
		const result2 = multiply(b, c)

		expect(result1).toBe(2)
		expect(result2).toBe(6)
})