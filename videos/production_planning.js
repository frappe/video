import { Selector } from 'testcafe';
import f from '../lib';


fixture("Bill of Materials")
    .page ("http://gadgets.erpnext.com/login");

test('Bill of Materials in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to do production planning in E R P Next.

		`)

	await f.search ("production pl", "Production Planning Tool")

	//await f.hover_element("label", "Get Items From")

	await f.speak(`
			Select a transaction from where manufacturing item should be fetched.
			`)

	await f.fill_field("get_items_from","Sales Order")

	await f.speak(`Apply filters as needed.`)

	await f.fill_field("fg_item","samsun", "Samsung On5 Pro (Gold)")

	await f.fill_field("from_date","samsun", "06-08-2017")

	await f.fill_field("to_date","samsun", "08-08-2017")

	await f.click_element("button", "Get Sales Orders")

	await f.speak(`To pull manufacturing item from the Sales Order, click on Get Items button.`)

	await f.click_element("button", "Get Items")

	await f.scroll_to_section("Select Items")

	await f.speak(`Now, we have manufacturing item fetched from Sales Order to Production Planning Tool.`)

	await f.open_row("items", 1)

	await f.speak(`
			For the manufacturing item, default Bill of Material has been updated. Also, sales order quantity has been updated
			as planned quantity. Update Planned Start Date for manufacturing.
		`)

	await f.fill_field("planned_start_date", "10-08-2017 10:00:00")

	await f.close_row()

	await f.scroll_to_section("Production Orders")

	await f.speak(`
			To create Production Order for the item selected in the above table, click on Create Production Orders button.
		`)

	await f.click_element("button", "Create Production Orders")

	await f.close_modal()

	await f.speak(`A draft Production Order has been created.`)

	await f.speak(`
			Before starting the production, we should also do Material Planning to check if required quantity of raw-materials
			are available.
				`)

	await f.hover_element("button", "Download Materials Required")

	await f.speak(`
			Click here to download a spreadsheet file which will provide details of raw-material items required for the production,
			and their actual stock available in the Warehouse.
				`)

	await f.speak(`
			Raw-material items for which stock shortage is found, you can raise Material Request for them right from here.
			Select a Warehouse for which Material Request will be raised for the shortage item.
		`)

	await f.fill_field("purchase_request_for_warehouse", "Stores - GTPL", "stor")

	await f.hover_element("label", "Create for full quantity, ignoring quantity already on order")

	await f.hover_element("label", "Use Multi-Level BOM")

	await f.hover_element("label", "Only Obtain Raw Materials")

	await f.speak(`Set value in these field as per your preference.`)

	await f.hover_element("label", "Create Material Requests")

	await f.speak(`
			Click here to create Material Request for the shortage raw materials.
		`)

	await f.click_link("button", "Create Material Requests")

	await f.speak(`If Material Requests are created, then their I Ds will be visible in this notification.`)

	await f.close_modal()

	await f.speak(`
			Let's check the draft of Production Order which was created from Production Planning Tool.
		`)
		
	await f.search("production ord", "Production Order List")
		
	await f.click_list_item("Samsung On5 Pro (Gold)")
		
	await f.pause(1)
	
	await f.click_print_icon()
	
	await f.scroll(100)
	
	await f.speak(`After updating values in the mandatory fields, you can submit this Production Order.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});