import { Selector } from 'testcafe';
import f from '../lib';


fixture("Getting Started")
    .page("https://hogwarts.erpnext.com/login");


test('Getting started', async t => {

    await f.login("albus.dumbledore@hogwarts.co.uk", "1234")
    await f.use_voice("samantha")
    await f.setTestSpeed(0.75).wait(500)

    await f.toggle_speak(true)

    await f.speak
        (`Hi. Welcome to E R P Next Schools tutorial. We will learn how to manage student applications in E R P Next. To add new Student application, click on Schools module.`)

    await f.hover_element('.case-wrapper', 'Schools', 1)

    await f.click_icon('Schools')

    await f.speak
        (`In the Admissions section, go to Student Applicant.`)

 	await f.pause(0.5)

    await f.click_module_item("Student Applicant")

    await f.speak
        (`Click on new, to add a new Student Applicant.`)

    await f.click_primary_button("New")

    await f.speak
        (`enter applicants name.`)

    await f.fill_field("first_name", "Hermione")

    await f.fill_field("last_name", "Granger")

    await f.speak
        (`Select a program this student has applied for.`)

    await f.fill_field("program", "Computer Science", "computer")

    await f.speak
        (`Save Student Application`)

    await f.click_primary_button()

    await f.scroll_to_section("Personal Details")

    await f.speak
        (`You can capture more details of the applicant here.`)

 	await f.fill_field("Student Email Address", "hermione@granger.com")

    await f.scroll_to_section("Guardian Details")

 	await f.click_section("Guardian Details")
 	await f.click_section("Sibling Details")

    await f.speak
        (`You can also add guardian and sibling details in these sections.`)

    await f.scroll(0)

    await f.speak
        (`let's attach an image of this applicant.`)

    await f.set_sidebar_image('./images/Hermione Granger.png')

    await f.click_primary_button('Save')

    await f.speak
        (`Let's submit this Application.`)

    await f.click_primary_button('Submit')

    await f.click_primary_button('Yes')

    await f.speak
        (`After application is submitted, you can review it, and approve or reject it.`)

    await f.click_toolbar_button('Actions')

    await f.speak
        (`Let's Approve this Application.`)

    await f.click_dropdown_item('Approve')

 	await f.hover_element('button','Enroll', 1)

    await f.speak
        (`Once application is approved, you can convert this applicant into Student.`)

 	await f.speak
 		(`To allow students to apply online, you can create a Web Form for Student Application on your E R P Next website.`)
	
	await f.search("web", "Web Form List")
  
	await f.pause(0.5)
	
	await f.click_list_item("Student Applicant")
	
	await f.scroll_to_section("Fields")
	
	await f.speak
		('Select fields of Student Applicant to be shown in the web form.')
	
	await f.scroll_to_section("Payments")
	
	await f.click_section("Payments")
	
	await f.speak
		('You can also enable payments, so that student can pay application fee online.')
	
	await f.scroll(0)
	
	await f.speak
		('Click here to check web view of student application form.')
	
	await f.hover_element("a", "See on Website")
	
	await f.speak ("Hope you found this video tutorial useful. For more details and free signup, check e r p next dot com. Thanks for watching")

});