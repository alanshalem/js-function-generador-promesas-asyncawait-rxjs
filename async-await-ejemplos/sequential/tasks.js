const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
	async taskOne() {
		try {
			await sleep(4000);
			throw new Error("SOME PROBLEM");
			return "ONE VALUE";
		} catch (e) {
			console.log(e);
		}
	},

	async taskTwo() {
		try {
			await sleep(2000);
			return "TWO VALUE";
		} catch (e) {
			console.log(e);
		}
	},
};
