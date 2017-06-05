import { Selector } from 'testcafe';
import { f } from './common';


fixture ("Sales Routine")
    .page ("http://erpnext.dev:8000/login");


test('Not really a test', async t => {

    // Init
	await f.login('Administrator', 'asdf1234')
	await f.wait(300).setTestSpeed(0.75)
    
	// Item
	await f.click_icon('Item')
	await f.click_primary_button()
	await f.wait_for_modal()
	await f.fill_field("item_code", "HCS")
	await f.fill_field("item_name", "Hair Cut with Shampoo")	
	await f.fill_field("item_group", "Services")
	await f.uncheck("is_stock_item")	
	await f.fill_field("standard_rate", "149")
	await f.edit_in_full()
	await f.fill_field("stock_uom", "Unit", "U")
	await f.click_section("Description")
	await f.fill_field("description", "Hair Cut with Shampoo (Choose your hairstyle)")
	await f.click_section("Purchase Details")
	await f.uncheck("is_purchase_item")
	await f.click_primary_button()
});
