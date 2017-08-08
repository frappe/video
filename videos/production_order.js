import { Selector } from 'testcafe';
import f from '../lib';


fixture("Bill of Materials")
    .page ("http://gadgets.erpnext.com/login");

test('Bill of Materials in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to create a Production Order and manage production cycle in E R P Next.

		You can create new Production Order from Production Planning Tool, as well as it can be created manually from 
		manufacturing module.	
		`)

	await f.search ("new production or", "New Production Order")

	await f.speak(`
			Select an item to manufacture.
			`)
		
	await f.fill_field("item","samsun", "Samsung On5 Pro (Gold)")
	
	await f.hover_element("label", "BOM No")

	await f.speak(`
			On selection of item, the default bill of material for that item will be fetched.
			`)
		
	await f.hover_element("label","Qty To Manufacture")


		
	await f.speak(`Once B O M is created, you
				can use it in various tools and transactions like Production Planning Tool, Production Order, Material Request etc.
				`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});