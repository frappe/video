import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Employee Advance"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`Hi.

			Welcome to E R P Next tutorials.

			In this video, we will learn.`)

	await f.add_slide({
			title: "Employee Advance",
			})

	await f.speak(`how an advance amount is given to an employee, and how to adjust the same
				against an expense claim.`)

	await f.remove_slide()

	await f.speak(`Let's create a new employee advance.`)

	await f.search ("new employee adv", "New Employee Advance")
		
	await f.hover_element("label", "Employee")

	await f.speak(`Select an employee.s`)

	await f.fill_field("Employee", "EMP/0006", "jane")

	await f.speak(`Enter the purpose.`)

	await f.fill_field("Purpose", "Conveyance for travel to Delhi")

	await f.fill_field("Advance Amount", "10000")

	await f.speak(`This is an advance amount requested.`)

	await f.hover_element("label","Advance Account")

	await f.speak(`Select a current asset account in which value of advacen paid will be booked.`)

	await f.fill_field("Advance Account", "Employee Advance - GTPL", "Employee Advance")

	await f.speak(`Also, select mode of payment.`)

	await f.fill_field("Mode of Payment", "Wire Transfer", "wire")

	await f.speak(`Let's save and submit this expense claim. If needed, you can also apply workflow on it
			to manage multiple approvals.`)

	await f.click_primary_button("Save")

	await f.search("employee adv", "Employee Advance List")

	await f.click_list_item("EA-00005")
	
	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.pause(2)

	await f.hover_element("label", "Status")

	await f.speak(`You can notice that status for the Employee Advance is Unpaid.
			When employee is paid, Payment Entry is created.`)

	await f.click_toolbar_button("Make")

	await f.click_dropdown_item("Payment")

	await f.scroll_to_section("Payment From / To")

	await f.hover_element("label", "Party Type")
	await f.hover_element("label", "Party")

	await f.speak(`In the payment entry, Employee details are updated as a party.`)

	await f.click_section("Accounts")

	await f.hover_element("label", "Account Paid To")

	await f.speak(`On submission of payment entry, this current asset account gets
			debite, against a bank or cash account.`)

	await f.hover_element("label", "Paid Amount")

	await f.speak(`Paid Ampunt and Employee Advance I D is updated in a table.`)
	
	await f.scroll_to_section("Transaction ID")

	await f.speak(`Enter payment acknowledgment details in this section.`)

	await f.fill_field("Cheque/Reference No", "MHG64688")

	await f.fill_field("Cheque/Reference Date", "23-04-2018")

	await f.speak(`Let's save and submit this Payment Entry`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	await f.pause(1)

	await f.go_back()
	
	await f.click_form_menu()

	await f.click_dropdown_item("Reload")

	await f.scroll_to_section("Payment Status")

	await f.hover_element("label","Advance Amount")

	await f.hover_element("label","Paid Amount")

	await f.speak(`Based on the payment entry made, value is updated these fields.`)

	await f.add_slide({
		title: "Expense Claim",
		})

	await f.speak(`now, let's check how to allocate Emmployee advance in the expense
				claim.`)

	await f.remove_slide()

	await f.search("expense cla", "Expense Claim List")

	await f.click_list_item("Jane Done")

	await f.speak(`This is an expense claim created for the same employee to whom
			advance was given.`)

	await f.scroll_to_section("Advance Payments")

	await f.speak(`In this section, Employee Advance Entry can be selected.`)

	await f.add_row("advances")

	await f.open_row("advances", 1)

	await f.fill_field("Employee Advance", "EA-00005", "ea")

	await f.speak(`On selection of Employee advance, amount is allocated against 
				Expense claim, and outstanding is updated.`)

	await f.close_row()

	await f.scroll_to_section("Advance Payments")

	await f.pause(1)

	await f.scroll(0)

	await f.fill_field("Approval Status", "Approved")

	await f.click_primary_button("Save");

	await f.pause(2)

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")
	
	await f.speak(`Now, let's check impact of Expense claim on the Employee advance.`)
	
	await f.search("employee ad", "Employee Advance List")

	await f.click_list_item("EA-00005")

	await f.click_form_menu()

	await f.click_dropdown_item("Reload")

	await f.hover_element("label", "Claimed Amount")

	await f.speak(`Here, you can see that based on the allocation in the Expense Claim,
				Claimed Amount is updated in the Employee advance.`)

	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});