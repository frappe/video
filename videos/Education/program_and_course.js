import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Program and Course"


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

		In this video, we will learn how to setup Programs and Courses in the E R P Next schools module.`)
		
	await f.add_slide({
			title: "Program and Course",
			})
			
	await f.pause(3)

	await f.remove_slide()
			
	await f.speak(`Let's assume that we run an education institute. It offers these three programs.`)
			
	await f.pause(4)
			
	await f.speak(`Each course is of three years duration.`)
			
	await f.pause(4)

	await f.speak(`If a syllabus is defined for an year, then you should create a Program for each academic year.`)
			
	await f.pause(4)
			
	await f.add_slide({
			title: "Program",
			})
			
	await f.speak(`Let's add a new program on these lines.`)

	await f.remove_slide()
			
	await f.pause(1)
			
	await f.click_icon("Program")
				
	await f.click_primary_button("New")
		
	await f.speak(`Enter Program Name and Program Code.`)
		
	await f.fill_field("Program Name", "Bachelor of Computer Science - First Year")
		
	await f.fill_field("Program Code", "BCS-FY")
		
	await f.fill_field("Department","Information Technology", "inform")
		
	await f.speak(`Save Program.`)
		
	await f.click_primary_button("Save")
		
	await f.speak(`If the syllabus for the program is defined based on the term, then you should create a 
			program for each term.
			`)
		
	await f.pause(4)
		
	await f.speak(`Now, let's check how to manage courses.`)
		
	await f.add_slide({
			title: "Course",
			})
			
	await f.speak(`All the subjects covered in a program are added as courses.`)

	await f.remove_slide()
			
	await f.speak(`Suppose these are the subjects in the first year of Computer Science program. Add each as a course.`)
			
	await f.pause(4)
			
	await f.goto_desk()
			
	await f.pause(1)
			
	await f.click_icon("Course")
			
	await f.click_primary_button("New")
			
	await f.speak(`Enter Course Name and Course Code.`)
			
	await f.fill_field("Course Name", "Object Oriented Programming - C++")
			
	await f.fill_field("Course Code", "BCS-FY-OOPC")
			
	await f.speak(`Select a department.`)
			
	await f.fill_field("Department","Information Technology", "inform")
			
	await f.speak(`Save this Course.
			`)
			
	await f.click_primary_button("Save")
		
	await f.speak(`Like this, you can add all the courses for a Program. Once completed, update 
				Course in a program.
				`)
		
	await f.search("program", "Program List")
		
	await f.click_list_item("BCS-FY")
		
	await f.scroll_to_section("Course")
		
	await f.add_row("courses")
		
	await f.open_row("courses", 1)
		
	await f.fill_field("Course","BCS-FY-OOPC" ,"OOPC")
		
	await f.hover_element("label", "Mandatory")
		
	await f.speak(`Check if taking this course in this program is mandatory.`)
		
	//await f.fill_field("Mandatory", "1")
		
	await f.insert_below()
		
	await f.fill_field("Course","BMath-BCS-FY" ,"bmath")
		
	//await f.fill_field("Mandatory")
		
	await f.close_row()
		
	await f.scroll(0)
		
	await f.click_primary_button("Save")
		
	await f.speak(`
		This is how courses will be linked with the Program.
		
		This is an example of how Programs and Courses will be created for the school.`)
		
	await f.pause(3)
		
	await f.speak(`In the upcoming video, we will learn how to use Program and course when creating
			student enrolment and course scheduling.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});