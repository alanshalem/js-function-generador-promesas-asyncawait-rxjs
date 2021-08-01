function requestHandler(req, res) {
	User.findById(req.userId)
		.then(function (user) {
			Tasks.findById(user.tasksId);
		})
		.then(function (tasks) {
			tasks.completed = true;
			return tasks.save();
		})
		.then(function () {
			res.send("Tasks completed");
		})
		.catch(function (errors) {
			res.send(errors);
		});
}
