import { Selector } from 'testcafe';
import f from '../lib';


fixture("Getting Started")
    .page("http://erpnextv7:8000/login");


test('Getting started', async t => {

    await f.login("micheal.corleone@nationaltrading.com", "1234")
    await f.use_voice("veena")
	await f.setTestSpeed(0.75)

    await f.toggle_speak(true)

    await f.speak
        (`Hi. Welcome to E R P Next video tutorial. In this video, we will learn how to manage invoicing as per the Goods and Services tax in India, also known as G S T.`)

 	await f.pause(1)

 	//chart of accounts

 	await f.speak
 	      (`In E R P next, tax accounts for G S T are auto-created in Chart of Accounts.`)

 	await f.search('chart of acc', 'Open Chart of Accounts')

 	var link = await f.select_element('a', 'Source of Funds (Liabilities) - NTC')

 	await f.click(link)

 	var link = await f.select_element('a', 'Current Liabilities - NTC')

 	await f.click(link)

 	var link = await f.select_element('a', 'Duties and Taxes - NTC')

 	await f.click(link)

 	await f.speak
 	      (`Separate tax account will be created for each type of G S T.`)

 	await f.hover_element('a', 'CGST - NTC', 1)
 	await f.hover_element('a', 'IGST - NTC', 1)
 	await f.hover_element('a', 'SGST - NTC', 1)

 	//Sales taxes and charges

 	await f.speak
 	      (`Also, sales taxes and purchase taxes master will be auto-created for G S T accounts.`)

 	await f.search('sales taxes and', 'Sales Taxes and Charges Template List')

 	await f.hover_element('a', 'Out of State GST', 1)
 	await f.hover_element('a', 'In State GST', 1)

 	await f.speak
 	      (`Based on your location and customers shipping address, you can select G S T template.`)

 	await f.pause(1)

 	await f.speak
 	      (`Let's check In State tax master`)

 	var link = await f.select_element('a', 'In State GST')

 	await f.click(link)

 	await f.speak
      (`In the In State GST template, tax rate applied on the item will be divided between C G S T and S G S T accounts`)

 	await f.goto_desk();

 	//Addresses

 	await f.speak
 	      (`G S T Law requires that you maintain the G S T number for all your customers and suppliers. In E R P Next, customers and suppliers G S T number is tracked in the Address.`)

 	await f.search('customer', 'Customer List')

 	await f.click_list_item('Pioneer Energy Solutions')

 	await f.speak
 	      (`Let’s assume that we need to update G S T number for this customer. Go to address of this Customer.`)

 	await f.scroll_to_section('Address and Contact')

 	var edit_address = await f.select_element('.address-box a', 'Edit')

 	await f.click(edit_address)

 	await f.speak
 	      (`Enter G S T number.`)

 	await f.fill_field ('gstin', '23AAACW8099E1ZX')

 	await f.click_primary_button()

 	await f.speak
 	      (`The first two digits of the G S T number should match with the state code. If it is not matching, you will receive a validation message like this. Enter Correct G S T number and save again.`)

 	await f.close_modal()

 	await f.fill_field ('gstin', '27AAACW8099E1ZX')

 	await f.click_primary_button()

	 	await f.speak
	 	      (`Also ensure that you have updated G S T number of your Company`)

	await f.search('comp', 'Company List')

	await f.click_list_item('National Gadgets Pvt Ltd')

	await f.scroll_to_section('Company Info')

	await f.hover_element('.address-box', 'GSTIN', 2)

	await f.goto_desk();

	//Items

	await f.speak
	      (`According to the G S T law, each item has a unique H S N code. H S N stands for Harmonised system nomenclature. E R P Next comes pre-installed with more than twelve thousand H S N Codes. Let's update H S N Code for an item`)

	await f.search('ite', 'Item List')

	await f.click_list_item('Xiaomi Redmi 3')

	await f.pause(2)

	await f.scroll(800)

	await f.speak
	      (`Search and select H S N code`)

	await f.fill_field ('gst_hsn_code','85176270','85176270')

	await f.speak
	      (`Save Item`)

	await f.click_primary_button()

	await f.speak
	      (`Also, you should update G S T tax accounts and rate applied on this Item.`)

	await f.scroll_to_section('Item Tax')

	await f.click_section('Item Tax')

	await f.add_row('taxes')
	await f.open_row('taxes', 1)
	await f.fill_field('tax_type', 'IGST - NTC')

	await f.speak
	      (`Usually the rate for C G S T and S G S T is half of I G S T. For example, if I G S T applied on this item is 18 percent, then C G S T and S G S T, it will be 9 percent each.`)

	await f.insert_below()

	await f.fill_field('tax_type', 'CGST - NTC')

	await f.insert_below()

	await f.fill_field('tax_type', 'SGST - NTC')

	await f.close_row()

	await f.click_primary_button()


	await f.speak
	`Now, we will create a Sales Invoice which will comply with G S T.`

	await f.search("new sales inv", "New Sales Invoice")

	await f.speak
	`select customer.`

	await f.fill_field("customer", "Pioneer Energy Solutions", "pioneer")

	await f.click_section("Address and Contact")

	await f.scroll_to_section("Address and Contact")

	await f.speak
	`We can see that customers and our G S T number is fetched with the address details. Now, we will select items.`

	await f.open_row('items', 1)
	await f.fill_field('item_code', 'Xiaomi Redmi 3')

	await f.pause(1)
	await f.insert_below()
	await f.fill_field('item_code', 'Mobile Phone Cover')

	await f.close_row()


	await f.speak
	`Since this customer is located in the same state as ours, we will select tax template of In State.`

	await f.fill_field("taxes_and_charges", "In State GST")

	var link = await f.select_element('a', 'Show tax break-up')

	await f.click(link)

	await f.scroll_to_element('.tax-break-up')

	await f.speak
	`We can see that different tax rate has been applied on each item, based on the tax rate mentioned in the Item master.`

	await f.pause(1)

	await f.speak
	`Let's Save this Sales Invoice.`

	await f.click_primary_button()

	await f.pause(1)

	await f.speak
	`Let's check print preview.`

	await f.click_print_icon()

	await f.scroll(300)

	await f.speak
	`G S T number of customer and your company will be updated here.`

	await f.scroll(0)

	await f.speak
	`Now, we can submit this Sales Invoice.`

	await f.click_primary_button()
	await f.click_primary_button()
	await f.click_primary_button()

	await f.close_modal()

	await f.goto_desk()

	//Reports

	await f.speak
	`In E R P Next, reports for filing G S T tax returns are readily available. Check Accounts module for the reports.`

	await f.search('accou', 'Open Accounts')

	await f.scroll_to_element('.section-head:contains("Goods and Services Tax (GST India)")')

	await f.hover_element('div', 'Goods and Services Tax (GST India)', 0.5)

	await f.hover_element('div', 'GST Sales Register', 0.5)

	await f.hover_element('div', 'GST Itemised Sales Register ', 0.5)

	await f.speak
	`Check this report for filing your sales tax returns`

	await f.click_link('#query-report/GST Itemised Sales Register')

	await f.pause(1)

	await f.speak
	`Same way, you can check G S T Purchase Register report for filing purchase returns.`

	//portal

	await f.goto_desk()

	await f.speak
	`In E R P Next, you can invite your Customers and Suppliers to update G S T number for their companies from your E R P portal.

	To send them an email invite, go to G S T Settings.`

	await f.search('gst', 'GST Settings')

	await f.speak
	`Here you will get the count of addresses with and without G S T Number. To send reminder to contact without G S T number, click here.`

	await f.click_toolbar_button('Send GST Update Reminder')

	await f.close_modal()

	await f.speak
	`Let's check how Customer will login to your E R P Next and update G S T number in the respective address master.`

});


