import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Course Scheduling"


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

		In this video, we will learn how to create student groups.`)
		
	await f.add_slide({
		title: "Student Group",
			})

	await f.speak(`It's a group of student who have enrolled for the same course.`)

	await f.remove_slide()
			
	await f.speak(`Courses are scheduled for a student group. Generally, it is referred as a class.`)
			
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});