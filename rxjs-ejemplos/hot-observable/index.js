import { ExampleHotObservable } from "./cold-observable";

const observable$ = ExampleHotObservable.createHotObservable();

observable$.subscribe((data) => console.log(data.screenX, data.screenY));

setTimeout(() => {
	observable$.unsubscribe();
}, 2000);
