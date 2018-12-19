import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
	constructor() {
		
	}

	getPassengers(): Passenger[] {
		return [
			{
				id: 1,
				fullname: 'Stephen',
				checkedIn: true,
				checkInDate: null,
				children: null
			},{
				id: 2,
				fullname: 'Maria',
				checkedIn: false,
				checkInDate: 1491606000000,
				children: [{ name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
			}
		]
	}
}