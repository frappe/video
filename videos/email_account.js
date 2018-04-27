import { Selector } from 'testcafe';
import f from '../lib';


fixture("Email Account")
    .page ("http://gadgets.erpnext.com/login");

test('Material Request to Purchase Order', async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(false)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

		From your ERPNext account, you can send and receive emails. Let's check how to send an
		email.`)

	await f.search("Quotation", "Quotation List")

	await f.pause(3)

	await f.click_list_item("Etiam Bibendum Fermentum Industries")

	await f.click_form_menu()

	await f.click_dropdown_item("Print")

	await f.scroll(250)

	await f.pause(1)

	await f.scroll(0)

	await f.speak(`Let's email this quotation to the client.`)

	await f.click_form_menu()

	await f.click_list_item("Email")

	await f.speak(`In this window, you can write your message and send email from your E R P Next
			account.`)

	await f.close_modal()

	await f.speak(`		

		Now, let's check how to configure an email account in E R P Next, so that
		you can use your prefered email service for sending and receiving emails
		in your E R P Next account. Let's check the steps one by one.
		`)

	await f.add_slide({
			title: "Email Domain",
			})

	await f.pause(3)

	await f.remove_slide()

	await f.search("email domain", "Email Domain List")

	await f.click_list_item("gmail.com")

	await f.speak(`This is a master in which credentials related to incoming and outgoing email
			gateway can be tracked for the email service you have subscribed for.`)

	await f.go_back()

	await f.speak(`You can also add new Domains as per your need.`)

	await f.hover_element("button", "New")

	await f.speak(`Now, let's check to use Email Domain for sending or 
			fetching in specific document type.`)

	await f.add_slide({
			title: "Email Domain",
			})
	
	await f.speak(`This is managed from Email Account master.`)
	
	await f.remove_slide()

	await f.search ("new email acc", "New Email Account")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});