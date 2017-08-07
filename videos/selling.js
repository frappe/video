import { Selector } from 'testcafe';
import f from '../lib';


fixture("Selling Cycle")
    .page ("http://gadgets.erpnext.com/login");

test('Selling Cycle in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorial.

		In this video, we will learn how to created sales transactions like Sales Order, Delivery Note and Invoice in E R P Next. On receiving order from the customer,
		create a new Sales Order.
		`)

	await f.search ("new sales o", "New Sales Order")

	await f.speak(`
			You can create new Sales Order by entering details manually. Or you can also pull details from the Quotation.
			`)

	await f.click_toolbar_button('Get items from')

	await f.click_dropdown_item('Quotation')

	await f.pause(1)

	await f.speak(`Enter Quotation I D.`)

	await f.fill_field("search_term","24")

	await f.pause(1)

	await f.click_primary_button("Get Items")

	await f.speak(`
			We have most of the details in this Sales Order fetched from the Quotation.
			Enter Expected Delivery Date.
			`)

	await f.fill_field("Delivery Date", "05-08-2017")

	await f.open_row("items",1)

	await f.hover_element("label", "Delivery Warehouse")

	await f.speak(`
			Select a Warehouse from where you will be shipping this item. Once this sales order is submitted, quantity of this
			item will be reserved in this warehouse.
		`)

	await f.close_row()

	await f.scroll(0)

	await f.speak(`
			Let's save this Sales Order.
			`)

	await f.click_primary_button()

	await f.speak(`
			To check preview of this order, click here.
				`)

	await f.click_print_icon()

	await f.scroll(250)

	await f.speak(`
		This is a preview of your Sales order.
		`)

	await f.click_primary_button('Edit')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')

	await f.click_toolbar_button("Make")

	await f.speak(`
			Once a sales order is submitted, you can create Delivery Note, Sales Invoice and advance payment entry against it.
			When actually shipping items to the Customer, create a Delivery Note from Sales Order.
		`)

	await f.click_dropdown_item("Delivery")

	await f.speak(`
			We have all the sales order details fetched into Delivery note.
			`)

	await f.speak(`
			Only keep the items which are being dispatched in this shipment. For rest of items, you can create another Delivery Note
			from Sales Order.
		`)

	await f.open_row("items",1)

	await f.hover_element("label", "Quantity", 1)

	await f.speak(`
			Also, enter exact quantity of an item being shipped.
		`)

	await f.hover_element("label", "From Warehouse")

	await f.hover_element("label", "Serial No")

	await f.hover_element("label", "Batch No")

	await f.speak(`
			For the serialized and batched item, select relevant details in this section.
			`)

	await f.close_row()

	await f.speak(`
			Lets save and submit this Delivery Note.
			`)

	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')

	await f.speak(`
			On submission of a Delivery Note, stock of the items delivered will be reduced from our warehouse. Also, expense will be booked for the items delivered.
				`)

	await f.click_toolbar_button("View")

	await f.speak(`
			Check Stock and Accounting Ledger entry to check impact of this Delivery Note on stock and accounts.
				`)
	await f.click_toolbar_button("Make")

	await f.speak(`
			Now let's check how to create Sales Invoice from a Delivery Note. You can also create Sales invoice from the Sales Order.
			`)

	await f.click_dropdown_item("Invoice")

	
	await f.speak(`
			Sales Invoice is an accounting transaction. On submission of a Sales Invoice, posting will be done in the accounts like receivable, income, taxes etc.
			Let's assume that this is accrual sale, and the payment will be received at a later date.
	 		`)

	await f.open_row("items",1)

	await f.click_section("Accounting Details")

	await f.hover_element("label", "Income Account")

	await f.speak(`
			Select an income account and cost center for this item.
			`)

	await f.close_row()

	await f.scroll_to_section("Time Sheet List")

	await f.speak(`
			Select taxes and charges applicable on this invoice. Let's save and submit this invoice.
			`)
		
	await f.scroll_to_section("More Information")
		
	//await f.click_section("Accounting Details")
		
	await f.pause(1)
		
	await f.hover_element("label","Debit To")
		
	await f.speak(`
			From here, you can select a receivable account in which outstanding payment will be updated.
			`)
	
	await f.speak(`
			Let's save and submit this invoice.
				`)

	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')

	await f.speak(`
			On submission of Sales Invoice, based on the value of an item, sales will be booked in the income account.
			`)
	
	await f.click_toolbar_button("View")
		
	await f.speak(`
			Check Accounting Ledger for this Sales Invoice from here.
			`)
	await f.click_toolbar_button("Make")
	
	await f.speak(`
			On receipt of payment from the customer, payment entry will be created from this Sales Invoice.
			`)
	
	await f.click_dropdown_item("Payment")
	
	await f.pause(1)
		
	await f.hover_element("label", "Party")
		
	await f.speak(`
			Customer details will be fetched in this section.
			`)
	
	await f.scroll_to_section("Amount")
		
	await f.hover_element("label", "Paid Amount")
	
	await f.speak(`
			Enter amount received from the customer as a payment. The payment amount will be allocated against the invoice in the below table.
		`)
	
	await f.click_section("Deductions or Loss")
		
	await f.scroll_to_section("Deductions or Loss")
	
	await f.speak(`
			Enter deductions if any, like difference availed due to currency exchange rate.
			`)
		
	await f.scroll_to_section("Transaction ID")
		
	await f.speak(`
			Enter payment acknowledgement details here.
			`)
	await f.fill_field("reference_no","BOI7868467")
		
	await f.fill_field("reference_date","31-07-2017")
		
	await f.speak(`
			Now, we can save and submit this payment entry.
			`)
		
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.speak(`
			Once full payment is received from the Customer, status of Sales Invoice will be updated as Paid. And status of Delivery Note and Sales order is updated as completed.
				`)
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});