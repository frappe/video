import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Student Group"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Alex")

    await f.toggle_speak(true )
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to create student groups.`)

	await f.add_slide({
		title: "Student Group",
			})

	await f.speak(`It's a group of student who has enrolled for the same course.`)

	await f.remove_slide()

	await f.speak(`Courses are scheduled for a student group. Generally, it is referred as a class. Hence, you can have
		multiple student groups for the same program.`)

	await f.speak(`Let's create a new Student Group.`)

	await f.click_icon("Student Group")

	await f.speak(`These are the existing Student Groups.`)

	await f.scroll(0)

	await f.speak(`Let's create new Student Group.`)

	await f.click_primary_button("New")

	await f.hover_element("label", "Academic Year")
	await f.hover_element("label", "Academic Term")

	await f.speak(`default Academic year and Term is fetched from School Settings.`)

	await f.fill_field("Group Based on", "Course")

	await f.speak(`Enter Student Group Name.`)

	await f.fill_field("Student Group Name", "BCS/FY/A/Math/(Semester-1)")

	await f.speak(`Select a Program.`)

	await f.fill_field("Program", "BCS-FY", "bcs")

	await f.speak(`Select a Batch if applicable`)

	await f.hover_element("label","Batch")

	await f.speak(`Select a Course.`)

	await f.fill_field("Course", "BMath-BCS-FY", "bmath")

	await f.fill_field("Max Strength", "40")

	await f.speak(`Let's save Student Group for now.`)

	await f.click_primary_button("Save")

	await f.speak(`One Student Group is saved, you can fetch all the students who have enrolled for the selected program
		in the given academic year.

		To fetch students, click on Get Students.`
		)

	await f.click_form_button("Get Students")

	await f.pause(1)

	await f.scroll(250)

	await f.speak(`These are the students who have enrolled for the program selected above.
			Keep students for this Student Group and delete the rest. For them, you can create another Student Group.
			`)

	await f.scroll_to_section("Instructors")

	await f.add_row("instructors")

	await f.open_row("instructors", 1)

	await f.fill_field("Instructor", "INS/0023", "Rolanda")

	await f.close_row()

	await f.speak(`Save`)

	await f.click_primary_button("Save")

	await f.speak(`Once student group is created, you can schedule course against it.`)

	await f.speak(`if there are many student groups to be created, you can also use Student Group Creation Tool.`)
	
	await f.search("student group cre", "Student Group Creation Tool")
		
	await f.pause(1)
		
	await f.speak(`Select Academic Year`)
	
	await f.fill_field("Academic Year", "2017-18", "2017")
		
	await f.fill_field("Program", "BCS-FY", "bcs")
		
	await f.fill_field("Academic Term", "2017-18 (Semester 2)", "2017-18")
		
	await f.speak(`Click on get courses.`)
		
	await f.click_form_button("Get Courses")
		
	await f.speak(`In the table, it will suggest new Student Groups based on Courses and Batch. Based on your preference, Student
		Group based on Batch or courses, you should keep rows in the table, and delete the rest.
		`)
		
	await f.speak(`To create Student Groups, click on Create Student Groups.`)
		
	await f.hover_element("button", "Create Student Groups")
		
	await f.pause(4)
		
	await f.click_primary_button("Create Student Groups")
		
	await f.close_modal()
		
	await f.pause(1)
		
	await f.close_modal()
		
	await f.search("student group", "Student Group List")
		
	await f.speak("First four Student Groups are created from Student Group Creation Tool.")
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});