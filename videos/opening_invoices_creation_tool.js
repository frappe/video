import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Invoice opening creation tool"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Victoria")

    await f.toggle_speak(false)
	
	await f.speak(`Hi.

			Welcome to E R P Next tutorial.

            The onboarding on E R P software includes updating opening sales and purchase
            invioce. In E R P Next, it is made simple with`)

	await f.add_slide({
			title: "Opening Invoice Creation Tool",
			})

    await f.speak(`Opening Invoice Creation Tool. Using this tool, you can quicly add outstansing
            sales and purchase invoices.`)

    await f.remove_slide()

    await f.search("Opening Invoice Creation Tool", "opening invoice creation",)

    await f.click('[data-fieldname="invoice_type"]')

	await f.speak(`
			Select invoice type.
		    `)
		
	await f.click('[data-fieldname="invoice_type"]')
		
    await f.fill_field("Invoice Type", "Sales")
    
    await f.add_row("Opening Invoice Creation Tool Item")

    await f.open_row("Opening Invoice Creation Tool Item", 1)
    
    await f.fill_field("Party", "CUST-00007", "nova equip")

    await f.hover_element("label", "Temporary Opening Account")

    await f.speak(`This is a account which will be used against a receivable account for updating
            parties balance.`)

    await speak(`Select invoice posting date.`)

    await f.fill_field("Posting Date", "01-02-2018")

    await speak(`Select invoice due date.`)

    await f.fill_field("Posting Date", "01-03-2018")

    await f.hover_element("label", "Item Name")

    await f.speak(`Enter Item Name for which row will be updated in the Sales Invoice.`)

    await f.fill_field("Quantity", "3")

    await f.fill_field("Outstanding Amount", "30000")

    await f.speak(`Same way, you can go on adding new row for each Customer's outstanding invoice.`)

    await f.close_row()

    await f.hover_element("button", "Download")

    await f.speak(`To bulk upload invoices, you can download template from here.`)

    await f.hover_element("button", "Upload")

    await f.speak(`And then upload template with the excel file from here.`)

    await f.speak(`Click on make invoices button.`)

    await f.click_primary_button("Make Invoices")

    await f.close_modal()
    
    await f.speak(`On submission, outstanding invoices will be created. You will be able to
            create payment entry agains it.`)

    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});