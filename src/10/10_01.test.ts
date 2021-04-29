import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10";
import {addNewBooksToUser, moveUserToOtherHouse, UserWithBooksType, addNewBookToUser, updateBook} from "./10_01";

test('immutability object test: change hair', () => {
		let user: UserType = {
				name: 'Dima',
				hair: 32,
				address: {
						city: 'Minsk',
						house: 12
				}
		}

		const awesomeUser = makeHairStyle(user, 2)

		expect(awesomeUser.hair).toBe(16)
		expect(user.hair).toBe(32)

		expect(awesomeUser.address).toBe(user.address)
})

test('immutability object test: change address', () => {
		let user: UserWithLaptopType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				}
		}

		const movedUser = moveUser(user, 'Kiev')

		expect(movedUser.address.city).toBe('Kiev')
		expect(user.address.city).toBe('Minsk')
		expect(user.address).not.toEqual(movedUser.address)

		expect(user.laptop.title).toEqual(movedUser.laptop.title)
})

test('immutability object test: upgrade laptop', () => {
		let user: UserWithLaptopType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				}
		}

		const upgradedLaptopUser = upgradeUserLaptop(user, 'Macbook')

		expect(upgradedLaptopUser.laptop.title).toBe('Macbook')
		expect(user.laptop.title).toBe('Zenbook')
		expect(user).not.toBe(upgradedLaptopUser)
		expect(user.laptop).not.toEqual(upgradedLaptopUser.laptop)
})

test('immutability object test: upgrade laptop', () => {
		let user: UserWithLaptopType & UserWithBooksType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				},
				books: [
						'css', 'react', 'js'
				]
		}

		const userCopy = moveUserToOtherHouse(user, 99)

		expect(user).not.toBe(userCopy)
		expect(user.books).toBe(userCopy.books)
		expect(user.laptop).toBe(userCopy.laptop)

		expect(user.address).not.toBe(userCopy.address)
		expect(user.address.house).toBe(12)
		expect(userCopy.address.house).toBe(99)
})

test('immutability arrays test: add new book', () => {
		let user: UserWithLaptopType & UserWithBooksType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				},
				books: [
						'css', 'react', 'js'
				]
		}

		const userCopy = addNewBookToUser(user, 'ts')

		expect(user).not.toBe(userCopy)
		expect(user.laptop).toBe(userCopy.laptop)
		expect(user.address).toBe(userCopy.address)

		expect(user.books).not.toBe(userCopy.books)
		expect(user.books.length).toBe(3)
		expect(userCopy.books.length).toBe(4)
		expect(user.books).toEqual([
				'css', 'react', 'js'
		])
		expect(userCopy.books).toEqual([
				'css', 'react', 'js', 'ts'
		])
})

test('immutability arrays test: add new books', () => {
		let user: UserWithLaptopType & UserWithBooksType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				},
				books: [
						'css', 'react', 'js'
				]
		}

		const userCopy = addNewBooksToUser(user, ['ts', 'rest-api'])

		expect(user).not.toBe(userCopy)
		expect(user.laptop).toBe(userCopy.laptop)
		expect(user.address).toBe(userCopy.address)

		expect(user.books).not.toBe(userCopy.books)
		expect(user.books.length).toBe(3)
		expect(userCopy.books.length).toBe(5)
		expect(user.books).toEqual([
				'css', 'react', 'js'
		])
		expect(userCopy.books).toEqual([
				'css', 'react', 'js', 'ts', 'rest-api'
		])
})

test('immutability arrays test: update book', () => {
		let user: UserWithLaptopType & UserWithBooksType = {
				name: 'Dima',
				hair: 32,
				laptop: {
						title: 'Zenbook'
				},
				address: {
						city: 'Minsk',
						house: 12
				},
				books: [
						'css', 'react', 'js'
				]
		}

		const userCopy = updateBook(user, 'js', 'ts')

		expect(user).not.toBe(userCopy)
		expect(user.laptop).toBe(userCopy.laptop)
		expect(user.address).toBe(userCopy.address)

		expect(user.books).not.toBe(userCopy.books)
		expect(user.books.length).toBe(3)
		expect(userCopy.books.length).toBe(3)
		expect(user.books).toEqual([
				'css', 'react', 'js'
		])
		expect(userCopy.books).toEqual([
				'css', 'react', 'ts'
		])
})