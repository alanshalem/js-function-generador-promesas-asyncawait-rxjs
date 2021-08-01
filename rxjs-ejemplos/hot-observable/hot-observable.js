import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
export class ExampleHotObservable {
	static createHotObservable() {
		const observable$ = fromEvent(document, "mousemove");

		observable$.pipe(throttleTime(5000));

		return observable$;
	}
}
