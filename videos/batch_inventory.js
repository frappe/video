import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Batch Inventory"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this tutorial, we will learn how to create assessment result against an Assessment plan.
			`)

	await f.add_slide({
			title: "Assessment Result",
			bullet_points: [ 'Assessment Result', 'Assessment Result Tool'],
			})

	await f.speak(`The actual marks scored by students in the assessment is tracked in assessment result.
			`)

	await f.remove_slide()

	await f.scroll(150)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});