import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Program Enrollment"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to add a new Student in the schools module.`)
		
	await f.add_slide({
		title: "Students",
			})

	await f.pause(3)

	await f.remove_slide()
			
	await f.speak(`Check Students list from here.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});