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

		In this video, we will learn how to manage tasks in E R P Next.`)

	await f.add_slide({
		title: "Task",
			})

	await f.speak(`
		Task is a work assignment, to be completed in a given time period.
			`)

	await f.remove_slide()

	await f.speak(`
			A Task can be linked to a Project or can exist independently as well.
			For the help on how to create a Task from a Project, check help video on Projects management in E R P Next.
		`)

	await f.click_icon("Projects")

	await f.pause(1)

	await f.click_module_item("Task")

	await f.pause(1)

	await f.speak(`Lets create a new Task.`)

	await f.click_primary_button("New")

	await f.speak(`Enter Task Subject.`)

	await f.fill_field("Subject", "Test iPhone X")

	await f.hover_element("label", "Status")

	await f.speak(`Set status.`)

	await f.hover_element("label", "Project")

	await f.speak(`Select a Project if needed.`)

	await f.hover_element("label", "Expected Start Date")

	await f.speak(`Update expected start and end date.`)

	await f.fill_field("exp_start_date", "25-09-2017")

	await f.fill_field("exp_end_date", "28-09-2017")

	await f.speak(`Save Task.`)

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.hover_element("label", "% Progress")

	await f.speak(`Update progress on this task in percentage.`)

	await f.fill_field("progress", "20")

	await f.click_element("label", "Details")

	await f.speak(`Enter more details on this Task.`)

	await f.fill_field("Details", "Test Face ID, Cameras, UI navigation.")

	await f.scroll_to_section("Depends On")

	await f.speak("If this task is dependent on other task, you can select that task here.")

	await f.add_row("depends_on")

	await f.open_row("depends_on", 1)

	await f.fill_field("task", "TASK00019", "19")

	await f.close_row()

	await f.click_primary_button("Save")

	await f.scroll(0)

	await f.speak(`You can use assigned to or Share feature to allocate a task to your colleagues.`)

	await f.hover_element(".strong.add-assignment", "Assign")

	await f.hover_element(".form-shared")

	await f.add_slide({
			title: "Gantt Chart",
				})

	await f.speak(`
			Based on the expected Start and End of Tasks, Gantt Chart will be generated.
				`)

	await f.remove_slide()

	await f.go_back()

	await f.pause(1)

	await f.click_element("a","Gantt")

	await f.pause(2)

	await f.scroll(300)

	await f.speak(`You can update progress on the task from gantt chart as well.`)

	await f.hover_element(".bar-label","Design (TASK00007)")

	await f.speak(`
			Also, in the gantt chart, task dependency will be highlighted with an arrow.

			To switch to list view of task, click on List.
		`)

	await f.scroll(0)

	await f.click_element("a","List")

	await f.click_list_item("Test iPhone X")

	await f.add_slide({
			title: "Timesheet from Task",
					})

	await f.speak(`
			To update actual time spent on a Task, create a Timesheet.
			`)

	await f.remove_slide()

	await f.pause(1)

	await f.click_toolbar_button("View")

	await f.pause(1)

	await f.click_dropdown_item("Timesheet")

	await f.pause(1)

	await f.click_primary_button("New")

	await f.pause(1)

	await f.scroll_to_section("Timesheet Details")

	await f.open_row("time_logs", 1)

	await f.speak(`Select Activity Type applicable.`)

	await f.fill_field("Activity Type", "Alpha Testing", "alpha")

	await f.fill_field("From Time", "23-09-2017 11:30:00")

	await f.speak(`Let's say three hours was spent on this Project.`)

	await f.fill_field("Hrs", "3")

	await f.speak(`End Time is auto updated based on start time and Hours spent.`)

	await f.fill_field("task", "TASK00024", "24")

	await f.close_row()

	await f.speak(`Save Timesheet.`)

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.click_primary_button("Submit")
	
	await f.speak(`Let's go back to Task and check impact on this Timesheet.`)

	await f.search("24 in task", "24 in Task")
		
	await f.click_list_item("Test iPhone X")
		
	await f.hover_element("label", "Actual Time (in hours)")
		
	await f.speak(`In the Task, Actual Time is updated based on Timesheet.
			If this Task is linked to Project, then actual time spent will be updated in the Project as well.
		`)
		
	await f.scroll(0)
	
	await f.speak(`
		
			Once a student is created, you can create these entries for it.
		
	
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});