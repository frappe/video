const createTestCafe = require('testcafe');

var video_name = process.argv[2];
let runner = null;

createTestCafe('localhost', 1337, 1338)
	.then(testcafe => {
		runner = testcafe.createRunner();
		return runner
			.src(['./videos/' + video_name + '.js'])
			.browsers(['chrome'])
			.run();
	})
	.then(remoteConnection => {
		/* ... */
	});