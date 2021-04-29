export type UserType = {
		name: string
		hair: number
		address: {
				city: string
				house: number
		}
}

export type LaptopType = {
		title: string
}

export type UserWithLaptopType = UserType & {
		laptop: LaptopType
}

export type UserWithBooksType = UserType & {
		books: Array<string>
}

export function makeHairStyle(u: UserType, power: number) {
		return {
				...u,
				hair: u.hair / power
		}
}

export function moveUser(u: UserWithLaptopType, city: string) {
		return {
				...u,
				address: {
						...u.address,
						city: city
				}
		}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
		return {
				...u,
				laptop: {
						...u.laptop,
						title: laptop
				}
		}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
		return {
				...u,
				address: {
						...u.address,
						house: house
				}
		}
}

export function addNewBookToUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
		return {
				...u,
				books: [...u.books, book]
		}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
		return {
				...u,
				books: u.books.concat(books)
		}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, startBook: string, replacedBook: string) {
		return {
				...u,
				books: u.books.map((book) => book === startBook ? replacedBook : book)
		}
}