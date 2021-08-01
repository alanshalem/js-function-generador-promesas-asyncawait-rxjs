import { Subject, BehaviourSubject, ReplaySubject } from "rxjs";

export class ExampleSubjects {
	static testSubject() {
		const subject$ = new Subject();

		//aca actua como observer
		let observer1$ = subject$.subscribe((data) =>
			console.log("OBSERVER 1, ", data)
		);
		//aca actua como observable
		subject$.next(1);
		subject$.next(2);

		let observer2$ = subject$.subscribe(
			(data) => console.log("OBSERVER 2, ", data),
			(error) => console.log(error),
			() => console.log("OBSERVER 2 COMPLETED")
		);
		subject$.next(3);
		observer2$.unsubscribe();
		subject$.next(4);
		subject$.complete();
	}

	static testBehaviourSubject() {
		const subject$ = new BehaviourSubject();

		//aca actua como observer
		let observer1$ = subject$.subscribe((data) =>
			console.log("OBSERVER 1 RECIEVES, ", data)
		);
		//aca actua como observable
		subject$.next(1);
		subject$.next(2);

		let observer2$ = subject$.subscribe(
			(data) => console.log("---> OBSERVER 2 RECIEVES, ", data),
			(error) => console.log(error),
			() => console.log("OBSERVER 2 COMPLETED")
		);
		subject$.next(3);
		observer2$.unsubscribe();
		subject$.next(4);
		subject$.complete();
	}

	static testReplaySubject() {
		const subject$ = new ReplaySubject(3);

		//aca actua como observer
		let observer1$ = subject$.subscribe((data) =>
			console.log("OBSERVER 1 RECIEVES, ", data)
		);
		//aca actua como observable
		subject$.next(-3);
		subject$.next(-2);
		subject$.next(-1);
		subject$.next(0);
		subject$.next(1);
		subject$.next(2);

		let observer2$ = subject$.subscribe(
			(data) => console.log("---> OBSERVER 2 RECIEVES, ", data),
			(error) => console.log(error),
			() => console.log("OBSERVER 2 COMPLETED")
		);
		subject$.next(3);
		observer2$.unsubscribe();
		subject$.next(4);
		subject$.complete();
	}
}

ExampleSubjects.testSubject();
ExampleSubjects.testBehaviourSubject();
