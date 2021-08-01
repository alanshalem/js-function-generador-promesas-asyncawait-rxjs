import { Observable } from "rxjs";

export class ExampleColdObservable {
	static createColdObservable() {
		const observable$ = Observable.create(function suscribe(observer) {
			let number = 1;
			setInterval(() => {
				try {
					observer.next(number);
					number = number + 1;
					if (number > 5) {
						throw new Error();
					}
				} catch (e) {
					observer.complete();
				}
			}, 500);
		});
		return observable$;
	}
}
