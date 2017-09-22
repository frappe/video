import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Program and Course"


fixture(video_title)
    .page ("http://hogwarts:8000/login");

test(video_title, async t => {
	
	await f.login('albus.dumbledore@hogwarts.co.uk', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Samantha")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, how to setup Programs and Courses in the E R P Next schools module.`)
		
	await f.add_slide({
		title: "Programs",
				"Courses"
			})
			
	await f.pause(3)

	await f.remove_slide()
			
	await f.speak(`Let's assume that we run an education institute. It offers these three programs.`)
			
	await f.pause(4)
			
	await f.speak(`Each course is of three years duration.`)
			
	await f.pause(4)

	await f.speak(`If a syllabus is defined for an year, then you should create a Program for year fiscal year.`)
			
	await f.pause(4)
			
	await f.add_slide({
			title: "Programs",
				})
			
	await f.speak(`Let's add a new program on these lines.`)

	await f.remove_slide()
			
	await f.click_desk_icon("Program")
				
	await f.speak(`This is a list of existing program offered in your institute.
					Let's add a new Program.
			`)
				
	await f.click_primary_button("New")
		
	await f.speak(`Enter Program Name and Program Code.`)
		
	await f.fill_field("Program Name", "Bachelor of Computer Science - First Year")
		
	await f.fill_field("Program Code", "BCS-FY")
		
	await f.fill_field("Department","Information Technology", "inform")
		
	await f.speak(`Save Program.`)
		
	await f.click_primary_button("Save")
		
	await f.speak(`If the syllabus for the program is defined based on term, then you should create each term as a Program.`)
		
	await f.pause(4)
		
	await f.speak(`Now, let's check how to manage courses.`)
		
	await f.add_slide({
			title: "Courses",
			})
			
	await f.speak(`All the subjects covered in a program are added as a course in E R P Next.`)

	await f.remove_slide()
			
	await f.speak(`For example, these are the subjects in the first year of Customer Science program. Add them as a course.`)
			
	await f.pause(3)
			
	await f.speak(`Lets create a new Course.`)
			
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
			Once a course a project is saved, you can link it with a Program.	
			`)
			
	await f.click_primary_button("Save")
		
	await f.speak(`Like this, you can add all the courses for a Program. Once completed, you can update 
				Course in a program.
				`)
		
	await f.search("program", "Program List")
		
	await f.click_list_item("BCS-FY")
		
	await f.scroll_to_section("Course")
		
	await f.add_row("courses")
		
	await f.open_row("courses", 1)
		
	await f.fill_field("Course","BCS-FY-OOPC" ,"OOPC")
		
	await f.fill_field("Mandatory")
		
	await f.close_row()
		
	await f.speak(`likewise, in the program master, you can update all the relevant courses.`)
		
	await f.add_row("courses")
		
	await f.open_row("courses", 2)
		
	await f.fill_field("Course","BMath-BCS-FY" ,"bmath")
		
	await f.fill_field("Mandatory")
		
	await f.close_row()
		
	await f.click_primary_button("Save")
		
	await f.speak(`In the next video, we will learn how to use Program and course in the operations
			student enrolment and course scheduling.`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});