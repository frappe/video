import { Selector } from 'testcafe';
import f from '../lib';


fixture("Production Order")
    .page ("http://gadgets.erpnext.com/login");

test('Production Order in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to manage production cycle in E R P Next.

		You can create a new Production Order from the manufacturing module.
		`)

	await f.click_icon("Manufacturing")

	await f.pause(1)

	await f.click_module_item("Production Order")

	await f.hover_element("button", "New")
		
	await f.speak(`New production order can also be created from Production Planning tool.`)

	await f.speak(`
			If you initiate Production Order on receipt of an order from the Customer, you can create Production Order from a 
			Sales Order.
			`)

	await f.search("sales or", "Sales Order List")

	await f.pause(1)

	await f.click_list_item("Fermentum Metus Aenean Inc")
		
	await f.scroll_to_section("Currency and Price List")	
		
	await f.speak(`This is a sales order made for the manufacturing item.`)
	
	await f.scroll(0)
	
	await f.speak(`To create a production order, click on the Make button.`)
		
	await f.click_toolbar_button("Make")

	await f.click_dropdown_item("Production Order")

	await f.pause(1)

	await f.click_element(".modal .btn.btn-primary.btn-sm", "Make")

	await f.speak(`With this, a draft of Production Order has been generated.`)

	await f.pause(1)

	await f.click_link("#Form/Production Order/PRO-00032")

	await f.hover_element("label", "Qty To Manufacture")

	await f.speak(`
			Item's Sales Order quantity is updated as Quantity to Manufacture. Other item details like name and
			Bill of Material I D is also fetched into Production Order.
		`)

	await f.hover_element("label" , "Use Multi-Level BOM")

	await f.speak(`
			If you enable multi level B O M, then in this production order, instead of sub-assembly item itself, it's raw-materials 
			items will be consumed in the manufacturing process.
		`)

	await f.scroll_to_section("Required Items")

	await f.pause(1)

	await f.scroll(0)

	await f.hover_element("label","Use Multi-Level BOM")

	await f.speak(`
			If I uncheck this field, then the sub-assembly item itself will be consumed in the manufacturing process.
		`)

	await f.fill_field("use_multi_level_bom")

	await f.scroll_to_section("Required Items")

	await f.speak(`
		Now, we only have sub-assembly item, and not it's raw-materials. This also means, you will
		have to create a separate Production Order for the sub-assembly item.
		`)

	await f.scroll_to_section("Warehouses")

	await f.speak(`
			Work in progress warehouse will be where manufacturing process will be carried out.
		`)

	await f.fill_field("wip_warehouse", "Work In Progress - GTPL", "work in")

	await f.fill_field("fg_warehouse", "Finished Goods - GTPL", "finished")

	await f.speak(`
			After completion of production, finished item will be stored in this warehouse.
		`)

	await f.scroll_to_section("Operations")

	await f.open_row("operations", 1)

	await f.hover_element("label","Workstation")

	await f.speak(`
		Workstation will be fetched from B O M. If needed, you can select another Workstation here.
		`)

	await f.close_row()

	await f.speak(`
			Let's save and submit this Production Order.
		`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	await f.speak(`Timesheet has been auto-created in which actual operations hours will be captured.`)

	await f.close_modal("Close")

	await f.speak(`
			Production process starts with transfer of raw-materials from the stores to work in progress warehouse.
		`)

	await f.click_toolbar_button("Start")

	await f.speak(`Enter quantity of finished item for which raw-materials are being issued.`)

	await f.click_primary_button("Make")

	await f.scroll_to_section("Items")

	await f.speak(`These raw-material items has been fetched from Production Order. Item will be transfered from the source warehouse
			to the target warehouse.
		`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	await f.go_back("Let's go back to the Production Order")

	await f.hover_element(".progress")

	await f.hover_element("label","Status")

	await f.speak(`
			Based on the transfer entry, Production Order status as been updated as In Process.

			Once Materials are being issued to work in progress warehouse, various operations will be performed on it.
		`)

	await f.hover_element(".badge-link.small", "Timesheet")
		
	await f.speak(`
			In a timesheet, we will track actual time spent for completing each operation.
		`)
	
	await f.click_element(".badge-link.small", "Timesheet")

	await f.pause(1)

	await f.click_list_item("TS-00023")

	await f.open_row("time_logs",1)

	await f.hover_element("label", "Operation")

	await f.speak(`
			Update actual time taken for the process of assembling.
		`)

	await f.hover_element("label", "Hrs")

	await f.speak(`
			As per the standard time set in the Bill of Materials, this operation should have been completed in two point five hours.

			Let's assume that it actually took three hours for completion.
		`)

	await f.fill_field("hours", "3")

	await f.close_row()

	await f.speak(`
			Same way, you can update actual time for each operation, and then save and submit this Timesheet.
		`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	await f.speak(`
			After submitting timesheet, we will go to Production order.
		`)

	await f.click_element("a", "PRO-00032")

	await f.pause(1)

	await f.scroll_to_section("Operation Cost")

	await f.hover_element("label", "Actual Operating Cost")

	await f.speak(`
			Based on a timesheet, actual operating cost is updated in the Production Order.
		`)

	await f.scroll(0)

	await f.speak(`
			When finished item is produced, we will create a Manufature Entry from Production Order.
		`)

	await f.click_toolbar_button("Finish")

	await f.speak(`Enter Quantity of finished item for which you are creating manufacturing entry.`)

	await f.click_primary_button("Make")

	await f.scroll_to_section("Items")

	await f.speak(`
			On submission of the manufacture entry, raw-material items will be consumed from work-in-progress warehouse. 
			And stock of finished item will be added in finished Goods warehouse.
			`)

	await f.open_row("items", 6)

	await f.scroll_to_section("Quantity and Rate")

	await f.hover_element("label", "Valuation Rate")

	await f.speak(`
			Based on the valuation of raw-materials items and actual operations cost, valuation rate will be calculated
			for the finished item.
		 `)

	await f.close_row()

	await f.speak(`
			Operations cost will be added in the Additional Cost table. You can also add other expenses, if any incurred.
		 `)

	await f.scroll(0)

	await f.speak(`Lets save and submit the manufacture entry`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	await f.speak(`Now, lets go back to Production Order and check it's status.`)
		
	await f.click_element("a", "PRO-00032")
		
	await f.hover_element(".progress")
		
	await f.hover_element("label", "Status")
		
	await f.speak(`As indicated in the progress bar, the production order status has bee updated as completed.
			Now, you can go back to the Sales Order, and create a Delivery Note to dispatch this item to your customer.
		`)
	
	await f.speak(`
		Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});