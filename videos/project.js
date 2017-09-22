import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Project and Tasks"


fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(true)

	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to manage Projects.

		Project is a well define objective to be achieved in a limited time period.

		A company has to manage multiple projects simultaneously.`)

	await f.add_slide({
		title: "Projects",
			})

	await f.speak(`
		In E R P Next, you can create and manage projects and associated tasks. Lets create a new project.
			`)

	await f.remove_slide()
	
	await f.pause(1)

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

	await f.speak(`Project has been created. You can add more details in this Project.`)
	
	await f.click_list_item("Ubuntu Mobile Prototype")

	await f.speak(`You can add more details in this Project, like Project Type.`)
		
	await f.scroll(400)

	await f.fill_field("project_type", "External", "exter")
		
	await f.scroll_to_section("Tasks")
		
	await f.speak(`Create Task for this Project which can be assigned to the .`)
		
	await f.add_row("tasks")

	await f.open_row("tasks", 1)

	await f.speak(`Enter Task Title.`)

	await f.fill_field("title", "Design Documentation")

	await f.fill_field("start_date", "18-09-2017")
		
	await f.click_element(".form-in-grid label", "Start Date")

	await f.fill_field("end_date", "20-09-2017")

	await f.speak(`Add next Task in the new row.`)

	await f.insert_below("tasks")

	await f.fill_field("title", "Software Development")

	await f.fill_field("start_date", "21-09-2017")
	
	await f.click_element(".form-in-grid label", "Start Date")

	await f.fill_field("end_date", "27-09-2017")

	await f.insert_below("tasks")

	await f.fill_field("title", "Alpha Release")

	await f.fill_field("start_date", "28-09-2017")
		
	await f.click_element(".form-in-grid label", "Status")
		
	await f.fill_field("end_date", "28-09-2017")

	await f.close_row()

	await f.speak(`Lets Save this Project.`)

	await f.click_primary_button("Save")
		
	await f.scroll(0)

	await f.hover_element(".badge-link.small", "Task")

	await f.speak(`For each Task added in the Projects, separate Task master is created.`)

	await f.click_element(".badge-link.small", "Task")

	await f.pause(1)
	
	await f.click_list_item("Design Documentation")
		
	await f.hover_element("label", "Project")
		
	await f.speak(`You can assign or Share each Task with your colleagues.`)
		
	await f.hover_element(".strong.add-assignment", "Assign")
	
	await f.hover_element(".form-shared")
		
	await f.go_back("Go back to task list.")
		
	await f.pause(2)
		
	await f.go_back()
		
	await f.pause(2)

	await f.click_section("Customer Details")

	await f.speak(`In the project, you can select Customer and Sales Order details.`)

	await f.fill_field("customer", "Sonec LLP", "sonec")

	await f.click_section("Users")

	await f.speak(`To give access of this Project to your customers via customer portal, select your 
			Customer's user I D in this table.
		`)
		
	await f.add_row("users")

	await f.open_row("users", 1)
		
	await f.fill_field("user", "robert@sonec.co.uk", "robert@")
		
	await f.close_row()

	await f.click_section("Costing and Billing")

	await f.speak(`
		One  Project is created, it can be selected in the sales and purchase transactions as well.
		This will help you track project costing and profitability.
			`)
		
	await f.hover_element("label","Total Costing Amount (via Timesheets)")
		
	await f.speak(`	
		Total costing Amount will be updated based on Timesheet made for this project. To learn more, check
		help video on Task and Timeseet.
			`)

	
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});