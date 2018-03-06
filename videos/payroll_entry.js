import { Selector } from 'testcafe';
import f from '../lib';


fixture("Material Request to Purchase Order")
    .page ("http://gadgets.erpnext.com/login");

test('Material Request to Purchase Order', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`
		
		Close password notification.
		
		Hi.

		Welcome to E R P Next tutorial.

		In this video, we will learn how to initiate procurement process in E R P Next. For requesting purchase of material, create 
		a Material Request.`)

	await f.search ("new material re", "New Material Request")
		
	await f.click('[data-fieldname="material_request_type"]')

	await f.speak(`
			Material Request can be created for multiple purposes like Purchase, Transfer, Issue and Production. 
		`)
		
	await f.speak(`
		We will create this Material Request for Purchase.
		`)
		
	await f.click('[data-fieldname="material_request_type"]')
		
	await f.fill_field("Type", "Purchase")
		
	await f.speak(`
		. In material Request, you can pull items from different sources.
			`)
	await f.hover_element("button","Get items from")

	await f.hover_element("button","Get Items from BOM")
		
	await f.speak(`
			Let's pull items from Sales Order.
		`) 
		
	await f.click_toolbar_button('Get items from')

	await f.click_dropdown_item('Sales Order')

	await f.pause(1)
		
	await f.speak(`
		we can filter based on Sales Order I D and other filters available.
		`)

	await f.fill_field("search_term","47")

	await f.pause(1)

	await f.click_primary_button("Get Items")

	await f.speak(`
			Item details are fetched from Material Request. Update a date by which this item is required.
			`)

	await f.open_row("items",1)
		
	await f.fill_field("schedule_date","28-07-2017")
	
	await f.close_row()
		
	await f.open_row("items",2)

	await f.fill_field("schedule_date","28-07-2017")

	await f.close_row()
		
	await f.click_section("More Information")
		
	await f.speak(`
			Enter more details about this Material Request here.
		`)

	await f.fill_field("Requested For", "Mumbai Warehouse")

	await f.speak(`
			Let's save and submit this Material Request.
		`)
		
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.click_toolbar_button("Make")
		
	await f.speak(`
			Once a Material Request is submitted, you can make these transactions against it. Once a Purchase Order is created 
			for Material Request, it's status will be update as Ordered.
		`)
		
	await f.speak(`
			You can automate the creation of Material Request based on the re-order level of an item. For this, you should update re-order level
		and re-order quantity in the master. Also, enable feature of auto creation of Material Request in the Stock Settings.
		`)
	
	await f.search("stock sett","Stock Settings")
	
		
	await f.hover_element("label","Raise Material Request when stock reaches re-order level")
		
	await f.speak(`
			Check this field to automate creation of Material Request.
				`)
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});