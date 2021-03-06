import { Component, Input } from '@angular/core';

import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-count',
	styleUrls: ['passenger-count.component.scss'],
	template: `
		<div>
			<h3>Airline Passenger</h3>
			<div>
				Total passengers: {{ checkedInCount() }} / {{ items?.length }}
			</div>
		</div>
	`
})
export class PassengerCountComponent {
	@Input()
	items: Passenger[];

	// get checkIn passenger
	checkedInCount(): number {
		if(!this.items) return;
		return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
	}
}