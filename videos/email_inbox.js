import { Selector } from 'testcafe';
import f from '../lib';


fixture("Email Inbox")
    .page ("http://gadgets.erpnext.com/login");

test('Material Request to Purchase Order', async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(false)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

        In this video, we will learn how to configure email inbox in E R P Next.`)
        
    await f.add_slide({
			title: "Email Inbox",
			})

	await f.speak(`Configuring email inbox helps in fetching emails for the specific email I D right into user's account.`)

    await f.remove_slide()
    
    await f.speak(`To setup an email inbox for the user, you must configure Email Domain and Email Account master
                for that user. For detailed help on it, check help video on Email Account setup.`)

    await f.search("email acccount", "Email Account List")

    await f.click_list_item("")

    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});