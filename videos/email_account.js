import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Email Account"

fixture(video_title)
    .page ("http://chaiwala.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

		From your ERPNext account, you can send and receive emails. In this tutorial, we 
		will learn about various configuration to make most from your email service.
		
		Firstly, let's check how to send a simple transaction from E R P Next.`)

	await f.search("Quotation", "Quotation List")

	await f.pause(3)

	await f.click_list_item("Etiam Bibendum Fermentum Industries")

	await f.click_form_menu()

	await f.click_dropdown_item("Print")

	await f.pause(1)

	await f.scroll(200)

	await f.pause(2)

	await f.scroll(0)

	await f.speak(`Let's email this quotation to the client.`)

	await f.click_form_menu()

	await f.click_dropdown_item("Email")

	await f.speak(`In this window, you can write your message and send email from your 
			E R P Next account.`)

	await f.close_modal()

	await f.speak(`		

		Now, let's check how to configure an email account in the E R P Next, so that
		you can use your prefered email service for sending and receiving emails
		in your E R P Next account.

		The very first step is to setup an email domain.
		`)

	await f.add_slide({
			title: "Email Domain",
			})

	await f.speak(`This is a master in which credentials related to incoming and outgoing 
			email gateway can be tracked for the email service you have subscribed for.`)

	await f.remove_slide()

	await f.search("email domain", "Email Domain List")

	await f.click_list_item("gmail.com")

	await f.speak(`This is an example of how values are entered in the Email Domain. You can 
			consult your email service provider for the credentials to be entered in the 
			Email Domain.
			`)

	await f.speak(`If you are using email service like Gmail, Yahoo, Sparkpost, then you can 
			skip Email Domain, and directly created an Email account.`)

	await f.speak(`You can also add new Domains as per your need.`)

	await f.speak(`Now, let's check to setup an Email Account in E R P Next.`)

	await f.add_slide({
			title: "Email Account",
			})
	
	await f.pause(3)
	
	await f.remove_slide()

	await f.search("email account", "Email Account List")

	await f.click_primary_button ("New")

	await f.speak(`Enter Email I D.`)

	await f.fill_field("Email Address", "frappetest@gmail.com")

	await f.fill_field("Password", "Frappetest4")

	await f.pause(1)

	await f.fill_field("Email Account Name", "Gadgets Support")

	await f.hover_element("label", "Domain")

	await f.speak(`On adding email I D, based on the email domain, value is updated in the 
			Email Domain.`)

	await f.speak(`If you want to pull emails received on this I D into specific docuemnt 
			type of E R P Next, enable incoming for this email account.`)

	await f.fill_field("Enable Incoming")

	await f.hover_element("label", "Append To")

	await f.speak(`In this field, select a document type in which email received from this 
			I D will be captured.`)

	await f.fill_field("Append To", "Opportunity")

	await f.speak(`Let's Save this Email Account for now.`) 

	await f.click_primary_button("Save")

	await f.speak(`As per this configuration, new opportunity will be create for each email received on this I D.

			You can use this feature to centralize your queries related to sales and support. 
			
			For example, if you email us on support at e r p next dot com, then new issue is creatd in our E R P Next account. 
			
			This email managed using email account feature in our E R P Next. Same way, sending email on sales at e r p next dot com
			creates a unique opportunity in our account, to which our sales team sends a response.
			`)

	await f.pause(2)

	await f.speak(`If an Email Account is saved successfully, it indicates that your E R P Next account is able to
			establish connection with your email service.`)

	await f.speak(`Now, let's check how to enable outgoing emails for this I D.`)
	
	await f.hover_element("label", "Enable Outgoing")

	await f.speak(`Check this field to enable outgoing.`)
	
	await f.fill_field("Enable Outgoing")

	await f.speak(`If you also want to set this email as a default outgoing email account, 
			check default ougoing field.`)

	await f.fill_field("Default Outgoing")

	await f.click_primary_button("Save")

	await f.speak(`
		Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});