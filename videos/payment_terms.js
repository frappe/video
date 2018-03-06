import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Payment Terms"


fixture(video_title)
    .page ("http://gadgets-local:8000/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this tutorial, we will learn how to create Payment Terms in E R P Next.
			`)

	await f.add_slide({
			title: "Payment Term",
			bullet_points: [ 'Payment Term', 'Payment Terms Template'],
			})

	await f.speak(`Payment Terms helps in defining the multiple payment slabs in the sales or purchase transactions.`)

	await f.remove_slide()

	await f.speak(`Let's create Payment Term for each possible payment slab like 20 percent, 30 percent, 50%  etc.`)

	await f.search("payment term", "Payment Term List")

	await f.hover_element("a", "20% Final Installment")

	await f.hover_element("a", "50% Post Shipment")

	await f.speak(`These are the payment terms for 20 and 50 percent payments. Let's create a new Payment Term.`)

	await f.click_primary_button("New")

	await f.fill_field("Payment Term Name", "30% on Order Confirmation")

	await f.fill_field("Invoice Portion", "30")

	await f.fill_field("Credit Days", "10")

	await f.fill_field("Description", "30% on order confirmation")

	await f.click_primary_button("Save")

	await f.click_element("button", "Refresh")

	await f.speak(`Once all the Payment Terms are created, we can create Payment Terms template.`)

	await f.add_slide({
			title: "Payment Terms Template",
			})

	await f.speak(`Using multiple Payment Terms, we will create Payment Terms Template.`)

	await f.remove_slide()

	await f.search("payment term temp", "Payment Terms Template List")

	await f.click_primary_button("New")

	await f.speak("Enter Template Name.")

	await f.fill_field("Template Name", "30-50-20")

	await f.speak("In a table, select Payment Terms.")

	await f.open_row("terms", 1)

	await f.fill_field("Payment Term", "30%", "30% on Order Confirmation")

	await f.hover_element("label", "Invoice Portion")
	await f.hover_element("label", "Credit Days")

	await f.speak(`Invoice Portion and Credit Days are fetched from the Payment Term.`)

	await f.insert_below("terms")

	await f.fill_field("Payment Term", "50% Post", "50% Post Shipment")

	await f.insert_below("terms")

	await f.fill_field("Payment Term", "20% Final", "20% Final Installment")
			
	await f.close_row("terms")

	await f.click_primary_button("Save")

	await f.speak(`Now, let's check how to use this Payment Term in the transaction.`)

	await f.search("sales invoice", "Sales Invoice List")

	await f.hover_element("a", "Unity Pollution Control Equipments PL")

	await f.speak(`Let's open this Sales Invoice.`)

	await f.click_element("a", "Unity Pollution Control Equipments PL")

	await f.pause(1)

	await f.hover_element("label", "Payment Due Date")

	await f.speak(`This is a Payment Due Date of this invoice.`)

	await f.scroll_to_section("Payment Terms")

	await f.speak(`Based on the payment due date, value is set in the payment terms table.
			If you receive payments in multiple slabs, then you should select a Payment Terms template.
			`)

	await f.fill_field("Payment Terms Template", "30-50", "30-50-20")

	await f.pause(1)

	await f.speak(`On selection of Payment Terms, multiple payment slabs are created. For each slab,
			due is set based on the credit days of that Payment Term.

			Based on this payment schedule generated, in the account receivable report, multiple entries
			will be shown for this invoice.

			Let's save and submit this Sales Invoice.
			`)

	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});