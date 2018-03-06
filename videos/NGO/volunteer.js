import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Volunteers"


fixture(video_title)
    .page ("http://amart.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('kenneth@erpnext.com', 'slartibartfast')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials on the Non profits module.

			In this video, we will learn how to manage volunteers in E R P Next.
			`)

	await f.add_slide({
			title: "Volunteers Management",
			bullet_points: [ 'Volunteer Type', 'Volunteer'],
			})

	await f.speak(`Let's check how to create Volunteer types. `)

	await f.remove_slide()

	await f.search("volunteer type", "Volunteer Type List")

	await f.hover_element("a", "Technical Lead")
	await f.hover_element("a", "Retired Professional")

	await f.speak(`These are the existing volunteer types. Let's create a new volunteer type.`)

	await f.click_primary_button("New")

	await f.fill_field("Volunteer Type Name", "Student")
	await f.fill_field("Amount", "50")

	await f.click_element("button", "Edit in full page")

	await f.click_primary_button("Save")

	await f.add_slide({
			title: "Volunteer",
			})

	await f.speak(`Now, let's add a new Volunteer.`)

	await f.remove_slide()
	
	await f.search("volunteer", "Volunteer List")
			
	await f.click_primary_button("New")

	await f.fill_field("Volunteer Name", "Sameer Penwala")

	await f.fill_field("Volunteer Type", "Student", "Student")

	await f.fill_field("Email", "sameer@frappe.io")

	await f.click_primary_button("Save")

	await f.pause(1)
			
	await f.click_element("a", "Sameer Penwala")
			
	await f.speak(`In the volunteer master, you can capture more details like contact address, availability and skills.
			Tracking these details will assist you in allocating specific project to a volunteer.
			`)
			
	await f.fill_field("Availability", "Weekly")
			
	await f.fill_field("Availability Timeslot", "Afternoon")
			
	await f.add_row("volunteer_skills")
			
	await f.open_row("volunteer_skills", 1)
			
	await f.fill_field("Volunteer Skill", "Program Presentation")
	
	await f.insert_below()
			
	await f.fill_field("Volunteer Skill", "Data Entry")
			
	await f.close_row()
			
	await f.click_primary_button("Save")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});