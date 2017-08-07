import { Selector } from 'testcafe';
import f from '../lib';


fixture("Buying Cycle")
    .page ("http://gadgets.erpnext.com/login");

test('Buying Cycle in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

		In this video, we will learn how to created purchase transactions like Purchase Order, Purchase Receipt and Invoice in E R P Next.		
		To place a new order to your supplier, create new Purchase Order.
		`)

	await f.search ("new purchase o", "New Purchase Order")

	await f.speak(`
			You can create a new Purchase Order by entering details manually. Or you can also pull details from the these 	transactions. Let's pull the items from Material Request.
			`)

	await f.click_toolbar_button('Get items from')
		
	await f.click_toolbar_button('Add items from')
		
	await f.speak(`
			Let's pull the items from Material Request.
				`)

	await f.click_dropdown_item('Material Request')

	await f.pause(1)
		
	await f.speak(`
			You can use these options to filter result.
		`)

	await f.fill_field("search_term","28")

	await f.pause(1)

	await f.click_primary_button("Get Items")

	await f.speak(`
			We have items fetched from Material Request. 
			Select a Supplier.
			`)

	await f.fill_field("Supplier", "Id Ante Nunc Inc.", "ID ante n")
	
	await f.click_section("Currency and Price List")
		
	await f.speak(`
			In this section you can select Suppliers currency and price list from where item's rate will be fetched.
		`)
		
	await f.open_row("items",1)

	//await f.scroll_to_section("Warehouse and Reference")

	await f.hover_element("label", "Warehouse")

	await f.speak(`
			Select a Warehouse in which this item will be received. On submission of Purchase Order, ordered quantity will be
			updated in this warehouse.
		`)

	await f.close_row()
		
	await f.hover_element("label","Taxes and Charges")
		
	await f.speak(`
			Select Taxes and charges applicable.
					`)
		
	await f.fill_field("Taxes and Charges", "In State", "in sta")

	await f.scroll(0)

	await f.speak(`
			Let's save this Purchase Order.
			`)

	await f.click_primary_button()

	await f.speak(`
			To check preview of this order, click here.
				`)

	await f.click_print_icon()

	await f.scroll(250)

	await f.speak(`
			This is a preview of your Purchase Order.
			`)

	await f.click_primary_button('Edit')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.click_toolbar_button("Make")

	await f.speak(`
			Once a Purchase order is submitted, you can create Purchase Receipt, Purchase Invoice and advance payment entry against it. 
			When actually receiving items from your supplier, Purchase Receipt will be created.
			`)

	await f.click_dropdown_item("Receipt")

	await f.speak(`
			In the Purchase Receipt, only the items which are being received in the shipment will be kept. 
			For rest of the items, you can create another Purchase Receipt.
			`)

	await f.open_row("items",1)
		
	await f.speak(`
			Enter Received, accepted and rejected quantity for this item.
				`)
		
	await f.fill_field("received_qty","5")
	
	await f.hover_element("label","Accepted Warehouse")
		
	await f.speak(`
			Select Accepted Warehouse. Rejected Warehouse will be selected only if there is rejected quantity.
			`)
		
	await f.hover_element("label", "Serial No")
		
	await f.hover_element("label", "Batch No")

	await f.speak(`
			For the serialized and batched item, enter relevant details in this section.
			`)

	await f.close_row()

	await f.speak(`
			Lets save and submit this Purchase Receipt.
			`)

	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
	
	await f.click_toolbar_button("View")
		
	await f.click_dropdown_item("Stock Ledger")
		
	await f.speak(`
		On submission of a Purchase Receipt, stock of item will be added in your warehouse. 
		`)
		
	await f.go_back("Go back to Purchase Receipt.")
		
	await f.click_toolbar_button("View")
		
	await f.click_dropdown_item("Accounting Ledger")
		
	await f.speak(`
		As per the perpetual inventory valuation system, stock value is added in the Warehouse account, which is a Current asset 
		account. And other account affected is Stock Received but not billed, which gets nullified in the Purchase Invoice.
		`)

	await f.go_back("Go back to Purchase Receipt.")
		
	await f.click_toolbar_button("Make")

	await f.speak(`
			Now let's create a Purchase Invoice from a Purchase Receipt. You can also create a Purchase invoice from 
			a Purchase Order.
			`)

	await f.click_dropdown_item("Invoice")

	await f.speak(`
			Purchase Invoice is an accounting transaction. On submission of a Purchase Invoice, payables are updates towards the 
			supplier.
	 		`)

	await f.open_row("items",1)
		
	// await f.hover_element("label","Accounting")
//
// 	await f.click_section("accounting")

	await f.hover_element("label", "Expense Head")

	await f.speak(`
			Select an Expense Account here.
			`)
	
	await f.fill_field("expense_account", "Cost of Goods Sold - GTPL", "cost of good")
		
	await f.speak(`
			As per the perpetual inventory valuation system, for the stock item, expense is booked when it is delivered.
			Hence for the stock item, expense account will be replaced with Stock Received but not billed account.
			`)

	await f.close_row()
		
	await f.click_section("More Information")
		
	await f.hover_element("label", "Credit To")
		
	await f.speak(`
			Payable account of the Supplier is updated in this field.
			`)

	await f.speak(`
			Let's save and submit this invoice.
			`)

	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.pause(1)
	
	await f.click_toolbar_button("View")
		
	await f.speak(`
			Check Accounting Ledger for this Purchase Invoice from here.
			`)
		
	await f.click_toolbar_button("Make")
	
	await f.speak(`
			When making payment to the Supplier, create payment entry from here.
			`)
	
	await f.click_dropdown_item("Payment")
	
	await f.pause(1)
		
	await f.hover_element("label", "Party")
		
	await f.speak(`
			Supplier details will be updated in this section.
			`)
	
	await f.scroll_to_section("Amount")
		
	await f.hover_element("label", "Paid Amount")
	
	await f.speak(`
			Enter exact amount being paid to the Supplier. The payment amount will be allocated against the invoice in the below table.
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
	await f.fill_field("reference_no","UBI85486878")
		
	await f.fill_field("reference_date","31-07-2017")
		
	await f.speak(`
			Now, we can save and submit this payment entry.
			`)
		
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.speak(`
			Once full payment is made to Supplier, status of Purchase Invoice will be updated as Paid. And status of Purchase Receipt and Purchase order 
			will be updated as completed.
				`)
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});