import { Selector } from 'testcafe';
import f from '../lib';


fixture("Operation and Workstations")
    .page ("http://gadgets.erpnext.com/login");

test('Operation and Workstations', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to setup operations and workstations in the manufacturing module of E R P Next.

		`)

	await f.click_icon("Manufacturing")

	await f.pause(1)

	await f.hover_element("a", "Operation")

	await f.speak(`
			In a manufacturing process, the raw-materials are processed through various operations, until are converted into
			finished item.

			For example, in the garments manufacturing industry, processes like fabric cutting, stitching, washing and
			packing can be considered as operations.

			Lets add an operation.
			`)

	await f.click_module_item("Operation")

	await f.click_primary_button("New")

	await f.fill_field("Operation Name", "Fabric Cutting")

	await f.click_primary_button()

	await f.speak(`This way, you can add all the operations. Let's also check how to add new Workstations.'`)

	await f.go_back()

	await f.pause(1)

	await f.click_module_item("Workstation")

	await f.speak(`For one operation, you can have multiple work-stations. You should add each work-station
			in your E R P Next account.
		`)

	await f.click_primary_button("New")

	await f.speak(`Enter Workstation Name.`)

	await f.fill_field("Workstation Name", "Packaging Line 1")

	await f.click_primary_button()

	await f.click_list_item("Packaging Line 1")

	await f.speak(`In the Workstation master, you can add per hour costing for various expenses like electricity and labour etc.`)

	await f.fill_field("hour_rate_electricity", "50")

	await f.fill_field("hour_rate_labour", "70")

	await f.speak(`
			Also, you can define working hours of that workstations for capacity planning.
			Production jobs will be assigned in these hours only.
		`)

	await f.add_row("working_hours")

	await f.open_row("working_hours", 1)

	await f.fill_field("start_time", "10:30:00")

	await f.fill_field("end_time", "19:30:00")

	await f.close_row()

	await f.scroll_to_section("Working Hours")

	await f.speak(`Also, you can select Holiday List for this Workstation, so that no production
			job is allocated on a day added in the holiday list.`)

	await f.fill_field("holiday_list", "2017")

	await f.click_primary_button("Save")

	await f.speak(`You can also set default Workstation in the operation master.`)

	await f.search("operat", "Operation List")

	await f.click_list_item("Fabric Cutting")

	await f.fill_field("workstation", "Laser Fabric Cutting", "laser fab")

	await f.click_primary_button("Save")
		
	await f.speak(`Also, you can select Holiday List for this Workstation, so that no production 
				job is allocated on a day added in the holiday list.`)
	
	await f.speak(`		
			Once you have added all the operations and Workstations, you can use them when creating Bill of Materials and 
			Production order for the manufacturing item.`)
		
	await f.speak(`
			Selecting operations and workstation will also help in capacity planning and in allocation of production jobs to workstations.
		`)

	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
		
});