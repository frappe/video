import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Project and Tasks"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to create and assign tasks in E R P Next.`)
		
	await f.add_slide({
		title: "Task",
			})

	await f.speak(`
		A task is a well define work assignment, to be completed in a give time period.
			`)

	await f.remove_slide()
		
	await f.speak(`
			A Task can be linked to a Project or created independently as well. For help on how to create a Task for a Project,
			check help video on Projects management in E R P Next.
		`)
	
	await f.click_icon("Projects")
		
	await f.pause(1)

	await f.click_module_item("Task")
		
	await f.pause(1)
		
	await f.speak(`Lets create a new Task.`)
		
	await f.click_primary_button("New")

	await f.speak(`Enter Subject.`)

	await f.fill_field("Subject", "Testing iPhone X")
		
	await f.hover_element("label", "Status")
		
	await f.speak(`Set status.`)
		
	await f.hover_element("label", "Expected Start Date")
		
	await f.speak(`Update expected start and end date.`)
		
	await f.fill_field("exp_start_date", "25-09-2017")
		
	await f.fill_field("exp_end_date", "28-09-2017")
		
	await f.speak(`Save Task.`)
		
	await f.click_primary_button("Save")
		
	await f.pause(1)
		
	await f.scroll_to_section("")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});