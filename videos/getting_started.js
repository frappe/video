import { Selector } from 'testcafe';
import f from '../lib';


fixture("Getting Started")
    .page ("http://gadgets.erpnext.com/login");


test('Getting started with ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`
		Hi.

		Welcome to E R P Next video tutorial.

		In this video, we will learn how to get started using E R P Next.
		
	 	Every business needs to manage operations related to sales, purchases, stocks, accounting and lot more. 
	 	You can use E R P Next to track all business operations in one place.
		
     	On the login, you will see a dashboard. Icons on the dashboard will be visible based on the permissions assigned to you.
		`)
		
	await f.click_user_button()

	await f.hover_element('a', "Set Desktop Icon")

	await f.speak(`
			From here, you can customize the visibility of icons.
			`)

	await f.click_user_button()

	await f.hover_element('.dropdown-navbar-new-comments')

	await f.speak (`
		Track notifications and work assigned to you from here.
		`)

	await f.click_notification()

	await f.pause(1)

	await f.click_notification()

	await f.click_icon('Explore')

	await f.hover_element('a', "Accounts", 0.25)

	await f.speak(`
		This is the list of all the modules.
	`)

	await f.hover_element('a', "Maintenance", 0.25)

	await f.hover_element('a', "Selling", 0.25)

	await f.speak(`
			Click on a module to check more features in it.
		`)

	await f.click_module("Accounts")

	await f.speak(`
		In the Accounts module, you will find documents like Sales Invoice, Purchase Invoice, financial reports etc.
	 	Let's create a new Sales Invoice.
	`)

	await f.click_link("#List/Sales Invoice")

	await f.speak(`
		To create a new sales invoice, click on the New button.
		`)

	await f.click_primary_button('New')

	await f.speak(`
	 Select a Customer.
		`)

	await f.fill_field("customer", "InMobi Solutions", "inmobi")

	await f.speak(`
		Select an item and enter quantity.
		`)
		
	await f.open_row('items', 1)
	await f.fill_field('item_code', 'One Plus 3')
	await f.fill_field('qty', '2')

	await f.close_row()

	await f.speak(`
		Apply taxes.
		`)

	await f.fill_field("taxes_and_charges", "In State")

	await f.speak(`
		We can now save this Sales Invoice.
		`)

	await f.click_primary_button('Save')

	await f.speak(`
		Let’s check the print preview of this Invoice.
		`)

	await f.click_print_icon()
		
	await f.scroll(100)
	
	await f.speak (`
		Looks great! Lets submit this invoice.
		`)

	await f.click_primary_button('Edit')
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.close_modal()
		
	await f.goto_desk()
		
	await f.hover_element("#navbar-search")
		
	await f.speak
		  (`
		  You can use search-bar to quickly open new document. You just need to type new, and then document name. Let's open new Quotation form for an example.'
			  `)
		
	await f.search('new quot', 'New Quotation')
		
	await f.hover_element("#navbar-search")

	await f.speak(`
		From the search bar, you can also access list of records, tree masters, reports et cetera.
		`)
		
	await f.click_help_button()
		
	await f.speak(`
		For any assistance, search E R P Next manual and help videos from here.
				`)
		
	await f.click_help_button()
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and trial account, check e r p next dot com. 
			Thanks for watching.
			`)
});
