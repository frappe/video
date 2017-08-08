import { Selector } from 'testcafe';
import f from '../lib';


fixture("Bill of Materials")
    .page ("http://gadgets.erpnext.com/login");

test('Bill of Materials in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to do production planning in E R P Next.

		`)

	await f.search ("production pl", "Production Planning Tool")
		
	await f.hover_element("label", "Get Items From")

	await f.speak(`
			Select transaction from where items to be manufactured should be pulled. You can either pull manufacturing item from
			Sales Order or Material Request.
			`)
		
	await f.fill_field("get_item_from","Sales Order")
		
	await f.speak(`You can apply filters to fet specific result.`)
		
	await f.fill_field("item","samsun", "Samsung On5 Pro (Gold)")
		
	await f.click_link("button", "Get Sales Orders")
		
	await f.speak(`These are the Sales Order made for items selected in the filter. To pull manufacturing item from Production,
			click on Get Items button.`)
		
	await f.click_link("button", "Get Items")
		
	await f.scroll_to_section("Select Items")
		
	await f.speak(`Now, we have manufacturing item fetched from Sales Order to Production Planning Tool.`)
		
	await f.open_row("items", 1)
		
	await f.speak(`
			For the manufacturing item, default Bill of Material has been updated. Also, sales order quantity has been updated
			as planned quantity. Update Planned Start Date for manufacturing.
		`)
		
	await f.fill_field("planned_start_date", "10-08-2017 14:48:33")
	
	await f.scroll_to_section("Production Orders")
		
	await f.speak(`
			Click on Create Production Orders to create a Production Order for an item selected in the above table.
		`)
		
	await f.click_link("button", "Create Production Orders")
		
	await f.click_link("button", "Close")
		
	await f.speak(`
			Before starting Production Order, we can also do Material Planning to check if we have enough raw-materials required
			for manufacturing items.
				`)
				
	await f.hover_element("label", "Download Materials Required")
				
	await f.speak(`
			Click here to download an excel file which will provide detail of raw material required production, and it's
			it's actual stock available in the Warehouse.
				`)
		
	await f.speak(`
			Raw material items for which stock shortage is found, you can raise Material Request for them right from here.
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
		
	await f.speak(`This is a notification, you will get Material Request I D.`)
		
	await f.click_link("button", "Close")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});