import {GovernmentBuildingType, HouseType} from "../02/02";

export function addMoneyToBudget(governmentBuilding: GovernmentBuildingType, money: number) {
		return governmentBuilding.budget += money
}

export function repairHouse(house: HouseType) {
		house.repaired = true
}

export function toFireStaff(governmentBuilding: GovernmentBuildingType, count: number) {
		governmentBuilding.staffCount -= count
}

export function toHireStaff(governmentBuilding: GovernmentBuildingType, count: number) {
		governmentBuilding.staffCount += count
}