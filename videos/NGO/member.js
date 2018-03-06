import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Member"


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
			
			e r p next foundation's backend like membership, chapters are managed using non profit module only.
			`)

	await f.add_slide({
			title: "Member",
			bullet_points: [ 'Membership Type', 'Member'],
			})

	await f.speak(`In this tutorial, we will  how to create members. Non profit organization is managed and
			governed by it's members. `)

	await f.remove_slide()

	await f.speak(`You can become a member in a foundation by subscribing to a membership plan. This membership
			subscription also works as a source of income for a non profit. Let's check how to create Membership Types.`)

	await f.search("membership type", "Membership Type List")

	await f.hover_element("a", "Founder Member")
	await f.hover_element("a", "Platinum")

	await f.speak(`These are the existing membership Types. Let's create a new membership type.`)

	await f.click_primary_button("New")

	await f.fill_field("Membership Type", "Gold Member")

	await f.hover_element("label", "Amount")

	await f.speak(`Enter Membership Amount`)

	await f.fill_field("Amount", "50000")

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.hover_element("a", "Gold Member")

	await f.speak(`Now, let's check how to create a new Member.`)

	await f.add_slide({
				title: "Member"
				})

	await f.pause(3)

	await f.remove_slide()
	
	await f.search("member list", "Member List")
				
	await f.pause(1)

	await f.click_primary_button("New")

	await f.fill_field("Member Name", "Ashik Stephen")

	await f.fill_field("Membership Type","Individual" ,"individ" )

	await f.speak(`Select member's User I D in the email field.`)

	await f.fill_field("Email", "ashik@stephen.io")

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.speak(`Once Member is created, you can update more details.`)
				
	await f.click_element("a","Ashik Stephen")
				
	await f.speak(`In the member's master, you can update more details about this member. Let's update an image 
			for this member.`)
				
	await f.scroll_to_section("Address and Contact")
				
	await f.speak(`You can also capture Address and Contact in the member's master. Using member,
				you can create membership records.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});