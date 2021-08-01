const { taskOne, taskTwo } = require("./tasks");

async function main() {
	try {
		console.time("Measuring Time");
		const valueOne = await taskOne();
		const valueTwo = await taskTwo();
		console.timeEnd("Measuring Time");

		console.log("Task one returned", valueOne);
		console.log("Task two returned", valueTwo);
	} catch (e) {
		console.log(e);
	}
}

main();
