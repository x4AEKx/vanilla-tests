import {CityType, GovernmentBuildingType} from "../02/02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
		city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
		return buildings.filter(building => building.staffCount > number)
}