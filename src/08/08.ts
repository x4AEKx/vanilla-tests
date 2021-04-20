type UserType = {
		[key: string]: { id: number, name: string }
}

export const users: UserType = {
		"101": {id: 101, name: "Dimych"},
		"3232312": {id: 3232312, name: "Natasha"},
		"1212": {id: 1212, name: "Valera"},
		"1": {id: 1, name: "Katya"},
}

const user = {id: 100500, name: "Igor"}

users[user.id] = user
delete users[user.id]

const usersArray = [
		{id: 101, name: "Dimych"},
		{id: 3232312, name: "Natasha"},
		{id: 1212, name: "Valera"},
		{id: 1, name: "Katya"}
]

usersArray.push(user)