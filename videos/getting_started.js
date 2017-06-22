import { Selector } from 'testcafe';
import { f } from '../lib';


fixture ("Getting Started")
    .page ("http://testcafe-video:8000/login");


test('Not really a test', async t => {
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

	// Init
	await f.login('Administrator', 'qwe')

	await f.hover('.case-wrapper[title="Explore"]')

	await f.click_user_button()

	await f.click_dropdown_item('My Settings')

	await f.click_icon('Customer');

	await f.click_list_item('Sagar');

	await f.set_sidebar_image('./faris.png');

	await f.scroll(500);

	await f.scroll_to_section('Currency and Price List');

	await f.wait(2000);

	await f.speak('This is a section')

	await f.click_section('Currency and Price List');

	await f.scroll(0);

	await f.wait(2000);

	await f.click_toolbar_button('Accounting Ledger');

	await f.goto_desk();

	await f.click_icon('Sales Order');

	await f.click_list_item('Jane Doe')

	await f.click_toolbar_button('Get items from:Quotation');


	// await f.speak
	// (`On the log in, you will see a dash board on your E R P Next account.
	//  Icons on the dash board will be visible based on the permissions assigned to you. 
	//  To access modules in E R P Next, click on the Explore icon.`)

	
	// Explore
	// await f.click_icon('Explore')
	// await f.highlight_element('ul.module-sidebar-nav', 3000)

	// await f.speak
	// `This is the list of all the modules.
	//  Click on a module to check features in it.
    //  Lets click on the Accounts module.`

	// await f.click_module("Accounts")

	// await f.speak
	// `In the Accounts module, you will find documents like Sales Invoice, Purchase Invoice, etc.
	//  Let's check out Sales Invoice.`

	// await f.click_link("#List/Sales Invoice")

	// await f.speak
	// `To create a new sales invoice, click on the New button.`

	// await f.click_primary_button()

	await f.speak
	`Let’s quickly create a new Sales Invoice.
	 Select a Customer.`

	await f.fill_field("customer", "Google Inc")

	await f.speak
	`Select an item and enter it's quantity.`

	var items = [{
		code: "Legal Services",
		qty: "70"
	}]

	await f.fill_items_table(items)

	await f.speak
	`Item’s rate will be automatically fetched from the Item master.
	 Select your tax template.`

	await f.fill_field("taxes_and_charges", "India VAT 5%")

	await f.speak
	`We can now save the Sales Invoice.`

	await f.click_primary_button()

	await f.speak
	`Let’s check the print preview of this Invoice.`

	await f.click_print_icon()
	
	await f.speak
	`Looks great! Lets submit this invoice.`

	await f.click_primary_button()
	await f.click_primary_button()
	await f.click_primary_button()
	await f.wait(1000)
	await f.close_modal()
	
});
