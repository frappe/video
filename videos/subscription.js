import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Subscription"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`Hi.

			Welcome to E R P Next tutorials.

            In this video, we will learn about subscription management in E R P Next.
            Let's suppose you have to create a purchase invoice every month
            for paying the property rent. You should only create first Purchase Invoice 
            manually, 
            `)

	await f.add_slide({
			title: "Subscription",
			})

    await f.speak(`and then create a subscription for it, so that purchase invoice 
            is auto-cerated each month.`)

    await f.remove_slide()

    await f.speak(`Let's create a subscription for the property rent invoice.`)

    await f.search("subscription", "Subscription List")

    await f.click_primary_button("New")

    await f.hover_element("label", "Reference Doctype")

    await f.speak(`Select a reference doctype`)

    await f.fill_field("Reference Doctype", "Purchase Invoice", "invoice")

    await f.speak(`Select a document for which subscription is to be created. In this case,
            it will be a first property rent invoice.`)

    await f.fill_field("Reference Document", "PINV-00057", "57")

    await f.hover_element("label", "Frequency")

    await f.speak(`Set the frequency for the recreation of this document.`)

    await f.fill_field("Frequency", "Monthly")

    await f.speak(`Select Start and end date.`)

    await f.fill_field("Start Date", "01-05-2018")

    await f.fill_field("End Date", "30-04-2019")
    
    await f.speak(`Let's save this subscription.`)

    await f.click_primary_button("Save")

    await f.hover_element("label", "Submit on Creation")

    await f.speak(`check this field if you want monthly invoices to also get auto-submitted.`)

    await f.fill_field("Repeat on Day", "2")

    await f.speak(`this is the day of the month on which recurring invoice will be auto-generated.`)

    await f.click_section("Notification")

    await f.speak(`Enable notification from here.`)

    await f.fill_field("Notify by Email")

    await f.speak(`Enter customization subject for the email notification.`)

    await f.fill_field("Subject", "{{doc.doctype}} - {{doc.name}} created for Monthly Rent")

    await f.fill_field("Recipients", "purhase@gadgets.com, leaser@propertyowner.com")

    await f.click_section("Message")

    await f.hover_element("label","Message")

    await f.speak(`Enter the email message here.`)

    await f.click_primary_button("Save")

    await f.click_primary_button("Submit")

    await f.click_primary_button("Yes")

    await f.speak(`As per this configuration, Purchase Invoice for the rent payment will be
            auto-created every month. You can use this functionality for all types of documents.`)
    
    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});