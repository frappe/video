import { Selector } from 'testcafe';
import { f } from '../lib';


fixture("Getting Started")
    .page("https://hogwarts.erpnext.com/#login");


test('Getting started', async t => {

    await f.login("albus.dumbledore@hogwarts.co.uk", "1234")
    await f.use_voice("samantha")
    await f.setTestSpeed(0.75).wait(500)

    // await f.toggle_speak(false)

    await f.speak
        (`Hi. In this video we will learn to manage student applications in E R P Next. To add new Student application, go to Schools module.`)

    await f.hover_element('.case-wrapper', 'Schools', 3)

    await f.click_icon('Schools')

    await f.speak
        (`In the Admissions section, go to Student Applicant.`)

    await f.click_link("#List/Student Applicant")

    await f.speak
        (`Click on new to add new Student Applicant.`)

    await f.click_primary_button("New")

    await f.speak
        (`enter applicants name.`)

    await f.fill_field("first_name", "Hermione")

    // await f.fill_field("last_name", "Granger")

    await f.speak
        (`Select a program this student has applied for.`)

    await f.fill_field("program", "Computer Science", "computer")

    await f.speak
        (`Save Student Application`)

    await f.click_primary_button()

    await f.speak
        (`You can capture more details of the applicant here.`)

    // await f.scroll_to_section("Personal Details")

    await f.speak
        (`You can also add guardian and sibling details in this section.`)

    // await f.scroll_to_section("Guardian Details")
	
	// await f.pause(1.5)

    await f.scroll(0)

    await f.speak
        (`let's attach an image of applicant here.`)

    // await f.set_sidebar_image('./images/Hermione Granger.png')

    await f.click_primary_button()

    await f.speak
        (`Let's submit the Student Application`)

    await f.click_primary_button()

    // await f.click_primary_button('Yes')

    await f.speak
        (`After application is submitted, you can review it and approve or reject it.`)

    await f.click_toolbar_button('Actions')

    await f.speak
        (`Let's Approve this Application.`)

    await f.click_dropdown_item('Approve')

    await f.speak
        (`Once application is approved, you can convert this applicant into Student in your ERPNext.`)

    await f.wait(5)
    await f.close_modal()

});