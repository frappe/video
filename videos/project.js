import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Project and Tasks"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		Project is a very define work to be completedin the limited time period.
		Business have to manage many projects simultaneously and track progress on each.`)
		
	await f.add_slide({
		title: "Projects",
			})

	await f.speak(`
		In E R P Next, you can manage projects and associated tasks. Lets create a new project.
			`)

	await f.remove_slide()
	
	await f.click_icon("Projects")
		
	await f.pause(1)

	await f.click_module_item("Project")
		
	await f.pause(1)
		
	await f.click_primary_button("New")

	await f.speak(`Enter Project Name.`)

	await f.fill_field("Project Name", "Ubuntu Mobile Prototype")

	await f.speak(`Enter Expected End Date.`)

	await f.fill_field("Expected End Date","07-09-2017")

	await f.click_primary_button()

	await f.speak(`Project has been created. You can more details in this Project.`)

	await f.click_list_item("Ubuntu Mobile Prototype")
		
	await f.speak(`Select Project Type.`)
	
	await f.fill_field("project_type", "External", "exter")
		
	await f.click_section("Customer Details")
		
	await f.speak(`Select Customer and Sales Order details here.`)
		
	await f.fill_field("customer", "Sonec LLP", "sonec")
		
	await f.click_section("Users")
	
	await f.speak(`Let your customers to access this Project from the Customer portal. For this, you should
			add your Customers as Website users, and select them in this table.
		`)
		
	await f.scroll_to_section("Tasks")
		
	await f.speak(`Let's divide this Project into multiple and assignable tasks.`)
		
	await f.add_row("tasks")
	
	await f.open_row("tasks", 1)
		
	await f.speak(`Enter Task Title.`)
		
	await f.fill_field("title", "Design Documentation")
		
	await f.fill_field("start_date", "18-09-2017")
		
	await f.fill_field("end_date", "20-09-2017")
		
	await f.speak(`Add next Task in the new row.`)
		
	await f.insert_below("tasks")
		
	await f.fill_field("title", "Software Development")
		
	await f.fill_field("start_date", "21-09-2017")
		
	await f.fill_field("end_date", "27-09-2017")
		
	await f.insert_below("tasks")
		
	await f.fill_field("title", "Alpha Release")
		
	await f.fill_field("start_date", "28-09-2017")
		
	await f.fill_field("end_date", "28-09-2017")
		
	await f.close_row()
		
	await f.scroll_to_section("Tasks")
		
	await f.speak(`Lets Save this Project.`)
		
	await f.click_primary_button("Save")
	
	await f.click_section("Costing and Billing")
		
	await f.speak(`
		One you have created a Project, you can select it in the sales and purchase transactions as well.
		This will also help you track project costing and profitability.
			`)
	
	await f.scroll(0)
		
	await f.hover_element(".badge-link.small", "Task")
		
	await f.speak(`For each Task added in the Projects, separate Task master is created.`)
		
	await f.click_element(".badge-link.small", "Task")
		
	await f.pause(1)
		
	await f.click_list_item("Design Documentation")
		
	await f.hover_element("label", "Project")
		
	await f.speak(`You can assign or Share each Task with your colleagues.`)
		
	await f.hover_element(".strong.add-assignment", "Assign")
	
	await f.hover_element("h6", "Shared With")
		
	await f.go_back("Go back to task list.")
		
	await f.pause(1)
		
	await f.speak(`You can also create new Task manually from here.`)
		
	await f.hover_element("button", "New")
		
	await f.go_back()
		
	await f.pause(1)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});