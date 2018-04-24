import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Course Scheduling"


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

		In this video, we will learn how to create Course Schedule in E R P Next.`)

	await f.add_slide({
		title: "Course Schedule",
			})

	await f.speak(`Course is schedule for each Student Group and Instructor.`)

	await f.remove_slide()

	await f.speak(`Let's create a new Student Group'.`)

	await f.search("course schedule", "Course Schedule List")

	await f.speak(`Create new schedule from here.`)

	await f.click_primary_button("New")

	await f.hover_element("label", "Student Group")

	await f.speak(`Select a Student Group for which you wish to schedule a course.`)

	await f.fill_field("Student Group","BCS/FY/" , "BCS/FY/A/Math/(Semester-1)")

	await f.hover_element("label", "Instructor")

	await f.speak(`Select a instructor.`)

	await f.fill_field("Instructor", "ro", "INS/0023")

	await f.speak(`Select a Course.`)

	await f.fill_field("Course", "algo", "BCA2020")

	await f.hover_element("label", "Schedule Date")

	await f.speak(`Date on which this course will be conducted.`)

	await f.fill_field("Schedule Date", "11-07-2017")

	await f.hover_element("label", "From Time")

	await f.speak(`Select from time when course will begin.`)

	await f.fill_field("From Time", "08:30:00")

	await f.click_element(".row.layout-main")

	await f.speak(`Also enter end time.`)

	await f.fill_field("To Time", "09:30:00")

	await f.speak(`Select a room where this course will be conducted.`)

	await f.fill_field("Room", "semi", "RM0011")

	await f.click_primary_button("Save")

	await f.speak(`In this way, you can schedule courses for each Student Group.`)

	await f.click_element("a","Course Schedule")

	await f.speak(`You can also view course schedule in a the calendar view.`)

	await f.click_element("a","Calendar")

	await f.speak(`All the Course schedule created will be visible here.`)

	await f.scroll(200)

	await f.pause(2)

	await f.scroll(0)

	await f.speak(`For faster creation of Course Schedule, you can also use Course Scheduling Tool.`)

	await f.add_slide({
		title: "Course Scheduling Tool",
				})

	await f.pause(3)

	await f.remove_slide()

	await f.search("course sche", "Course Scheduling Tool")
				
	await f.speak(`Select a Student Group.`)
				
	await f.pause(2)
				
	await f.fill_field("Student Group", "bcs", "BCS/FY/A/Math/(Semester-1)")
				
	await f.speak(`Select an instructor.`)
				
	await f.fill_field("Instructor","ro" ,"INS/0023")
				
	await f.speak(`Select a Room.`)
				
	await f.fill_field("Room", "sem", "RM0011")
				
	await f.speak(`Enter from and to time.`)
				
	await f.fill_field("From Time", "08:30:00")
	
	// await f.click_element(".row.layout-main")
				
	await f.fill_field("to_time", "09:30:00")	
				
	await f.speak(`Enter course start and end date.`)
				
	await f.fill_field("Course Start Date", "08-01-2017")
				
	await f.fill_field("Course End Date", "01-31-2018")
				
	await f.speak(`Select a Day on which this course will be scheduled.`)
				
	await f.fill_field("Day", "Tuesday")
	
	await f.fill_field("Reschedule")
	
	await f.speak(`Check this field if you wish to ignore existing course schedules, if any.`)
				
	await f.speak(`Let's create all the course schedule at once.`)
				
	await f.click_primary_button("Schedule Course")
				
	await f.pause(2)
				
	await f.speak(`This is a list of Course Schedule generated.`)
				
	//await f.close_modal()
				
	await f.search("course schedule", "Course Schedule List")
				
	await f.click_element("a","Calendar")
				
	await f.scroll(150)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});