import { Selector } from 'testcafe';
import { f } from '../lib';


fixture ("Getting Started")
		.page ("https://hogwarts.erpnext.com/#login");


test('Getting started', async t => {

	await f.login("albus.dumbledore@hogwarts.co.uk","1234")
	await f.setTestSpeed(0.75)
	await f.wait(3)
	await f.toggle_speak(false)

	await f.speak
			(`Hi. In this video we will learn to manage student applications in E R P Next. 
				To add new Student application, go to Schools module.`)
		
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
		
	await f.fill_field("last_name", "Granger")

	await f.speak
	 			(`Select a program this student has applied for.`)
		
	await f.fill_field("program", "Computer Science", "computer")
		
	await f.speak
	 			(`Save Student Application`)
		
	await f.click_primary_button()
		
	await f.speak
				(`You can add personal details of the applicant like Date of birth and gender in this section.`)
				
	await f.scroll_to_section("Personal Details")
			
	// await f.fill_field("date_of_birth", "04-01-2000")
		
	// await f.fill_field("gender", "Female")
			
	await f.hover('.shaded-section:nth-child(4)')

	await f.speak
	 	(`You can also add guardian and sibling details in this section.`)

	 
	await f.speak
	 	(`You can also attach an image of applicant here.`)
				
	await f.scroll_to_section("Home Address")
				
	await f.speak
	 	(`Enter applicant's address`)	
				
	await f.scroll_to_section("Guardian Details")
				
	await f.speak
	 	(`Enter details of applicant's Guardian and sibling`)
				
	await f.scroll(0)
				
	await f.speak
	 	(`You can also add image of an applicant.`)	
			
	await f.set_sidebar_image('./images/Hermione Granger.png')
			
	await f.click_primary_button()
			
	await f.speak
	 	(`Let's submit the Student Application`)

	await f.click_primary_button()
	await f.wait(1)
				
	await f.click_primary_button()

	await f.speak
	 	(`After an application is submitted, you can review it and approve or reject it.`)
			
	await f.click_toolbar_button('Actions')	
				
	await f.speak
	 	(`Let's Approve this Application.`)
				
	await f.click_dropdown_item('Approved')				
		
	await f.speak
	 	(`Once application is approved, you can convert this applicant into Student in your ERPNext.`)
			
	await f.wait(5)
	await f.close_modal()
	
});