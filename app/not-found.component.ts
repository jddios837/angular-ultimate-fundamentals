import { Component } from "@angular/core";

@Component({
	selector: 'not-found',
	template: `
		<div>
			<h1>Home 404</h1>
			Not Found, <a [routerLink]="[ '/' ]">Go Home</a>
		</div>
	`
})
export class NotFoundComponent {

}