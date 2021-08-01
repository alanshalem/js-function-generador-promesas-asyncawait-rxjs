import { ExampleColdObservable } from "./cold-observable";

const observable$ = ExampleColdObservable.createColdObservable();

observable$.subscribe(
	(data) => console.log(data),
	(error) => console.log(error),
	() => console.log('OBSERVABLE SENT "COMPLETED"')
);

setTimeout(() => {
	observable$.unsubscribe();
}, 2000);
