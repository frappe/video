import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Student Leave Application"


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

			In this video, we will learn how to manage student's leave application in E R P Next.
			`)

	await f.add_slide({
			title: "Student Leave Application"
			})

	await f.pause(3)

	await f.remove_slide()

	await f.search("student leave app", "Student Leave Application List")

	await f.click_primary_button("New")

	await f.speak(`Select a student for whom leave application is to be marked.`)

	await f.fill_field("Student", "ian", "STUD00001")
			
	await f.speak(`Enter from and to date for leaves.`)

	await f.fill_field("From Date", "12-12-2017")
			
	await f.fill_field("To Date", "12-15-2017")
			
	//await f.click_element("button","Edit in full page")
			
	await f.speak(`Save.`)
			
	await f.click_primary_button("Save")
			
	await f.pause(1)
			
	await f.click_list_item("Ian Ronnie Barrett")
			
	await f.hover_element("label", "Mark as Present")
			
	await f.speak(`Check this field if you want to show student as present in the reports.`)
			
	await f.fill_field("Mark as Present")
			
	await f.fill_field("Reason", "To attend crash course on world history")
			
	await f.speak(`Submit leave application.`)
	
	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
});