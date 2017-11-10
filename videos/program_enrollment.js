import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Program Enrollment"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(true)
	
	// await f.speak(`
//
// 		Hi.
//
// 		Welcome to E R P Next tutorials.
//
// 		Each student enrols in an education institute to pursue a specific program.`)
//
// 	await f.add_slide({
// 		title: "Program Enrollment",
// 			})
//
// 	await f.speak(`In E R P Next, create Program Enrollment to enroll student to a specific program.`)
//
// 	await f.remove_slide()
//
// 	await f.speak(`If Student Applications are also tracked in your E R P Next account, you will find option to create
// 		Program Enrollment from student application itself.`)
//
// 	await f.click_icon("Schools")
//
// 	await f.pause(1)
//
// 	await f.click_module_item("Student Applicant")
//
// 	await f.click_list_item("Cho Chang")
//
// 	await f.hover_element("label", "Application Status")
//
// 	await f.speak(`Current application status is Applied. Let's Approve this Application.`)
//
// 	await f.click_toolbar_button("Actions")
//
// 	await f.click_dropdown_item("Approve")
//
// 	await f.pause(1)
//
// 	await f.click_primary_button("Update")
//
// 	await f.speak(`Once an application is approved, you will find option to create Program Enrollment for it.`)
//
// 	await f.click_element("button", "Enroll")
//
// 	await f.pause(1)
//
// 	await f.speak(`Now, we are navigated to Program Enrollment.
// 			Student and Program is updated from Student Applicant.
// 			`)
//
// 	await f.hover_element("label", "Student")
//
// 	await f.hover_element("label", "Program")
//
// 	await f.speak(`Selecting Academic Year is mandatory in Program Enrollment.`)
//
// 	await f.fill_field("Academic Year", "2017-18", "2017")
//
// 	await f.speak(`Let's save Program Enrollment.`)
//
// 	await f.click_primary_button("Save")
//
// 	await f.click_primary_button("Submit")
//
// 	await f.click_primary_button("Yes")
//
// 	await f.speak(`New Program Enrollment is also created when existing students progress from lower program to higher program.`)
//
// 	await f.add_slide({
// 		title: "Program Enrollment Tool",
// 			})
//
// 	await f.speak(`Using Program Enrollment Tool, you can create Program Enrollment in bulk.`)
//
// 	await f.remove_slide()
//
// 	await f.pause(1)
//
// 	await f.click_element("a","Schools")
//
// 	await f.hover_element("a", "Program Enrollment Tool")
//
// 	await f.click_module_item("Program Enrollment Tool")
//
// 	await f.speak(`Let's assume that we need to create a Program Enrollment for all the B C A first year student, who are
// 			now promoted to B C A second year.`)
//
// 	await f.fill_field("Get Students From", "Program Enrollments")
//
// 	await f.fill_field("Program", "BCA-FY", "bca")
//
// 	await f.fill_field("Academic Year", "2016-17", "2016")
//
// 	await f.click_form_button("Get Students")
//
// 	await f.speak(`In the table, only keep students for whom we need to create a Program Enrollment for program B C A
// 			second year.`)
//
// 	await f.fill_field("New Program", "BCA-SY", "bca")
//
// 	await f.fill_field("New Academic Year", "2017-18", "2017")
//
// 	await f.click_form_button("Enroll Students")
//
// 	await f.speak(`Program Enrollment has been created has for these students.`)
//
// 	await f.close_modal()
//
// 	await f.pause(1)
	
	await f.search("program enrol", "Program Enrollment Tool")	
	
	await f.fill_field("Get Students From", "Program Enrollments")

	await f.fill_field("Program", "BCA-FY", "bca")

	await f.fill_field("Academic Year", "2016-17", "2016")
	
	await f.fill_field("New Program", "BCA-SY", "bca")

	await f.fill_field("New Academic Year", "2017-18", "2017")
	
	await f.search("program enrol", "Program Enrollment List")
			
	await f.speak(`Program Enrollment in Draft are the ones created using Program Enrollment Tool. After reviewing values,
		you can submit them.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});