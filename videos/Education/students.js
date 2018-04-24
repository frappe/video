import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Project and Tasks"


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

		In this video, we will learn how to add a new Student in the schools module.`)
		
	await f.add_slide({
		title: "Student",
			})

	await f.pause(3)

	await f.remove_slide()
			
	await f.speak(`Check Students list from here.`)
			
	await f.click_icon("Student")
			
	await f.scroll(260)
			
	await f.speak(`These are the existing students.`)
			
	await f.pause(1)
	
	await f.scroll(0)
	
	await f.speak(`If you created Student Applicant, you can also create a student from there.
			
			For now, let's directly create a new student from here.
			`)
			
	await f.click_primary_button("New")
			
	await f.speak(`Enter Student Name.`)
		
	await f.fill_field("First Name", "Hannah")
			
	await f.fill_field("Last Name", "Abbott")
			
	await f.speak(`Lets save this student`)

	await f.click_primary_button("Save")
			
	await f.scroll(0)
			
	await f.speak(`Once a student is saved, you can select student's image.`)
			
	await f.set_sidebar_image('./images/hannah_abbott.jpg')
			
	await f.click_primary_button("Upload")
			
	await f.pause(1)
			
	await f.speak(`You can add more details about a student in the following sections.`)
			
	await f.fill_field("Student Mobile Number", "+1 4785848647")
			
	await f.fill_field("Date of Birth", "05-05-1998")
			
	await f.fill_field("Gender", "Female")
			
	await f.scroll_to_section("Home Address")
			
	await f.speak(`Enter student's address in this section.`)
			
	await f.scroll_to_section("Guardian Details")
			
	await f.speak(`Enter guardian details here.`)
			
	await f.add_row("guardians", 1)
			
	await f.open_row("guardians", 1)
	
	await f.fill_field("Guardian", "GARD0001","gard0001")
			
	await f.pause(1)
			
	//await f.fill_field("Relation", "Mother")
			
	await f.close_row()
			
	await f.click_section("Sibling Details")
			
	await f.speak(`Track sibling details in this section.`)
			
	await f.click_section("Exit")
			
	await f.speak(`When this Student Leaves, related details can be entered in the Exit section.`)
			
	await f.click_primary_button("Save")
			
	await f.scroll(0)
			
	await f.speak(`Once an student is saved, you can create other entries for it like Program Enrollment.`)
			
	await f.hover_element(".badge-link.small", "Program Enrollment")
			
	await f.hover_element(".badge-link.small", "Student Group")
			
	await f.speak(`Student Group`)

	await f.hover_element(".badge-link.small", "Student Attendance")
			
	await f.speak(`Student Attendance`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});