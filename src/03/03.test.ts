import {CityType} from "./../02/02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
		city = {
				title: "New Your",
				houses: [
						{
								buildAt: 2012,
								repaired: false,
								address: {
										number: 100,
										street: {
												title: "White street"
										}
								}
						},
						{
								buildAt: 2008,
								repaired: false,
								address: {
										number: 100,
										street: {
												title: "Happy street"
										}
								}
						},
						{
								buildAt: 2020,
								repaired: false,
								address: {
										number: 101,
										street: {
												title: "Happy street"
										}
								}
						},
				],
				governmentBuildings: [
						{
								type: "HOSPITAL",
								budget: 200000,
								staffCount: 200,
								address: {
										street: {
												title: "Central Str"
										}
								}
						},
						{
								type: "FIRE_STATION",
								budget: 500000,
								staffCount: 1000,
								address: {
										street: {
												title: "South Str"
										}
								}
						}
				],
				citizensNumber: 1000000
		}
})

test("Budget should be changed for HOSPITAL", () => {
		addMoneyToBudget(city.governmentBuildings[0], 100000)

		expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE_STATION", () => {
		addMoneyToBudget(city.governmentBuildings[1], -100000)

		expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repaired", () => {
		repairHouse(city.houses[1])

		expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be decrement", () => {
		toFireStaff(city.governmentBuildings[0], 20)

		expect(city.governmentBuildings[0].staffCount).toBe((180))
})
test("staff should be increment", () => {
		toHireStaff(city.governmentBuildings[0], 20)

		expect(city.governmentBuildings[0].staffCount).toBe((220))
})