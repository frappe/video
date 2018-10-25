import { Selector } from 'testcafe';
import f from '../lib';


fixture("Customers")
    .page("http://gadgets.erpnext.com/login");

test('Selling Cycle in ERPNext', async t => {

    await f.login('michael.corleone@gadgets.com', '1234')
    await f.setTestSpeed(0.75).wait(500)
    await f.use_voice("samantha")

    await f.toggle_speak(false)

    await f.pause(1)

    await f.speak(`
    
            Hi.
    
            Welcome to E R P Next tutorials.
    
            In this video, we will learn how to manage customers in E R P Next.
            `)

    await f.add_slide({
        title: "Customer"
    })

    await f.speak(`Customer can be an individual or a company to who you offer
        goods or services in return of monetary benefit.
        
        Let's check how to add a new customer.
        `)

    await f.remove_slide()

    await f.search("new customer", "New Customer")

    await f.pause(1)

    // await f.click_element(".edit-full")

    await f.speak(`
			Enter customer's name.
            `)

    await f.fill_field("Full Name", "Netus Et Malesuada Corp.")

    await f.hover_element("label", "Type")

    await f.speak(`Select a customer type as a company or individual.`)

    await f.hover_element("label", "Customer Group")

    await f.speak(`Select Customer group and territory`)

    await f.fill_field("Customer Group", "Commercial", "comm")

    await f.fill_field("Territory", "India", "india")

    await f.speak(`Let's Save the Customer.`)

    await f.click_primary_button("Save")

    await f.pause(1)

    await f.speak(`
            Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
            Thanks for watching.
        `)
});