import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Assessment Plan"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this video, we will learn how to create an assessment plan in E R P Next.
			`)

	await f.add_slide({
			title: "Assessment Plan", 
			})

	await f.speak(`Assessment Plan is created to schedule an assessment for a Student Group, for a specific Course.
			Let's create a new assessment plan.
			`)

	await f.remove_slide()

	await f.search("assessment plan", "Assessment Plan List")

	await f.click_primary_button("New")
		
	await f.hover_element("label", "Assessment Name")
		
	await f.fill_field("Assessment Name", "BCS/FY/A/Math 12-11-2017")	

	await f.fill_field("Assessment Group", "unit test 1", "Unit Test 1 2018-19 Semester 1")
		
	await f.hover_element("label", "Student Group")
		
	await f.speak(`select a Student Group.`)
		
	await f.fill_field("Student Group", "bcs/fy","BCS/FY/A/Math/(Semester-1)")
		
	await f.fill_field("Maximum Assessment Score", "40")
		
	await f.hover_element("label", "Course")
		
	await f.speak(`select a course for which assessment will be conducted.`)
		
	await f.fill_field("Course", "bmath-bcs","BMath-BCS-FY")
		
	await f.fill_field("Grading Scale", "sta", "Standard Grading")
		
	await f.scroll_to_section("Schedule")
		
	await f.speak(`Enter schedule details when this assessment will be conducted.`)
		
	await f.fill_field("Schedule Date", "12-18-2017")
		
	await f.fill_field("From Time", "12:30:00")
		
	await f.fill_field("Room", "21" ,"RM0021")
		
	await f.fill_field("To Time", "14:30:00")
		
	await f.fill_field("Examiner", "river", "INS/00008")
	
	await f.fill_field("Supervisor", "alastor", "INS/00003")
		
	await f.speak(`Select criteria based which students will be assessed.`)
		
	await f.open_row("assessment_criteria", 1)
		
	await f.fill_field("Assessment Criteria", "Writing")
		
	await f.fill_field("Maximum Score", "20")
		
	await f.insert_below("assessment_criteria")
		
	await f.fill_field("Assessment Criteria", "Understanding")
		
	await f.fill_field("Maximum Score", "10")
		
	await f.insert_below("assessment_criteria")
		
	await f.fill_field("Assessment Criteria", "Application")
		
	await f.fill_field("Maximum Score", "10")
		
	await f.close_row()
		
	await f.speak(`Lets save and submit this Assessment Plan.`)
			
	await f.click_primary_button("Save")
		
	await f.click_primary_button("Submit")
		
	await f.click_primary_button("Yes")
		
	await f.hover_element("button", "Assessment Result")
		
	await f.speak(`Once assessment plan is submitted, you can create Assessment Result against it to update actual
			marks scored by a student.
		`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});