import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Product Bundle"

fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(true)

    await f.close_modal()
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorials.

        Product Bundle can be seen as something like a "Bill-of-Material" on the 
        Sales side.
        `)

    await f.add_slide({
		    title: "Product Bundle",
			})

    await f.speak(`It's a master where you can list stock items which 
    are bundled together and sold as a single set.`)

    await f.remove_slide()
    
    await f.speak(`Let's create a new product bundle.`)

    await f.search("product bund", "Product Bundle List")

    await f.click_primary_button("New")

    await f.hover_element("label", "Parent Item")

    await f.speak(`Select a bundled item here. This is a non-stock item which
            is used only for bundling. For example, if you are selling 
            dinner set as a bundled item, then select Dinner Set as an item here.`)

    // show a picture here

    await f.fill_field("Parent Item", "Dinner Set", "dinner set")

    await f.scroll_to_section("Items")

    await f.speak(`In this section, select the stock items which are actually
             delivered to the customer.`)

    await f.open_row("items", 1)

    await f.fill_field("item_code", "Dinner Table", "dinner table")

    await f.fill_field("Qty", "1")

    await f.insert_below()

    await f.pause(1)

    await f.fill_field("item_code", "Dinner Set Chair", "dinner set chair")

    await f.fill_field("Qty", "6")

    await f.close_row()

    await f.speak(`Let's Save this Product Bundle.`)

    await f.click_primary_button("Save")

    await f.speak(`Let's check how a Product Bundle in used in the sales transactions.`)

    await f.search("delivery note", "Delivery Note List")

    await f.click_primary_button("New")

    await f.fill_field("Customer", "Aenean Eget Metus Inc.", "aenean eget")

    await f.scroll_to_section("Currency and Price List")

    await f.open_row("items", 1)

    await f.hover_element("label", "Item Code")

    await f.speak(`In the main Item table, select a Produt Bundle Item.`)

    await f.fill_field("Item Code", "Dinner Set")

    await f.fill_field("Quantity", "1")

    await f.close_row()

    await f.speak(`Let's save this Delivery Note.`)

    await f.click_primary_button("Save")

    await f. scroll_to_section("Packing List")

    await f.speak(`In this section, items are fetched from Product Bundle master.
            On submission of this delivery note, stock of these items will be deducated
            a selected warehouse.`)

    await f.open_row("packed_items", 1)

    await f.hover_element("label", "Serial No")
    await f.hover_element("label", "Batch No")

    await f.speak(`If needed, enter values in these fields for the bundled item.`)

    await f.close_row()

    await f.speak(`Now, let's submit this Delivery Note.`)

    await f.click_primary_button("Submit")

    await f.click_primary_button("Yes")

    await f.click_toolbar_button("View")
		
	await f.click_dropdown_item("Stock Ledger")
		
    await f.speak(`In the stock ledger, you can observe the Stock Ledger
            entry is made only for the bundled item, and not for the main item.
		`)
    
    await f.speak(`
    Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
    Thanks for watching.


    `)
});