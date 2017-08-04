import { Selector } from 'testcafe';
import f from '../lib';


fixture("Tree master")
    .page ("http://gadgets.erpnext.com/login");

test('Tree master in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)

 	//     await f.speak
 	//       	  (`
 	// 		Hi. Welcome to E R P Next video tutorial. In this video, we will learn how to manage masters which are maintained
 	// 		  in the tree structure. Few of the important tree structured masters are Chart of Accounts, Warehouse, Item Group etc.
 	// 		  `)
 	//
 	// //chart of accounts
 	//
 	// await f.search("chart of ac ", "Open Chart of Accounts")
 	//
 	// await f.speak
 	//       	  (`
 	// 		In the Chart of Accounts master, Account is the most parent account.
 	// 		  `)
 	//
 	// var link = await f.select_element('.tree-label', 'Accounts')
 	//
 	// await f.click(link)
 	//
 	// await f.speak
 	//       (`This parent has following sub-groups under it.`)
 	//
 	// var link = await f.select_element('a', 'Application of Funds (Assets) - GTPL')
 	//
 	// await f.click(link)
 	//
 	// var link = await f.select_element('a', 'Source of Funds (Liabilities) - GTPL')
 	//
 	// await f.click(link)
 	//
 	// var link = await f.select_element('a', 'Income - GTPL')
 	//
 	// await f.click(link)
 	//
 	// var link = await f.select_element('a', 'Expenses - GTPL')
 	//
 	// await f.click(link)
 	//
 	// await f.speak
 	//       (`Under each group, you have multiple sub-groups and child accounts.`)
 	//
 	// var link = await f.select_element('a', 'Current Assets - GTPL')
 	//
 	// await f.click(link)
 	//
 	// var link = await f.select_element('a', 'Bank Accounts - GTPL')
 	//
 	// await f.click(link)
 	//
 	// await f.speak
 	//       (`Following are the child Accounts which are selected in the transactions.`)
 	//
 	// await f.hover_element('a', 'Bank of America - GTPL', 1)
 	// await f.hover_element('a', 'HDFC Bank - GTPL', 1)
 	// await f.hover_element('a', 'Standard Bank - GTPL', 1)
 	//
 	// await f.speak
 	//       (`To add new child account in this parent, click on the group, and Add Child.`)
 	//
 	// var link = await f.select_element('a', 'Bank Accounts - GTPL')
 	//
 	// await f.click(link)
 	//
 	// var link = await f.select_element('.btn', 'Add Child')
 	//
 	// await f.click(link)
 	//
 	// await f.speak
 	//       (`Enter name of new account.`)
 	//
 	// await f.fill_field("New Account Name", "HSBC Bank")
 	//
 	// await f.hover_element("label","Is Group")
 	//
 	// await f.speak
 	//       (`Check Is Group if you want to add this Account as a group.`)
 	//
 	// await f.fill_field("Account Type", "Bank")
 	//
 	// await f.click_primary_button()
 	//
 	// var link = await f.select_element('a', 'HSBC Bank - GTPL')
 	//
 	// await f.click(link)
 	//
 	// await f.speak
 	//       (`This is how you can create child account in the existing groups. Lets also check how to manage Warehouse master.`)
 
 	await f.search("wareh", "Warehouse Tree")
		
	await f.pause(1)

 	var link = await f.select_element('a', 'All Warehouses - GTPL')

 	await f.click(link)

 	var link = await f.select_element('a', 'Retail Stores - GTPL')

 	await f.click(link)

 	await f.speak
 	      (`These are all the existing warehouses of the company. Let's add a new warehouses.`)

 	var link = await f.select_element('a', 'All Warehouses - GTPL')

 	await f.click(link)

 	var link = await f.select_element('.btn', 'Add Child')

 	await f.click(link)

 	await f.speak(`
 		  	Enter Warehouse name.
 		  `)
		
	await f.fill_field("New Warehouse Name", "Shop Floor Warehouse")
		
	await f.speak(`
			 Shop Floor is a parent warehouse, hence Is Group will be checked for it.
			`)
		
	await f.fill_field("Is Group")
		
	await f.click_primary_button()
		
 	var link = await f.select_element('a', 'Shop Floor Warehouse - GTPL')
			  
	await f.click(link)
		
	await f.speak(`
			let's add another group warehouse in the Shop Floor warehouse.
			`)
		
	var link = await f.select_element('.btn', 'Add Child')
			  
	await f.click(link)
		
	await f.fill_field("New Warehouse Name", "Rack AS1")
		
	await f.fill_field("Is Group")
		
	await f.click_primary_button()
		
 	var link = await f.select_element('a', 'Rack AS1 - GTPL')
			  
	await f.click(link)
	
	await f.speak(`
			Now, we will add a child Warehouse in the Rack Warehouse.
			`)
		
	var link = await f.select_element('.btn', 'Add Child')
			  
	await f.click(link)
		
	await f.fill_field("New Warehouse Name", "Bin AS-1")
		
	await f.speak(`
			Since this a child warehouse, Is Group will not be checked.
			`)
		
	await f.click_primary_button()
	
 	var link = await f.select_element('a', 'Bin AS-1 - GTPL')
			  
	await f.click(link)
		
	await f.speak(`
			On the same lines, you can also setup other masters in E R P Next which are maintained in the tree structure, namely,
			chart of Cost Centers.
			`)
		
	await f.search("cost ce","Cost Center Tree")
	
	await f.pause(1)
		
	await f.speak(`Item Group`)
		
	await f.search("item gr", "Item Group Tree")
		
	await f.pause(1)
		
	await f.speak(`Customer Group`)
		
	await f.search("customer gr", "Customer Group Tree")
	
	await f.speak(`
		  Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		  Thanks for watching.
		  `)

});