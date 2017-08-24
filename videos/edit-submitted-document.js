import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Cancel and Amend"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("alex")

    await f.toggle_speak(true)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		E R P Next has many documents which can be submitted.

		Once submitted, all the fields of that documents are frozen, hence you cannot further edit it.
		`)

	await f.add_slide({
		title: "Edit Submitted Document",
		bullet_points: [
			"Cancel",
			"Amend",
		],
	})

	await f.speak(`
		To be able to edit any submitted document, you should first cancel, and then amend it.
			`)

	await f.remove_slide()

	await f.speak(`
		Let's open a submitted Purchase Order, and amend it.
		`)

	await f.search ("purchase o", "Purchase Order List")

	await f.click_list_item("Fermentum Metus Aenean LLP")

	await f.scroll(200)

	await f.hover_element("label", "Supplier")

	await f.speak(`
			Since this transaction is submitted, the fields are frozen, and not editable.
			`)

	await f.hover_element("label", "Date")

	await f.scroll_to_section("Currency and Price List")

	await f.pause(1)

	await f.scroll_to_section("Additional Discount")

	await f.pause(1)

	await f.scroll(0)

	await f.speak(`
			Let's assume that we need to select another Supplier in this Purchase Order.

			To be able to amend it, you should first cancel this Purchase Order.
			`)

	await f.click_element("button","Cancel")

	await f.click_primary_button('Yes')

	await f.speak(`
			Once a document is cancelled, you will find a button to amend it.
			`)

	await f.hover_element("button", "Amend")

	await f.speak(`
			Click amend button to edit this Purchase Order.
			`)

	await f.click_primary_button("Amend")

	await f.hover_element("label","Supplier")

	await f.hover_element("label","Date")

	await f.speak(`
			Now, you can see that all the fields in the Purchase Order are editable. Let's select another Supplier.
			`)

	await f.fill_field("supplier", "Morbi Tristique Foundation", "morbi")

	await f.speak(`
			Save.
			`)

	await f.click_primary_button('Save')

	await f.hover_element(".ellipsis.sub-heading.text-muted")

	await f.speak(`
			You can observe that hifen one has been added to the original Purchase Order I D.

			This indicates that this Purchase Order is an amended version of other Purchase Order. Each time a transaction is amended,
			the value in the Purchase Order I D will be added by one.
			`)

	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')

	await f.speak(`After submission, values in the fields will be frozen once again.
			`)

		
	await f.add_slide({
		title: "Cancel and Amend Permission",
		})
		
	await f.speak(`Being a system manager, you will be able to control cancel and amend permission for the users.`)
		
	await f.remove_slide()
		
	await f.search("purchase order", "Purchase Order List")
		
	await f.pause(1)
		
	await f.click_form_menu()
	
	await f.pause(1)
		
	await f.click_dropdown_item("Role Permissions Manager")
		
	await f.pause(1)
		
	await f.hover_element("a", "Purchase User")
		
	await f.speak(`You can see that for the Purchase User role, cancel and amend permission is not assigned.`)
		
	await f.hover_element("a", "Purchase Manager")
		
	await f.speak(`
			But Purchase Manager has cancel and amend permission assigned.
		
			As per this permission, only if a Purchase manager Role is assigned to the user, the Purchase Order will be editable
			 after submission.
		
			Also, to be able to delete a submitted document, you should first cancel it.
		`)
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});