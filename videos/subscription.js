import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Subscription"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Victoria")

    await f.toggle_speak(false)
	
	await f.speak(`Hi.

			Welcome to E R P Next tutorial.

			In this video, we will learn about subscription management in E R P Next.`)

	await f.add_slide({
			title: "Subscription",
			})

    await f.speak(`You can create a subscription to auto-create any specific transaction in
            timely interval.`)

    await f.remove_slide()

    await f.search("subscription", "Subscription List")

    await f.speak(`Let's create a new subscription.`)

    await f.click_primary_button("New")

    await f.hover_element("label", "Reference Doctype")

    await f.speak(`Select a reference doctype`)

    await f.fill_field("Reference Document","PINV-00057", "00057")

    await f.hover_element("label", "Frequency")

    await f.speak(`Select a frequency fot the recreation of this document.`)

    await f.fill_field("Frequency", "Monthly")

    await f.speak(`Set Start and end date.`)

    await f.fill_field("Start Date", "05-01-2018")

    await f.fill_field("End Date", "04-30-2019")
    
    await f.speak(`Let's save subscription for now`)

    await f.click_primary_button("Save")

    await f.click_section("Notification")

    await f.speak(`Enable notification from here.`)

    await f.fill_field("Notify by Email")

    await f.fill_field("Recipients", "leaser@propertyowner.com")

    await f.click_section("Message")

    await f.hover_element("label","Message")

    await f.speak(`As per this configuration, Purchase Invoice for the rent service will be
            auto-created every month.`)
    
    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});