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

type CompanyType = { title: string, id: number };

export type WithCompaniesType = {
		companies: Array<CompanyType>
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

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
		return {
				...u,
				books: u.books.filter(b => b !== book)
		}
}

export function updateCompanyTitle(u: WithCompaniesType, id: number, title: string) {
		return {
				...u,
				companies: u.companies.map(c => c.id === id ? {...c, title: title} : c)
		}
}

export function updateCompanyTitleAssociativeArray(companies: {[key: string]: Array<CompanyType>}, userName: string, companyId: number, title: string) {
		return {
				...companies,
				[userName]: companies[userName].map(c => c.id === companyId ? {...c, title: title} : c)
		}
}
