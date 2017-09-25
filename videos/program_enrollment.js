import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Program Enrollment"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.
		
		Each student enrols in an education institute to pursue a specific program.`)
		
	await f.add_slide({
		title: "Program Enrollment",
			})
			
	await f.speak(`In E R P Next, you should create Program Enrollment to update it.`)

	await f.remove_slide()
			
	await f.speak(`If you recorded Student Application in the E R P Next, you will find option to create
		Program Enrollment in the student applicant itself.`)
		
	await f.click_icon("Schools")
		
	await f.click_module_item("Student Applicant")
		
	await f.click_list_item("Cho Chang")
		
	await f.speak(`Approve Student Application.`)
		
	await f.click_toolbar_button("Actions")
		
	await f.click_dropdown_item("Approve")
		
	await f.pause(1)
		
	await f.click_primary_button("Approve")
		
	await f.speak(`Once an application is approved, you will find option to create Program Enrollment for it.`)
		
	await f.click_toolbar_item("Enroll")
	
	
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});