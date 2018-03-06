import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Student Fee Schedule"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this video, we will learn how to create Fee Schedule in E R P Next.
			`)

	await f.add_slide({
			title: "Fee Schedule"
			})

	await f.speak(` Using Fee Schedule, you can create fee record for multiple students at a time.
			`)

	await f.remove_slide()

	await f.search("fee schedule", "Fee Schedule List")

	await f.click_primary_button("New")

	await f.hover_element("label", "Fee Structure")

	await f.speak(`Select a fee structure.`)

	await f.fill_field("Fee Structure", "bcs", "FS00011")

	await f.speak(`Program and Academic year is fetched from Fee Structure.`)

	await f.speak(`Enter due date for paying fees.`)

	await f.fill_field("Due Date", "12-31-2017")

	await f.hover_element("label", "Naming Series")

	await f.speak(`Select a Naming Series following which I D will be generated for a fee record.`)

	await f.speak(`In the table, select a student group for which Fee is to be created.`)

	await f.add_row("student_groups")

	await f.open_row("student_groups", 1)

	await f.fill_field("Student Group", "bcs", "BCS/FY/A/Math/(Semester-1)")

	await f.speak(`On selection of student group, number of students in that groups is shown. Same way, you can select
			other Student Groups in the rows below.`)

	await f.close_row()

	await f.scroll_to_section("Fee Breakup for each student")

	await f.speak(`Based on the Fee Structure, the amount receivable is calculated for each fee component.`)

	await f.scroll_to_section("Accounting")

	await f.click_section("Accounting")

	await f.speak(`Fee will have impact on the book of accounts. Select relevant receivable and income accounts for
			the accounting entry of fees.`)

	await f.speak(`Now, we can save and submit this Fee Schedule.`)

	await f.click_primary_button("Save")

	await f.hover_element("label", "Send Payment Request Email")

	await f.speak(`On creation of fees record, if you want an email of payment request to be sent, check this field.`)

	await f.fill_field("Send Payment Request Email")

	await f.speak(`Submit Fee Schedule`)

	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.hover_element(`button`, "Create Fees")

	await f.speak(`Click here to create Fees record for the students.`)
	
	await f.click_toolbar_button("Create Fees")
		
	await f.pause(1)
		
	await f.speak(`Fee for each student will be created in the backend. Based on the progress, 
			status is updated in the Fee schedule.`)
		
	await f.pause(2)
		
	await f.speak(`Let's check newly created Fee records.`)
		
	await f.close_modal()
		
	await f.search("fees", "Fees List")
		
	await f.scroll(100)
		
	await f.speak(`These are the Fee record created based on Fee Schedule.`)
		
	await f.click_list_item("Cho Chang")
	
	await f.click_toolbar_button("Make")
		
	await f.speak(`On creation of payement entry, status of fee will be updated to Paid. In the next video, we will
			learn how to create Payment Entry against Fee.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
});