import { Selector } from 'testcafe';
import f from '../lib';


fixture("Printing and Branding")
    .page ("http://gadgets.erpnext.com/login");


test('Getting started with ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`
		In this tutorial, we will learn how to branding and printing in E R P next.
		
		Firstly, lets check how to print a document.
		`)
		
	await f.search('quota', 'Quotation List')
		
	await f.speak(`
			Open the document to be printed.
			`)
		
	await f.click_list_item("QTN-00018")
		
 	// var link = await f.select_element('a', 'QTN-00018')
		
	await f.speak(`
			To print, click on the Print icon.
			`)
		
	await f.click_print_icon()
		
	await f.scroll(120)
		
	await f.speak(`
			This is the preview of your Quotation.
			`)
		
	await f.hover_element("btn-print-print")
		
	await f.speak(`
				Click here to print this document.
			`)
	await f.hover_element("btn-download-pdf")
		
	await f.speak(`
			To download this document in P D F, click here.
			`)
		
	await f.goto_desk()
		
	await f.speak(`
			Now, let's check how to setup Letter Head.
				`)
		
	await f.search('lette','Letter Head List')
		
	await f.hover_element("a",".list-item",1)
		
	await f.speak(`
				You can add multiple Letter Heads based on Companies or branches. Let's add a new letter head.
					`)
		
	await f.click_primary_button('New')
		
	await f.speak(`
			Enter Letter Head name.
						`)
		
	await f.fill_field("Letter Head Name","Gadget Solutions")
		
	await f.click_primary_button("Save")
		
	await f.speak(`
			Enter Header of your letter Head in the content. You can also browser and add your header image in this section.
		`)
		
	// We need to insert image in the letter head field here await f.set_sidebar_image('./images/Hermione Granger.png')
		
	await f.speak(`
			In the print format of document, content of this field will be set as header. You can also add footer in the field below.
			`)
		
	await f.fill_field("Footer","This is a computer generated quotation and does not requires any signature.")
		
	await f.speak(`
			Lets save this Letter head.
			`)
		
	await f.click_primary_button("Save")
		
	// await f.fill_field("default", "1")
		
	await f.speak(`
		Check Is default to have this letter head selected automatically in the transactions.
		`)
	
	// await f.hover_element("Disabled")
		
	await f.speak(`
			Click this field to disable this letter head. 
			`)
		
	await f.goto_desk()
		
	await f.speak(`
			E R P Next has default print format available for each transaction. You can also create custom print formats as per your
			requirement using Print Format Builder. Let's check how to create a Print Format.'
			`)
		
	await f.search('sales or','Sales Order List')
		
	await f.click_list_item("SO-00020")
	
	await f.click_print_icon()
		
	await f.scroll(120)
		
	await f.scroll(0)
		
	// await f.hover_element("print-preview-select")
	
	await f.speak(`
			To create new Print format as per your requirement, click on Customize.
				`)
	// await f.click("btn-print-edit", Customize)
	
	await f.speak(`
			In this view, you can drag and drop the required field from the left bar.
			`)
		
	await f.speak(`
			Edit header section to customize Print Heading. Also, you can define fields from which value will be shown in the header section.
			`)		
	
});
	
		
	
		
	
	
	
	