import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Pricing Rule"

fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
    await f.close_modal()
    
    await f.speak(`
		
		Hi.

		Welcome to E R P Next tutorials.

        If you apply discounts on the item based on certain conditions, 
        `)

    await f.add_slide({
		    title: "Pricing Rule",
			})

	await f.speak(`you can use Pricing Rule to define these conditions.`)

    await f.remove_slide()
    
    await f.speak(`In the Pricing Rule, you define criterias based on these parameters for the auto application
                of discount or margin.`)

    await f.speak(`Let's assume a scenario where we want to give a predefined discount to a 
            customer, if they order certain quantities of an item.`)

    await f.search("pricing ru", "Pricing Rule List")

    await f.click_primary_button("New")

    await f.speak(`Enter Pricing Rule Title`)

    await f.fill_field("Title", "Curiositi Discount for 2018")

    await f.pause(1)

    await f.click_element('[data-fieldname="apply_on"]')

    await f.speak(`Select a criteria based on which you want to apply this rule.`)

    await f.click_element('[data-fieldname="apply_on"]')

    await f.speak(`Let's apply rule based on Item Group. If you select most parent Item Group,
            like All Products, then pricing rule will be applied on all the items.`)

    await f.fill_field("Apply On", "Item Group")

    await f.hover_element("label", "Item Group")

    await f.speak(`Select exact Item Group here.`)
    
    await f.fill_field("Selling")

    await f.hover_element("label", "Applicable For")

    await f.speak(`You can check Selling or Buying, or both. Based on field checked here,`)

    await f.click_element('[data-fieldname="applicable_for"]')

    await f.speak(`Select a selling criteria here. Let's select a Customer.`)

    await f.click_element('[data-fieldname="applicable_for"]')

    await f.fill_field("Applicable For", "Customer")

    await f.fill_field("Customer", "Curiositi Education Services", "curiositi")

    await f.hover_element("label", "Min Qty")

    await f.hover_element("label", "Max Qty")

    await f.speak(`In these fields, enter the range of quantity for which this pricing
            rule will be applied.
            `)

    await f.fill_field("Min Qty", "5")

    await f.fill_field("Max Qty", "20")

    await f.hover_element("label", "Valid From")

    await f.hover_element("label", "Valid Upto")

    await f.speak(`Enter the dates for which this pricing rule will be valid.`)

    await f.fill_field("Valid From", "01-01-2018")

    await f.fill_field("Valid Upto", "31-12-2018")

    await f.hover_element("label", "Margin Type")
    await f.hover_element("label", "Margin Rate or Amount")

    await f.speak(`Here, you can define your sales marging which will be applied 
            on the price list rate of the item. You can use this feature if
            you are fetching item's buyng rate in the price list rate.`)
        
    await f.hover_element("label", "Price or Discount")

    await f.speak(`Here, select whether you want to apply the discount on the 
            price list rate of an item, or reset the Price List Rate itself. 
            Let's update discount.`)

    await f.fill_field("Price or Discount", "Discount Percentage")

    await f.speak(`Enter Discount Percentage.`)

    await f.pause(1)

    await f.fill_field("Discount on Price List Rate (%)", "20")

    await f.hover_element("label", "For Price List")

    await f.speak(`If needed, you can also select a price list only for which this pricing
            rule will be applied. Let's save this Pricing Rule.`)

    await f.click_primary_button("Save")

    await f.hover_element("label", "Priority")

    await f.speak(`If you have pricing rules overlapping with each other, you can set the
            priority for each of them. Higher the value, higher will be the priority.`)

    await f.speak(`Now, let's check the impact of this pricing rule on transactions.`)

    await f.search("quotation", "Quotation List")

    await f.click_list_item("Curiositi Education Services")

    await f.speak(`This is a quotation for the Customer and Item for which we just configured
            a pricing rule.`)

    await f.scroll_to_section("Currency and Price List")

    await f.open_row("items", 1)

    await f.click_section("Discount and Margin")

    await f.hover_element("label", "Discount (%) on Price List Rate with Margin")

    await f.speak(`For now, there is no pricing rule or discount applied.`)

    await f.hover_element("label", "Quantity")

    await f.speak(`Let me increase the item quantity based on the quantity range defined 
            in the Pricing Rule.`)

    await f.fill_field("Quantity", "7")

    await f.pressKey('tab')

    await f.pause(1)

    await f.click_section("Discount and Margin")

    await f.hover_element("label", "Discount (%) on Price List Rate with Margin")

    await f.speak(`Now, you can notice that Discount percentage is auto-applied`)

    await f.hover_element("label", "Pricing Rule")

    await f.speak(`Based on this pricing rule.`)

    await f.pause(1)

    await f.close_row()

    await f.scroll(0)

    await f.click_section("Currency and Price List")

    await f.hover_element("label","Ignore Pricing Rule")

    await f.speak(`If this field is checked, then Pricing Rule will not be applied to this
            transaction.`)

    await f.speak(`
    Hope you found this video tutorial useful. For more details and free sign up, 
    check e r p next dot com. Thanks for watching.
    `)
});