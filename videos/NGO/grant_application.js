import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Grant Application"


fixture(video_title)
    .page ("http://amart.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('kenneth@erpnext.com', 'slartibartfast')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials on the Non profits module.

			N G O receives many application for the grants. In this video,
			`)

	await f.add_slide({
			title: "Grant Application",
			})

	await f.speak(`we will learn how to track these application, and approve or reject them.`)

	await f.remove_slide()

	await f.search("grant appli", "Grant Application List")

	await f.click_primary_button("New")

	await f.pause(1)

	await f.fill_field("applicant_name", "Pratik Kulkarni")
	await f.fill_field("Email", "pratik@universe.edu.in")

	await f.scroll_to_section("Grant Application Details")

	await f.speak(`Enter description for grant application.`)

	await f.fill_field("Grant Description", "For pursuing PHD in open source for public governance")

	await f.hover_element("label", "Requested Amount")

	await f.speak(`Enter requested amount.`)

	await f.fill_field("Requested Amount", "2000")

	await f.click_primary_button("Save")

	await f.click('[data-fieldname="status"]')

	await f.speak(`Based on the processing stage, update this status field.`)

	await f.click('[data-fieldname="status"]')

	await f.fill_field("Status", "Received")

	await f.scroll_to_section("Assessment Result")
			
	await f.speak(`Enter assessment details in this section.`)

	await f.fill_field("assessment_mark", "80")

	await f.fill_field("assessment_manager", "rohit@erpnext.com", "rohit")

	await f.fill_field("Note", "Grant Approved")

	await f.scroll(0)

	await f.fill_field("Status", "Approved")

	await f.click_primary_button("Save")
			
	await f.hover_element("label", "Route")
	
	await f.speak(`For the reference of applicant, you can also publish it on the website.`)
			
	await f.fill_field("published")
	
	await f.click_primary_button("Save")
			
	await f.speak(`To enable web view of the Grant Application, web form is created by default.`)
			
	await f.search("web form", "Web Form List")
			
	await f.click_list_item("Grant Application")
			
	await f.speak(`Using this web form, application can also be submitted from the website generated
			from your E R P Next account.`)
	
	await f.scroll(550)
		
	await f.pause(1)
				
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});