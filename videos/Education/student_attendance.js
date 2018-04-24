import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Student Attendance"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Alex")

    await f.toggle_speak(true)
	
	await f.speak(`

			Hi.

			Welcome to E R P Next tutorials.

			In this video, we will learn how to track student attendance in E R P Next.
			`)

	await f.add_slide({
			title: "Student Attendance",
			bullet_points: [ 'Attendance', 'Attendance Tool'],
			})

	await f.speak(`Using these tools, you can mark student's attendance. Let's first check how
				to create attendance one by one.
			`)

	await f.remove_slide()

	await f.search("student atten", "Student Attendance List")

	await f.click_primary_button("New")

	await f.speak(`Select a student for whom attendance is to be marked.`)

	await f.fill_field("Student", "dean", "STUD00075")
			
	await f.fill_field("Course Schedule", "SH00099", "SH00099")

	await f.hover_element("label", "Student Group")

	await f.hover_element("label", "Date")
			
	await f.speak(`Select a date.`)

	await f.hover_element("label","Status")

	await f.speak(`Update Status as Present or Absent.`)

	await f.speak(`Save Attendance.`)

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.speak(`This is how you can create Attendance manually. To mark attendance for multiple students
			at a time, check
		`)

	await f.add_slide({
			title: "Student Attendance Tool",
			})

	await f.speak(`Student Attendance Tool`)

	await f.pause(2)

	await f.remove_slide()

	await f.search("student attendance tool", "Student Attendance Tool")

	await f.speak(`select a Student Group or a Course Schedule.`)

	await f.click('[data-fieldname="based_on"]')

	await f.speak(`Let's assume we are creating attendance based on Course Schedule.`)

	await f.click('[data-fieldname="based_on"]')

	await f.fill_field("Based On", "Course Schedule")

	await f.speak(`Select a Course Schedule.`)

	await f.fill_field("Course Schedule", "bcs", "SH00073")

	await f.speak(`Student has been fetched for course schedule.`)

	await f.speak(`To mark students as present, check their names. You can also check all at once by clicking here.
			`)

	await f.click_element("button","Check all")

	await f.speak(`If you want to mark specific student as absent, check that student's name.`)

	await f.click_element("label","Cho Chang")

	await f.speak(`Click on Mark Attendance to create attendance.`)

	await f.click_element("button","Mark Attendance")

	await f.pause(1)

	await f.speak(`This message indicates the number of attendance record which will be created.`)

	await f.click_primary_button("Yes")

	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.`)
});