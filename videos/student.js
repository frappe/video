import { Selector } from 'testcafe';
import { f } from './common';


fixture ("Getting Started")
    .page ("https://hogwarts.erpnext.com/#login");


test('Getting started', async t => {

  await f.login("albus.dumbledore@hogwarts.co.uk","1234")
  await f.setTestSpeed(0.75)
  await f.wait(500)

  await f.speak
  		(`Hi. In this video we will leave to add manage student applications in E R P Next. 
	  	  To add new Student application, go to Schools module.`)
	  
  await f.click_icon('Schools')
  
  await f.speak
	  	(`In the Admissions section, you will find Student Applicant.`)
	  
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
	  	(`You can capture more details of the student like date of birth, gender and home address.`)
	  
  await f.fill_field("gender", "Female")

  await f.speak
	 	(`add guardian and sibling details in this section.`)
	 
  await f.speak
	 	(`You can also attach an image of applicant here.`)
			
			https://hogwarts.erpnext.com/desk#Form/File/d323b2a938
	  
  await f.speak
	 	(`Once application is approved, you can conver this application into Student.`)
			
  await f.wait(1500)
  await f.close_modal()
	
});