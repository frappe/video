import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Company Shareholders Management"


fixture(video_title)
    .page ("http://site.local:8000/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@woodcraft.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(false)

    await f.close_modal()
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

            In this tutorial, we will learn manage company's shareholders 
            in e r p next.
            `)
            
    await f.add_slide({
        title: "Shareholder"
    })

    await f.speak(`A shareholder is any person, company or other institution 
    that owns at least one share of your company’s stock.
    
    Let's add a shareholder of your company.
    `)

    await f.remove_slide()

    await f.seach("shareholder", "Shareholder List")

    await f.speak(`click on new to add a new shareholder.`)

    await f.click_primary_button("New")

    await f.fill_field("Shareholder", "Dominik")

    await f.hover_element("label","Folio No.")

    await f.speak(`A unique folio no. is assigned to the shareholder`)

    await f.pause(1)

    // await f.add_row("child_table")

    // await f.open_row("child_table_name", 1)

    // await f.insert_above("child_table_name")

    // await f.insert_below("child_table_name")

    // await f.close_row()

    // await f.hover_element("label", "field label")

    // await f.scroll_to_section("Share Balance")

    // await f.click_primary_button(Submit)

    // await f.click_print_icon()
    
    // await f.search("search text", "Exact Selection")

    // await f.click_button("")

    // await f.close_modal()

    // await f.fill_field("Item Code", "Exact Item Code", "Item search")

    // await f.fill_field("Is Active")

    // await f.fill_field("Series", "SH")

    // await f.click_toolbar_button("View")

    // await f.click_dropdown_item("Stock Ledger")
    
    // await f.speak(`This is a test videos`)

    // await f.add_slide({
    //     title:"This is test video"
    // })

    // await f.remove_slide()

    // await f.seach("item", "Item List")

    // await f.click_list_item("Document Title")

    // await f.click_primary_button("New")

    // await f.fill_field("Customer", "XYZ", "xy")

    // await f.pause()

    // await f.scroll_to_section("Items")

    // await f.add_row("items")

    // await f.open_row("items", 1)

    // await f.insert_above("items")

    // await f.insert_below("items")
    
    // await f.close_row()
    
    // await f.click_toolbar_button("Make")

    // await f.click_dropdown_item("Invoice")

    // await f.goto_desk()

    // await f.close_modal()

    // await f.hover_element("label", "Field Label")

    // await f.pause(2)

});