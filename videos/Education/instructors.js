import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Instructor"


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

			In this video, we will learn how to manage instructors in E R P Next.`)
		
		await f.add_slide({
			title: "Instructor",
				})

		await f.speak(`An instructor is one who conducts courses in an institute and mentor’s students.`)

		await f.remove_slide()
			
		await f.pause(1)

		await f.click_icon("Instructor")

		await f.speak(`Add new instructor from here.`)

		await f.click_primary_button("New")

		await f.pause(1)

		await f.speak(`Enter Instructor's name.`)

		await f.fill_field("Instructor Name", "Rolanda Hooch")

		await f.hover_element("label", "Naming Series")

		await f.speak(`On saving, instructor I D will be generated as per this naming series.`)

		await f.hover_element("label", "Employee")

		await f.hover_element("label", "Department")

		await f.speak(`Enter values in these fields, if needed.`)

		await f.fill_field("Department", "Information Technology", "in")

		await f.speak(`Save`)

		await f.click_primary_button("Save")

		await f.pause(1)

		await f.speak(`You can also update instructor's image.`)

		await f.set_sidebar_image('./images/Rolanda Hooch.jpg')

		await f.click_primary_button("Upload")

		await f.pause(3)

		await f.close_modal()
			
		await f.pause(1)
	
		await f.hover_element("button", "Course Schedule")
			
		await f.speak(`Click here to schedule courses for this instructor.`)
			
		await f.hover_element(".ellipsis.sub-heading.text-muted")
			
		await f.speak(`
				You can also have this I D generated based on different values. You can configure
				it from the School settings.
				`)
			
		await f.search("school se", "School Settings")
		
		await f.pause(1)
		
		await f.hover_element("label", "Instructor Records to be created by")
		
		await f.click('[data-fieldname="instructor_created_by"]')
		
		await f.speak(`
				You can have naming done based on the Instructor's name, Employee Number or Naming Series.
				`)
		
		await f.click('[data-fieldname="instructor_created_by"]')
	
		await f.speak(`
				Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
				Thanks for watching.
		`)
});