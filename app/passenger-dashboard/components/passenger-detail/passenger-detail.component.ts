import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
	selector: 'passenger-detail',
	styleUrls: ['passenger-detail.component.scss'],
	template: `
		<div>
			<span class="status" [class.checked-in]="detail.checkedIn"></span>
			<div>
				<input 
					type="text" 
					[value]="detail.fullname" 
					(input)="onNameChange(name.value)" 
					#name>
			</div>
			<div>
				{{ detail.fullname }}
			</div>
			<div>
				Check in date:
				{{ detail.checkInDate ? (detail.checkInDate | date:'yMMMMd' | uppercase ) : 'Not checked in'}}
			</div>
			<div class="children">
				Children: {{ detail.children?.length || 0 }}
			</div>
		</div>
	`
})
export class PassengerDetailComponent {
	@Input()
	detail: Passenger;

	constructor() {};

	onNameChange(value: string) {
		console.log('Value: ', value);
	}

}