import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Discounts"

fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

        In this tutorial, we will learn 
        `)

    await f.add_slide({
		    title: "Discounts",
			})

    await f.speak(`how to apply a discount on the item. Discounts 
            can be applied in the sales and purchase transactions.`)

	await f.remove_slide()

	await f.search("sales invoice", "Sales Invoice List")

    await f.click_list_item("Prompt Engineering Services")
    
    await f.scroll_to_section("Currency and Price List")

    await f.open_row("items", 1)

    await f.hover_element("label", "Price List Rate")

    await f.speak(`This is the item's price list rate. Let's apply a discount on this rate.`)

    await f.click_section("Discount and Margin")

    await f.hover_element("label", "Discount (%) on Price List Rate with Margin")

    await f.speak(`Enter the percentage of discount you want to offer on this item.`)

    await f.fill_field("Discount (%) on Price List Rate with Margin", "10")

    await f.pressKey('tab') 

    await f.hover_element("label", "Rate")

    await f.speak(`you can observe that on entering discount, Rate of an item is reduced
            compared to Price List rate. Let's save an invoice for now.`)

    await f.close_row()

    await f.click_primary_button("Save")

    await f.add_slide({
          title: "Discount on Net Total / Grand Total",
            })

    await f.speak(`Suppose that you need to offer a discount on the total invoice amount
          itself.`)

    await f.remove_slide()

    await f.scroll_to_section("Additional Discount")

    await f.click('[data-fieldname="apply_discount_on"]')

    await f.speak(`from here, you can apply discount based on grand total or net total. 
            Let's apply discount based on net total.`)

    await f.click('[data-fieldname="apply_discount_on"]')

    await f.fill_field("Apply Additional Discount On", "Net Total")

    await f.hover_element("label", "Additional Discount Percentage")
    await f.hover_element("label", "Additional Discount Amount (INR)")

    await f.speak(`Enter discount percentage or amount in these fields.`)

    await f.fill_field("Additional Discount Percentage", "15")

    await f.pressKey('tab')

    await f.speak(`Discount Amount is also calculated. Let's Save this invoice.`)

    await f.click_primary_button("Save")

    await f.scroll_to_section("Currency and Price List")

    await f.open_row("items", 1)

    await f.hover_element("label", "Rate")

    await f.speak(`Here you can notice that item's rate was this. But based on the discount
            applied on Net Total`)

    await f.scroll_to_section("Net Values")

    await f.speak(`item's Net Rate is calculated.`)

    await f.hover_element("label", "Net Rate")

    await f.speak(`On submission of this sales invoice, income for an item is booked based 
            item's Net Rate only.`)

    await f.close_row()

    await f.scroll_to_section("Additional Discount")

    await f.click('[data-fieldname="apply_discount_on"]')

    await f.speak(`If discount is applied based on Grand Total, then Net Rate is revised for 
            taxes and other charges as well.`)

    await f.click('[data-fieldname="apply_discount_on"]')

    await f.click_print_icon()

    await f.speak(`The discount offered is also mentioned in the total section of 
            the print format.`)

    await f.scroll(0)

	await f.speak(`
		Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});