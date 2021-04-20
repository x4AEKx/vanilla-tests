type UserType = {
		[key: string]: { id: number, name: string }
}

let users: UserType

beforeEach(() => {
		users = {
				"101": {id: 101, name: "Dimych"},
				"3232312": {id: 3232312, name: "Natasha"},
				"1212": {id: 1212, name: "Valera"},
				"1": {id: 1, name: "Katya"},
		}
})

test("should update corresponding user", () => {
		users["1"].name = "Ekaterina"
		expect(users["1"].name).toBe("Ekaterina")
		expect(users["1"]).toEqual({id: 1, name: "Ekaterina"})
})

test("should delete corresponding user", () => {
		delete users["1"]

		expect(users["1"]).toBeUndefined()
})