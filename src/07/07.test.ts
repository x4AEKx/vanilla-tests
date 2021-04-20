import {ManType} from "./07";

let props: ManType

beforeEach(() => {
		props = {
				name: "Dima",
				age: 32,
				lessons: [{title: "1"}, {title: "2"}],
				address: {
						street: {
								name: "Happy street"
						}
				}
		}
})

test("", () => {

		const {age, lessons, address: {street: {name}}} = props

		expect(age).toBe(32)
		expect(lessons.length).toBe(2)
		expect(name).toBe("Happy street")
})

test(" ", () => {
		/*const l1 = props.lessons[0]
		const l2 = props.lessons[1]*/

		const [l1, l2] = props.lessons

		expect(l1.title).toBe("1")
		expect(l2).toStrictEqual({title: "2"})
})

