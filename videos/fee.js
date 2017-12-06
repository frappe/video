import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Student Leave Application"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this tutorial, we will learn how to create Student Fee record in E R P Next.
			`)

	await f.add_slide({
			title: "Fee and Payment"
			})

	await f.speak(`Fee is an amount payable for a student to an institute for availing education services.
			`)

	await f.remove_slide()
		
	await f.speak(`In the help video on fee schedule, we have learnt have to create Fees in bulk. Let's quick check
			how to create Student Fee record manually.`)
		
	await f.search("fee", "Fee List")
	
	await f.click_primary_button("New")
		
	await f.speak(`Select a Student.`)
		
	await f.fill_field("Student","Niilo","STUD00010")
		
	await f.fill_field("Due Date", "12-31-2017")
		
	await f.scroll_to_section("Student Details")
		
	await f.speak(`Select a Fee Structure.`)
		
	await f.fill_field("Fee Structure", "bcs", "FS00011")
		
	await f.scroll_to_section("Accounting")

	await f.speak(`Ensure relevant accounts are selected. Now, you can save and submit Fee record.`)
		
	await f.click_primary_button("Save")
	
	await f.click_primary_button("Submit")
		
	await f.click_primary_button("Yes")
		
	await f.hover_element("indicator orange")
		
	await f.speak(`You can observe that status of Fee is Unpaid. When payment is made against this Fee record, then
			this is how Payment Entry is created.`)
		
	await f.click_toolbar_button("Make")
		
	await f.click_dropdown_item("Payment")
		
	await f.pause(1)
		
	await f.hover_element("label", "Party")
		
	await f.hover_element("label", "Party Name")
		
	await f.speak(`Student details will be fetched as party in the payment entry.`)
		
	await f.click_section("Accounts")
		
	await f.speak(`Enter that correct receivable and payment account is selected in this section.`)
		
	await f.scroll_to_section("Amount")
		
	await f.speak(`Enter fee amount received here.`)
		
	await f.hover_element("label", "Paid Amount (USD)")
		
	await f.click_section("Reference")
		
	await f.speak(`The Fee record is fetched here against which this payment entry is being made.`)
		
	await f.scroll_to_section("Transaction ID")
		
	await f.fill_field("Cheque/Reference No", "7B7N3GDB")
		
	await f.fill_field("Cheque/Reference Date", "11-29-2017")
		
	await f.speak(`Save and submit Payment Entry.`)
		
	await f.click_primary_button("Save")
	
	await f.click_primary_button("Submit")
		
	await f.click_primary_button("Yes")
		
	await f.go_back()
	
	await f.speak(`Once payment entry is made, then Fee status will be updated as Paid.`)
		
	await f.click_form_menu("Menu")
	
	await await f.click_dropdown_item("Reload")
		
	await f.hover_element("indicator green")
	 
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
});