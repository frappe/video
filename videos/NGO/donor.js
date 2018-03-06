import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Donors Management"


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

			In this video, we will learn how to manage donors in E R P Next.
			`)

	await f.add_slide({
			title: "Donor Management",
			bullet_points: [ 'Donor Type', 'Donor'],
			})

	await f.speak(`Let's check how to create Donor types. `)

	await f.remove_slide()

	await f.search("donor type", "Donor Type List")

	await f.hover_element("a", "Corporate")
	await f.hover_element("a", "Individual")

	await f.speak(`These are the existing donor types. Let's create a new donor type.`)

	await f.click_primary_button("New")

	await f.fill_field("Donor Type", "Foundation")

	await f.click_element("button", "Edit in full page")

	await f.click_primary_button("Save")

	await f.add_slide({
			title: "Donor",
			})

	await f.speak(`Now, let's add a new Donor.`)

	await f.remove_slide()
	
	await f.search("donor", "Donor List")
			
	await f.click_primary_button("New")

	await f.fill_field("Donor Name", "Mark Webster")

	await f.fill_field("Donor Type", "Corporate", "Corporate")

	await f.fill_field("Email", "mark@ms-ports.co.uk")

	await f.click_primary_button("Save")

	await f.pause(1)
			
	await f.click_list_item("Mark Webster")
	
	await f.speak(`You can capture more details of the donor
			like and contact details.`)
			
	// await f.set_sidebar_image('../../images/ashik.png')
//
// 	await f.click_primary_button("Upload")
			
	await f.click_primary_button("Save")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});