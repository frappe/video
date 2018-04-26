import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Discounts"

fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(false)
	
	await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorial.

        In this tutorial, we will learn 
        `)

    await f.add_slide({
		    title: "Discounts",
			})

	await f.speak(`how to apply discount on the item's price. It
    can be applied in the sales as well as purchase transactions.`)

	await f.remove_slide()

	await f.search("sales invoice", "Sales Invoice List")

	await f.click_list_item("Prompt Engineering Services")

    await f.click_section("Currency and Price List")

    await f.scroll_to_section("Currency and Price List")

    await f.hover_element("label","Price List")

    await f.speak(`In the transaction, item's price is fetched from the Price List.
            Let's add a new item, and check how it works.`)

    await f.add_row("items")

    await f.open_row("items", 2)

    await f.fill_field("Item", "iPhone 7", "iphone 7")

    await f.pause(2)

    await f.hover_element("label", "Price List Rate")

    await f.speak(`On the selection of Item, you can observe that Item's rate was auto-fetched.
            You can apply discount on this price list rate of an item.
            `)

    await f.click_section("discount_and_margin")

    await f.hover_element("label", "Discount (%) on Price List Rate with Margin")

    await f.speak(`Enter the percentage of discount you want to offer on this item.`)

    await f.fill_field("Discount (%) on Price List Rate with Margin", "20")

    await f.click_element("label", "Rate")

    await f.speak(`you can observe that on entering discount, Rate for an item is reduced
            accordingly.`)

	await f.speak(`
		Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});