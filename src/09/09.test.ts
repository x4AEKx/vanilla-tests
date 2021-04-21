type NewUserType = {
		name: string
		age: number
		address: { title: string }
}

function increaseAge(u: NewUserType) {
		u.age++
}

test("reference type test", () => {
		let user: NewUserType = {
				name: "Dima",
				age: 32,
				address: {
						title: "Minsk"
				}
		}

		increaseAge(user)

		expect(user.age).toBe(33)

		const superman = user

		superman.age = 1000

		expect(user.age).toBe(1000)
})

test("array reference test", () => {
		let users = [
				{
						name: "Dima",
						age: 30
				},
				{
						name: "Vasya",
						age: 29
				}
		]

		let admins = users

		admins.push({name: "Kristina", age: 33})

		expect(users.length).toBe(3)
		expect(users[2]).toEqual({name: "Kristina", age: 33})
})

test("value type test", () => {
		let usersCount = 100

		let adminsCount = usersCount

		adminsCount += 1

		expect(usersCount).toBe(100)
		expect(adminsCount).toBe(101)
})

test("reference type test2", () => {
		let user: NewUserType = {
				name: "Dima",
				age: 32,
				address: {
						title: "Minsk"
				}
		}

		let user2: NewUserType = {
				name: "Natasha",
				age: 30,
				address: user.address
		}

		user2.address.title = "Kanary"

		expect(user.address.title).toBe("Kanary")
		expect(user.address).toBe(user2.address)

})

test("reference type array test", () => {
		const address = {
				title: "Minsk"
		}

		let user: NewUserType = {
				name: "Dima",
				age: 32,
				address: {
						title: "Minsk"
				}
		}

		let user2: NewUserType = {
				name: "Natasha",
				age: 30,
				address: user.address
		}

		const users = [user, user2, {name: "Misha", age: 4, address: address}]

		const admins = [user, user2]

		admins[0].name = "Dmitry"

		expect(users[0].name).toBe("Dmitry")
		expect(user.name).toBe("Dmitry")
})

test("sort array test", () => {
		const letters = ["c", "d", "a", "z", "e"]

		passportist(letters)

		expect(letters).toEqual(["c", "d", "a", "z", "e"])
})

function passportist(letters: any) {
		const copy = [...letters].sort()
}