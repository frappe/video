import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Batched Inventory"


fixture(video_title)
    .page ("http://site.local:8000/desk");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(false)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this tutorial, we will learn how to track serialized inventory in E R P Next.
			`)

	await f.add_slide({
			title: "Serialized Inventory",
			})

	await f.speak(`If you assign a unique value on the each unit of the item, then you should set that item as a
			serialized item.`)

	await f.remove_slide()
		
	await f.speak(`Let's check how to create a new serialized item.`)
		
	await f.search("new item", "New Item")
		
	await f.speak(`Enter basic details for the new item.`)
		
	await f.pause(2)
	
	await f.fill_field("Item Code", "iPhone X")
		
	await f.fill_field("Item Name", "iPhone X")
		
	await f.hover_element("button", "Edit in full page for more options like assets, serial nos, batches etc.")
		
	await f.speak(`Click here to open full form view to add new item.`)
		
	await f.click_element("button","Edit in full page for more options like assets, serial nos, batches etc.")

	await f.scroll_to_section("Serial Nos and Batches")
		
	await f.click_section("Serial Nos and Batches")
		
	await f.hover_element("label", "Has Serial No")
	
	await f.speak(`Check this field to set this item as a serialized Item.`)
		
	await f.fill_field("Has Serial No")
		
	await f.hover_element("label","Serial Number Series")
		
	await f.speak(`If you want to generate serial numbers based on the series, then mention the series in this field.
			However, of this item is a bought item, which comes with the unique serial number, then you 
			could leave this field blank.
		`)
	
	await f.scroll(0)
		
	await f.speak(`Let's save the item.`)
		
	await f.click_primary_button("Save")
		
	await f.goto_desk()
		
	await f.add_slide({
			title: "Opening Balance for Serialized Item",
			})

	await f.speak(`For the serialized Item, opening balance is updated via Stock Entry. Let's create one.`)

	await f.remove_slide()
			
	await f.search("new stock ent", "New Stock Entry")
			
	await f.speak(`Select Material Receipt as a purpose.`)
			
	await f.fill_field("Purpose", "Material Receipt")
			
	await f.hover_element("label","Posting Date")
			
	await f.hover_element("label","Posting Time")
			
	await f.hover_element("label","Edit Posting Date and Time")
			
	await f.speak(`Update posting date and time as needed.`)
			
	await f.hover_element("label","Default Target Warehouse")
			
	await f.speak(`Warehouse in which opening balance is to be updated will be selected as a target warehouse.`)
			
	await f.fill_field("Default Target Warehouse", "sto", "Stores - GTPL")
			
	await f.speak(`Select a serialized item in the item master.`)
			
	await f.open_row("items", 1)
			
	await f.fill_field("Item Code", "iPhone X", "iphone")
			
	await f.fill_field("Qty", "2")
			
	await f.hover_element("label", "Serial No")
			
	await f.speak(`if you have entered two quantities, then two serial numbers will be entered here.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});