import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Passenger } from "./models/passenger.interface";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
	constructor(private http: Http) {
		console.log('Http ', http);
	}

	// Este es el modo para trabajar con Observadores
	getPassengers(): Observable<Passenger[]> {
		return this.http
			.get(PASSENGER_API)
			.map((response: Response) => {
				return response.json();
			})
			.catch((error: any) => Observable.throw(error.json()))
	}

	getPassenger(id: number): Observable<Passenger> {
		return this.http
			.get(`${PASSENGER_API}/${id}`)
			.map((response: Response) => {
				return response.json();
			})
			.catch((error: any) => Observable.throw(error.json()))
	}

	// Modo de trabajar con Promesas
	// getPassengers(): Promise<Passenger[]> {
	// 	return this.http
	// 		.get(PASSENGER_API)
	// 		.toPromise()
	// 		.then((response: Response) => {
	// 			return response.json();
	// 		})
	// }

	updatePassenger(passenger: Passenger): Observable<Passenger> {
		let headers = new Headers({
			'Content-type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		})

		return this.http
			.put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
			.map((response: Response) => {
				return response.json();
			})
	}

	deletePassenger(passenger: Passenger): Observable<Passenger> {
		return this.http
			.put(`${PASSENGER_API}/${passenger.id}`, passenger)
			.map((response: Response) => {
				return response.json();
			})
	}
}