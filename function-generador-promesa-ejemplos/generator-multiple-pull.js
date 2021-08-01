function* funcionMultiplePull() {
	let indice = 0;
	while (true) {
		yield indice++;
		return indice++;
	}
}

const iterador = funcionMultiplePull();
console.log(iterador);

const resultadoIterador = iterador.next();
console.log(resultadoIterador);
console.log(resultadoIterador.value);

console.log(iterador.next().value);
console.log(iterador.next().value);

function funcionMultiplePullSinAsterisco(array) {
	let siguienteIndice = 0;
	return {
		next: () => {
			if (siguienteIndice < Array.length) {
				return {
					value: array[siguienteIndice++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
	};
}

const array = ["Hola", "Chau"];

const iterador2 = funcionMultiplePullSinAsterisco(array);

let result = iterador2.next();
console.log(result.value);
console.log(resuult.done);

result = iterador2.next();
console.log(result.value);
console.log(resuult.done);

result = iterador2.next();
console.log(result.value);
console.log(resuult.done);
