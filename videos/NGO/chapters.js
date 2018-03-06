import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "chapters"


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
			
			In this tutorial, we will learn how to manage chapters.
			`)

	await f.add_slide({
			title: "Chapter",
			})

	await f.speak(`Chapter is a group of members focused to drive activities of Non-profit organization
			in a specific geographical region.`)

	await f.remove_slide()

	await f.speak(`Let's check how to create a new Chapter.`)

	await f.search("chapter", "Chapter List")

	await f.hover_element("a", "Mumbai")
	await f.hover_element("a", "San Francisco Bay")

	await f.speak(`These are the chapters for the specific regio.  Let's create a new chapter for U A E.`)

	await f.click_primary_button("New")

	await f.fill_field("Chapter Name", "United Arab Emirates")

	await f.fill_field("Chapter Head", "sami@cloudsol.ae", "sami")
		
	await f.fill_field("Region","United Arab Emirates")
		
	await f.click_primary_buttom("Save")
		
	await f.hover_element("label", "Address")
		
	await f.speak(`Add chapter for this address, if any.`)
		
	await f.fill_field("D-324, Dubai Business Park, PO BOX - 10056")
	
	await f.scroll_to_section("Chapter Members")
		
	await f.click_section("Chapter Members")
		
	await f.speak(`Select members in this section.`)
		
	await f.open_row("")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot 				com. Thanks for watching.
			`)
});	