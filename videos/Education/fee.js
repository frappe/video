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

			In this tutorial, we will learn how to create Student Fee and make payment entry against a fee.
			`)

	await f.add_slide({
			title: "Fee and Payment",
			})

	await f.speak(`Fee is an amount payable for a student to an institute for availing education services.`)

	await f.remove_slide()

	await f.speak(`To learn how to generate fees for the student in bulk, please check help video on Fee Schedule. 
			Let's quickly check how to create Student Fee record manually.`)

	 await f.search("fee", "Fees List")

	await f.click_primary_button("New")

	await f.speak(`Select a Student.`)

	await f.fill_field("Student","Niilo","STUD00010")

	await f.fill_field("Due Date", "12-31-2017")

	await f.scroll_to_section("Student Details")

	await f.speak(`Select a Fee Structure.`)

	await f.fill_field("Fee Structure", "bcs", "FS00011")

	await f.scroll_to_section("Accounting")
		
	await f.hover_element("label", "Receivable Account")
		
	await f.hover_element("label", "Income Account")

	await f.speak(`Ensure relevant fee accounts are selected. Now, we can save and submit the Fee.`)

	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")
		
	await f.hover_element(".indicator.orange")
		
	await f.speak(`You can observe that status of Fee is Unpaid. When payment is made against this Fee, then
			this is how Payment Entry will be created.`)
		
	await f.click_toolbar_button("Make")
		
	await f.pause(1)
		
	await f.click_dropdown_item("Payment")
			
	await f.pause(1)
		
	await f.hover_element("label", "Party")
		
	await f.hover_element("label", "Party Name")
		
	await f.speak(`In the Payment Entry, Student will be updated as a party.`)
		
	await f.click_section("Accounts")
		
	await f.speak(`Ensure correct receivable and payment account is selected in this section.`)
		
	await f.scroll_to_section("Amount")
		
	await f.hover_element("label", "Paid Amount (USD)")
		
	await f.speak(`Enter fee amount received here.`)
		
	//await f.click_section("Reference")
		
	await f.speak(`The Fee record is fetched in a table against which this payment entry is being made.`)
		
	await f.scroll_to_section("Transaction ID")
		
	await f.speak(`Enter the payment acknowledgment details.`)
		
	await f.fill_field("Cheque/Reference No", "7B7N3GDB")
		
	await f.fill_field("Cheque/Reference Date", "11-29-2017")
		
	await f.speak(`Save and submit Payment Entry.`)
		
	await f.click_primary_button("Save")
	
	await f.click_primary_button("Submit")
		
	await f.click_primary_button("Yes")
		
	await f.pause(1)
		
	await f.speak(`Let's go back to Fee record and check impact on payment entry.`)
		
	await f.go_back()
	
	await f.pause(1)
		
	await f.click_form_menu("Menu")
	
	await await f.click_dropdown_item("Reload")
		
	await f.hover_element(".indicator.green")
		
	await f.speak(`Once payment entry is made, then Fee status will be updated as Paid.`)
		
	await f.speak(`To receive payment, you can also send Payment Request from Fees. If payment gateway in integrated
			in your E R P next account, then payment link will be sent along. When payment is processed, then in
			your E R P Next, Payment Entry will be auto-created.`)
	 
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
});