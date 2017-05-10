import { Selector } from 'testcafe';
import { f } from './common';


fixture `Getting Started`
    .page `http://erpnext.dev:8000/login`;


test('Not really a test', async t => {

	await f.login()
	// await f.hide_status_bar()
	// await f.setTestSpeed(0.75)
	// await f.useVoice("slt")
	await f.wait(1500)

	// await f.speak
	// `On the log in, you will see a dash board on your E R P Next account.
	//  Icons on the dash board will be visible based on the permissions assigned to you. 
	//  To access modules in E R P Next, click on the Explore icon.`

	await f.click_icon('Explore')
	await f.highlight_element('ul.module-sidebar-nav', 3000)

	// await f.speak
	// `This is the list of all the modules.
	//  Click on a module to check features in it.
    //  Lets click on the Accounts module.`

	await f.click_module("Accounts")
	await f.click_link("#List/Sales Invoice")
	await f.click_primary_button("New")
	await f.fill_field("customer", "Link", "Google Inc")

	var items = [{
		code: "Legal Services",
		qty: "70",
		rate: "1500"
	}]

	await f.fill_items_table(items)
	
	await f.fill_field("taxes_and_charges", "Link", "India VAT 5%")

	await f.click_primary_button("Save")

	await f.wait(2000)

	await f.click("i.fa-print")

	await f.wait(2000)

	await f.click_primary_button("Edit")

	await f.wait(2000)

	await f.click_primary_button("Submit")

	await f.wait(2000).debug()

	await f.click( Selector("button.btn-primary").withText("Yes") )
	await f.wait(2000)
});