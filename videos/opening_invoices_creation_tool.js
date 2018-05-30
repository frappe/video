import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Invoice opening creation tool"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(true)
    
    await f.speak(`Hi.

			Welcome to E R P Next tutorials.

            An important on-boarding step for an E R P software includes updating opening 
            sales and purchase invoices. In E R P Next, it is made simple with`)

	await f.add_slide({
			title: "Opening Invoice Creation Tool",
			})

    await f.speak(`Opening Invoice Creation Tool. Using this tool, you can quickly create
            outstanding sales and purchase invoices.`)

    await f.remove_slide()

    await f.search("opening invoice creation","Opening Invoice Creation Tool")

    await f.pause(2)

    await f.click_element('[data-fieldname="invoice_type"]')

	await f.speak(`
			Select an invoice type.
		    `)
		
	await f.click('[data-fieldname="invoice_type"]')
		
    //await f.fill_field("Invoice Type", "Sales")
    
    await f.add_row("invoices")

    await f.speak(`Add details of each invoice in a separate row.`)

    await f.open_row("invoices", 1)
    
    await f.fill_field("Party", "Ultrices Consulting", "ultrices")

    await f.hover_element("label", "Temporary Opening Account")

    await f.speak(`This is an adjustment account. On submission of an invoice, 
            posting will be done in this account against a receivable or a payable
            account.`)

    await f.speak(`Select invoice posting date.`)

    await f.fill_field("Posting Date", "15-12-2017")

    await f.speak(`Select invoice due date.`)

    await f.fill_field("Due Date", "15-01-2018")

    await f.hover_element("label", "Item Name")

    await f.speak(`Enter Item Name for the reference.`)

    await f.fill_field("Quantity", "2")

    await f.fill_field("Outstanding Amount", "20000")

    await f.speak(`Same way, you can go on adding new row for each 
            outstanding invoice.`)

    await f.insert_below("invoices")

    await f.fill_field("Party", "Sed Hendrerit Foundation", "sed hendrerit")

    await f.fill_field("Temporary Opening Account", "Temporary Opening - GTPL", "temporary opening")

    await f.fill_field("Posting Date", "20-12-2017")

    await f.fill_field("Due Date", "25-01-2018")

    await f.fill_field("Outstanding Amount", "1500")

    await f.close_row()

    //await f.hover_element("a.grid-download.btn.btn-xs.btn-default", "Download")

    await f.speak(`To bulk upload invoices in this table, 
            you can download spreadsheet file from here.`)

    //await f.hover_element("a.grid-download.btn.btn-xs.btn-default", "Upload")

    await f.speak(`And then upload the file from here.`)

    await f.speak(`Click on make invoices button.`)

    await f.click_primary_button("Make Invoices")

    await f.close_modal()
    
    await f.speak(`On submission, outstanding invoices will be created.`)

    await f.search("sales invoice", "Sales Invoice List")

    await f.click_list_item("Ultrices Consulting")

    await f.scroll_to_section("Accounting Details")

    await f.click_section("Accounting Details")

    await f.hover_element("label", "Is Opening Entry")

    await f.speak(`For an opening sales invoice, this field is checked by default.`)

    await f.scroll(0)

    await f.click_toolbar_button("Make")

    await f.speak(`You will be able to create payment entry against this invoice.`)

    await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});