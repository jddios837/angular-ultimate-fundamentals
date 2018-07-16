import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count></passenger-count>
			<passenger-detail></passenger-detail>
			<h3>Airline Passenger</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span
						class="status"
						[class.checked-in]="passenger.checkedIn"
					></span>
					{{ i }}: {{ passenger.fullname }}
					<div>
						Check in date:
						{{ passenger.checkInDate ? (passenger.checkInDate | date:'yMMMMd' | uppercase ) : 'Not checked in'}}
					</div>
					<div class="children">
						Children: {{ passenger.children?.length || 0 }}
					</div>	
				</li>
			</ul>
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