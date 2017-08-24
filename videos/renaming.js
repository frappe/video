import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Renaming"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(true)
	
	await f.speak(`

		Close password notification.

		Hi.

		Welcome to E R P Next tutorials.
		
		On saving any document in E R P Next, a unique I D is assigned for it.`)
		
	await f.add_slide({
		title: "Renaming and Merging Documents"
	})
		
	await f.speak(`
		
		For some of the document types, like Customer, Supplier, Item, Accounts,  you can further this unique I D 
		by using Renaming feature.
		
		Also, you can use renaming feature to merge two documents.`)
	
	await f.remove_slide()
		
	await f.speak(`
		
		Let's check how to rename a customer.
		`)

	await f.search ("customer", "Customer List")

	await f.speak(`Open a document to be renamed.`)

	await f.click_list_item("Mansa Foods")

	await f.pause(1)

	await f.speak(`Click on Menu.`)

	await f.click_form_menu()

	await f.click_dropdown_item("Rename")

	await f.speak(`Enter new name for this Customer.`)

	await f.fill_field("New Name", "Mansa Foods Pvt. Ltd.")

	await f.fill_field("Merge with existing")

	await f.speak(`Check this field if you already have a customer with name, and wants to merge this customer with it.`)

	await f.fill_field("Merge with existing")

	await f.click_primary_button("Rename")

	await f.hover_element("h1", "Mansa Foods Pvt. Ltd.")

	await f.speak(`Customer I D has been renamed.
		
			On the same lines, you can also rename other documents for which renaming is permitted.`)
		
	await f.add_slide({
			title: "Renaming in Tree Masters"
		})
	
	await f.speak(`
		Now, let's check how to rename a masters which are maintained in a tree structure.
		`)
		
	await f.remove_slide()

	await f.search("chart of ac", "Open Chart of Accounts")

	await f.speak(`Expand the tree, and click on the Account to be renamed.`)
		
	await f.click_tree_node('Application of Funds (Assets) - GTPL')

	await f.click_tree_node('Current Assets - GTPL')
		
	await f.click_tree_node('Bank Accounts - GTPL')
		
	await f.click_tree_node('Standard Bank - GTPL')

	await f.speak(`Let's assume that we need to rename this account. Click on Rename.`)
		
	await f.click_tree_node_option("Rename")

	await f.speak(`Enter new name for this account.`)

	await f.fill_field("New Name", "Corporation Bank - GTPL")

	await f.speak(`Rename`)

	await f.click_primary_button("Rename")

	await f.pause(1)

	var link = await f.select_element('a', 'Corporation Bank - GTPL')

 	await f.click(link)

	await f.speak(`This is an renamed account.
		
			Once a document is renamed, its value is also updated in other linked transactions. For example,
			Once a customer is renamed, new customer name will be updated in the existing Quotation and Orders 
			for that Customer.`)
				
	await f.add_slide({
			title: "Bulk Renaming using Rename Tool"
		})
			
	await f.speak(`
			If you have many documents to be renamed at the same time, you can use Rename Tool for it.
	`)
		
	await f.remove_slide()
		
	await f.search("rename tool", "Rename Tool")
		
	await f.speak(`Using this tool, you can rename document by importing values from the spreadsheet file.
			In the spreadsheet file, values should be entered in two columns only.
			In the first column, enter existing I D of a customer.
			In the second column, enter new I D required after renaming.
			Save file in the C S V format.
		`)
		
	await f.hover_element("label", "Select DocType")
		
	await f.speak(`Select a document type. Lets assume that we need to rename customers.`)
		
	await f.fill_field("select_doctype", "Customer")
		
	await f.speak(`Attach a c s v file which contains data of old and new customer names.`)
		
	await f.click_element("button", "Attach")
		
	await f.pause(1)

	await f.upload_file('./images/renaming_customers.csv')
		
	await f.click_primary_button("Upload")
	
	await f.pause(1)
		
	await f.speak(`Click on Rename.`)
		
	await f.click_primary_button("Rename")
		
	await f.speak(`Customer I Ds has been renamed. Using this tool, you can also rename other document in bulk.
		`)
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});