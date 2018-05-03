import { Selector } from 'testcafe';
import f from '../lib';


fixture("Email Inbox")
    .page ("http://chaiwala.erpnext.com/login");

test('Material Request to Purchase Order', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	// await f.speak(`
		
	// 	Hi.

	// 	Welcome to E R P Next tutorial.

    //     In this video, we will learn how to configure email inbox in E R P Next.`)
        
    // await f.add_slide({
	// 		title: "Email Inbox",
	// 		})

	// await f.speak(`Configuring email inbox helps in fetching emails received on the specific 
	// 			email I D into the account of E R P Next user.
				
	// 			As name suggest, email inbox is associated to a single E R P Next user only.
	// 			`)

	// await f.remove_slide()
    
	// await f.speak(`To setup an email inbox for the user, you must configure .`)

	// await f.add_slide({
	// 			title: "Email Inbox",
	// 			bullet_points: [ 'Email Domain', 'Email Account'],
	// 			})
		
	// await f.speak(`Email Domain and Email Account for that user's email I D. 
	// 				For detailed help on it, check help video on Email Account setup.
	// 			 `)
		
	// await f.remove_slide()

    // await f.search("email account", "Email Account List")

	// await f.click_list_item("Frappe Test Inbox")

	// await f.pause(1)

	// await f.hover_element("label", "Append To")

	// await f.speak(`If you are creating an email account for the email inbox purpose,
	// 		then do no select value in the append to field.`)

	// await f.speak(`Now, let's check how to link this email account with the user.`)
	
	// await f.search("user","User List")

	// await f.click_list_item("Example User")

	// await f.speak(`In the user master, go to Email Inbox section.`)

	// await f.click_section("Email Inbox")

	// await f.add_row("user_emails")

	// await f.open_row("user_emails", 1)

	// await f.speak(`Select an email account created for this user. `)

	// await f.fill_field("Email Account", "Frappe Test Inbox", "Frappe Test Inbox")

	// await f.close_row()

	// await f.speak(`Save User.`)

	// await f.click_primary_button("Save")

	// await f.speak(`With this setting, we have configured Email Inbox for this user.`)

	// await f.speak(`When this user login, an Email Inbox icon will be visible on the desk.
	// 			Let's login from the test user's I D to check.
	// 		`)

	await f.speak(`Click on Email Inbox icon.`)

	//await f.click_desk_icon("Email Inbox")

	await f.speak(`These are the received emails on this i d.`)

	await f.speak(`Click here to reply on this message.`)

	await f.speak(`These are the other actions which can be performed on this email.`)

	await f.speak(`You can also create these documents against this email.`)

	await f.speak(`This is how you can reply to email received in the inbox of your E R P Next
			account.`)

	await f.speak(`From here, check sent emails.`)

	await f.speak(`You can also switch to another email Inbox from here.`)

    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});