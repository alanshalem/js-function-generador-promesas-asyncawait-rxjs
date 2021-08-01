const { taskOne, taskTwo } = require("./tasks");

async function main() {
	try {
		console.time("Measuring Time");
		const results = await Promise.all([taskOne(), taskTwo()]);
		console.timeEnd("Measuring Time");

		console.log("Task one returned", results[0]);
		console.log("Task two returned", results[1]);
	} catch (e) {
		console.log(e);
	}
}

main();
