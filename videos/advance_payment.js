import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Advance Payment"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	// await f.speak(`Hi.

	// 		Welcome to E R P Next tutorials.

    //         In this video, we will learn how to manage advance
    //         payment entry.`)

	// await f.add_slide({
	// 		title: "Advance Payment",
	// 		})

    // await f.speak(`Advance Payment is a payment received or paid even before 
    //             the creation of an invoice.`)

    // await f.remove_slide()

    // await f.speak(`You can create an Advance Payment entry from Sales and Purchase Order,
    //             or directly create a payment entry for it.`)

    // await f.search("sales order", "Sales Order List")

    // await f.click_list_item("Fermentum Metus Aenean Inc")

    // await f.speak(`This is a Sales Order aginst which Sales Invoice has not been
    //             created as yet. Let's make an entry for the advance payment 
    //             which we received from this customer.`)

    // await f.click_toolbar_button("Make")

    // let payment_button  = await f.select_element('.btn-group.open li:nth-child(6)', '', { modify_selector: false});
    // await f.click(payment_button)

    // await f.pause(2)

    // await f.hover_element("label", "Party Type")

    // await f.speak(`When receiving advance, in the payment entry, customer will be
    //          selected as a party.`)

    // await f.click_section("Accounts")

    // await f.hover_element("label", "Account Paid To")

    // await f.hover_element("label", "Account Paid From")

    // await f.speak(`these are the bank and receivable accounts in which
    //         posting will be done.`)

    // await f.scroll_to_section("Amount")

    // await f.speak(`Enter the advance payment amount in the Paid amount field.`)

    // await f.pause(1)

    // await f.speak(`Since we are making this payment entry against Sales Order, 
    //         relevant I D is updated in a table. 
            
    //         If you directly create an advance payment, then
    //         this table will not have value in it.`)

    // await f.scroll_to_section("Transaction ID")
    
    // await f.speak(`Entert Payment Acknowledgment Details.`)
    
    // await f.fill_field("Cheque/Reference No", "969859")
    // await f.fill_field("Cheque/Reference Date", "24-04-2018")

    // await f.speak(`Let's Save and Submit this Payment Entry.`)
    
    // await f.click_primary_button("Save")
    // await f.click_primary_button("Submit")
    // await f.click_primary_button("Yes")

    // await f.speak(`Now, let's check how this Payment Entry will be adjusted in the
    //         Sales Invoice.`)

    await f.search("sales order", "Sales Order List")

    await f.click_list_item("Fermentum Metus Aenean Inc")

    await f.speak(`Now, we will create a Sales Invoice against this Sales Order.`)

    await f.click_toolbar_button("Make")

    await f.click_dropdown_item("Invoice")

    await f.scroll_to_section("Advance Payments")

    await f.speak(`In this table, the advance payment created for this Customer will
            be fetched.`)

    await f.hover_element("button", "Get Advances Received")

    await f.speak(`You can also click on this button to fetch Advance Payment Entries,
                if any found for this Customer. You will find same table in the
                Purchase invoice aswell.`)

    await f.open_row("advances", 1)

    // await f.hover_element("label", "Allocated Amount")

    await f.speak(`Allocate the advance amount specifically for this Sales Invoice.`)

    await f.close_row()
    
    await f.click_primary_button("Save")

    await f.hover_element("label", "Outstanding Amount")

    await f.speak(`Once an advance payment is allocated, the outstanding amount of the 
            invoice is reduced by the same amount.

            Since we have allocated complete invoice amount now, outstanding has become
            zero, and Invoice status is updated as paid.
             `)

    await f.click_primary_button("Submit")

    await f.click_primary_button("Yes")

    await f.speak(`Following this approach, you can also create an advance payment
            entry against Purchase Order, and allocate amount in the Purchase Invoice. 
            
            You can also directly create a Payment Entry or a Journal Entry for the
            advance payment.`)

    await f.speak(`
            Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
            Thanks for watching.
`)
});