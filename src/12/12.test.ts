import { arr, polindrom } from "./12"

describe("Test", () => {
	test("array", () => {
		expect(arr).toStrictEqual([12, 23, 28, 32, 44, 68, 77])
	})
	test("polindrom", () => {
		const str: string = "папап"

		const result = polindrom(str)

		expect(result).toBeTruthy()
	})
})
