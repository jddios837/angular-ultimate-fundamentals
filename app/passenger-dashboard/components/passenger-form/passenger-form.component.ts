import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
	selector: 'passenger-form',
	styleUrls: ['passenger-form.component.scss'],
	template: `
		<form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
		
			form!
			<p>{{ detail | json }}</p>
			<div>
				Passenger Name:
				<input type="text" name="fullname" #fullname="ngModel" [ngModel]="detail?.fullname" required>
				<!-- {{ fullname.errors | json }} -->
				<div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
					Passenger name is required
				</div>
			</div>

			<div>
				Passenger ID:
				<input type="number" name="id" #id="ngModel" [ngModel]="detail?.id" required>
				<!-- {{ id.errors | json }} -->
				<div *ngIf="id.errors?.required && id.dirty" class="error">
					Passenger id is required
				</div>
			</div>

			<div>
				<label>
					<input 
						type="checkbox"
						name="checkedIn"
						[ngModel]="detail?.checkedIn"
						(ngModelChange)="toggleCheckIn($event)">
					Yes
				</label>
				<!-- <label>
					<input 
						type="radio"
						[value]="false"
						name="checkedIn"
						[ngModel]="detail?.checkedIn" 
						(ngModelChange)="toggleCheckIn($event)">
					No
				</label> -->
			</div>

			<div *ngIf="form.value.checkedIn">
				Check in date:
				<input
					type="number"
					name="checkInDate"
					[ngModel]="detail?.checkInDate">
			</div>

			<div>
				Luggage:
				<select
					name="baggage"
					[ngModel]="detail?.baggage">
					<option
						*ngFor="let item of baggage"
						[ngValue]="item.key">
						{{ item.value }}
					<option>
				</select>
				<!-- <select
					name="baggage"
					[ngModel]="detail?.baggage">
					<option
						*ngFor="let item of baggage"
						[value]="item.key"
						[selected]="item.key === detail?.baggage">
						{{ item.value }}
					<option>
				</select> -->
			</div>

			<!-- <p>{{ form.value | json }}</p>
			<p>Valid: {{ form.valid | json }}</p>
			<p>Invalid: {{ form.invalid | json }}</p> -->

			<button type="submit" [disabled]="form.invalid">
				Update Passenger
			</button>
		</form>
	`
})
export class PassengerFormComponent {

	@Input() detail: Passenger;

	@Output()
	update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	baggage: Baggage[] = [{
		key: 'none',
		value: 'No Baggage'
	},{
		key: 'hand-only',
		value: 'Hand baggage'
	},{
		key: 'hold-only',
		value: 'Hold baga'
	},{
		key: 'hand-hold',
		value: 'Hand and hold Baggage'
	}]

	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}

	handleSubmit(passenger: Passenger, isValid: boolean) {
		if(isValid) {
			this.update.emit(passenger);
		}
	}
}