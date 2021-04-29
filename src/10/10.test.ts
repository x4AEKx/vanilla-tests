import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10";

test('immutability test: change hair', () => {
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

test('immutability test: change address', () => {
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

test('immutability test: upgrade user laptop', () => {
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