import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<passenger-detail
				*ngFor="let passenger of passengers"
				[detail]="passenger">
			</passenger-detail>
		</div>
	`
})
export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];

	constructor() {};

	ngOnInit() {
		console.log('ngOnInit');
		this.passengers = [{
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
		}]
	}
	
}