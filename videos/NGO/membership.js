import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Membership"


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

			In this video, we will learn how to track memberships in E R P Next.
			`)

	await f.add_slide({
			title: "Membership",
			})

	await f.speak(`When you get subscription for the membership plan, then membership is created. `)

	await f.remove_slide()

	await f.search("new membership", "New Membership")
			
	await f.hover_element("label", "Member")
			
	await f.speak(`Select a member.`)
			
	await f.fill_field("Member", "ashik@stephen.io", "ashik")
			
	await f.pause(1)
			
	await f.fill_field("Membership Type", "Gold Member", "gold")
			
	await f.speak(`Select a membership type this member has subscribed for.`)
	
	await f.hover_element("label", "From")
			
	await f.speak(`Enter membership validity details.`)

	await f.fill_field("From", "01-02-2018")
			
	await f.fill_field("To", "31-01-2019")

	await f.click_primary_button("Save")

	await f.click('[data-fieldname="membership_status"]')

	await f.speak(`
			Membership status will be updated based on the subscription, expiry and renewal of the
			membership.
			`)
		
	await f.click('[data-fieldname="membership_status"]')
		
	await f.scroll_to_section("Payment Details")
		
	await f.hover_element("label","Currency")
	await f.hover_element("label","Amount")
		
	await f.speak(`These details will be fetched from Membership Type.`)
		
	await f.hover_element("label", "Paid")
		
	await f.speak(`Check this field if membership fee is received.`)
		
	await f.fill_field("Paid")
		
	await f.click_primary_button("Save")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});