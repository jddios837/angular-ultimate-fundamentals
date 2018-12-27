// export interface Child {
// 	name: string,
// 	age: number
// }

// la variable con ? indica que es opcional

export interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	checkInDate?: number,
	baggage: string
	// children?: Child[] | null
}