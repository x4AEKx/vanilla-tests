test("should take old men older than 90", () => {
		const ages = [18, 22, 20, 1, 100, 90, 14]

		const oldAges = ages.filter(age => age > 90)

		expect(oldAges.length).toBe(1)
		expect(oldAges[0]).toBe(100)
})

test("should take cheap courses cheaper 160", () => {
		const courses = [
				{
						title: "CSS", price: 110
				},
				{
						title: "JS", price: 200
				},
				{
						title: "React", price: 150
				}
		]

		const cheapCourses = courses.filter(course => course.price < 160)

		expect(cheapCourses.length).toBe(2)
		expect(cheapCourses[0].price).toBe(110)
		expect(cheapCourses[1].price).toBe(150)
})

test("get only completed tasks", () => {
		const tasks = [
				{id: 1, title: "Bread", isDone: false},
				{id: 2, title: "Milk", isDone: true},
				{id: 3, title: "Salt", isDone: false},
				{id: 4, title: "Sugar", isDone: true},
		]

		const completedTask = tasks.filter(task => task.isDone)

		expect(completedTask.length).toBe(2)
		expect(completedTask[0].id).toBe(2)
		expect(completedTask[1].id).toBe(4)
})

test("get only uncompleted tasks", () => {
		const tasks = [
				{id: 1, title: "Bread", isDone: false},
				{id: 2, title: "Milk", isDone: true},
				{id: 3, title: "Salt", isDone: false},
				{id: 4, title: "Sugar", isDone: true},
		]

		const completedTask = tasks.filter(task => !task.isDone)

		expect(completedTask.length).toBe(2)
		expect(completedTask[0].id).toBe(1)
		expect(completedTask[1].id).toBe(3)
})