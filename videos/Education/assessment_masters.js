import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Assessment Plan"


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

            Every education institute conducts an assessment to track student's progress.
			`)

	await f.add_slide({
			title: "Student Assessment",
			bullet_points: [ 'Assessment Criteria', 'Grading Scale', 'Assessment Group'],
			})

	await f.speak(`In this video, we will learn how to manage these masters which are 
			needed for managing assessment. Let's start with the Assessment Criteria.
			`)

	await f.remove_slide()

	await f.add_slide({
			title: "Assessment Criteria"
			})

	await f.speak(`Assessment Criteria is a parameter based on which students are assessed.`)

	await f.remove_slide()

	await f.search("assessment criteria", "Assessment Criteria List")

	await f.speak(`These are the existing criteria. Let's create new criteria.`)

	await f.click_primary_button("New")

	await f.fill_field("Assessment Criteria", "Writing")

	await f.fill_field("Assessment Criteria Group", "Academics")

	await f.speak(`You can also create Assessment Criteria Group as needed.`)

	await f.click_primary_button("Save")

	await f.hover_element("a", "Writing")

	await f.speak(`Let's check how to use Grading Scale.`)

	await f.remove_slide()

	await f.add_slide({
			title: "Grading Scale"
				})

	await f.speak(`In the Grading Scale, you can define various grades and threshold for each grade.`)

	await f.remove_slide()

	await f.search("grading sca", "Grading Scale List")

	await f.click_list_item("Standard Grading")

	await f.pause(1)

	await f.scroll(100)

	await f.speak(`Based on the score earned by an Student in an Assessment, Grade will be assigned.
			You can create new Grading Scale from scratch. You can also duplicate this to make one quickly.
		`)

	await f.click_form_menu("Menu")

	await f.click_dropdown_item("Duplicate")

	await f.pause(1)

	await f.scroll(100)

	await f.speak(`Make editing as per your grading scale and save.`)

	await f.speak(`Now we will check how to manage Assessment Group.`)

	await f.add_slide({
			title: "Assessment Group"
			})

	await f.speak(`In an Assessment Group, you can define a hierarchy of examinations conducted in an academic year.`)

	await f.remove_slide()
			
	await f.search("Assessment Grou", "Assessment Group List")
			
	await f.speak(`Assessment Group is a tree-structured master.`)
			
	await f.click_element("a", "Tree") 
		
	await f.speak(`Let us create an Assessment Group for the Institute which conducts four assessment 
			in an academic year, two in each semester.
			`)
		
	await f.click_tree_node("All Assessment Groups")
		
	await f.click_tree_node_option("Add Child")
		
	await f.speak(`Now, we will create Group for the academic year.`)
		
	await f.fill_field("Assessment Group Name", "2018-19")
		
	await f.fill_field("Group Node")
		
	await f.speak(`Check this field to add the academic year 2018-19 as a group.`)
		
	await f.click_primary_button("Create New")
		
	await f.pause(15)
		
	await f.scroll(500)
		
	await f.speak(`Now, we can add the child groups under it.`)
		
	await f.click_tree_node("2018-19")
		
	await f.speak(`Create group for each semester.`)
		
	await f.click_tree_node_option("Add Child")
		
	await f.fill_field("Group Node")
		
	await f.fill_field("Assessment Group Name","2018-19 Semester 1")
		
	await f.click_primary_button("Create New")
		
	await f.speak(`Same way, create a group for the second semester.`)
		
	await f.click_tree_node("2018-19")
		
	await f.click_tree_node_option("Add Child")
		
	await f.fill_field("Group Node")
		
	await f.fill_field("Assessment Group Name","2018-19 Semester 2")
		
	await f.click_primary_button("Create New")
		
	await f.scroll(500)
		
	await f.speak(`Now, we can create an Assessment Group for each assessment.`)
		
	await f.click_tree_node("2018-19 Semester 1")
		
	await f.click_tree_node_option("Add Child")
		
	await f.fill_field("Assessment Group Name","Unit Test 1 2018-19 Semester 1")
		
	await f.click_primary_button("Create New")
		
	await f.pause(1)
		
	await f.scroll(500)
		
	await f.click_tree_node("2018-19 Semester 1")
		
	await f.click_tree_node_option("Add Child")
		
	await f.fill_field("Assessment Group Name","1 Sem Exams 2018-19 Semester 1")
		
	await f.click_primary_button("Create New")
		
	await f.pause(1)
	
	await f.scroll(500)
		
	await f.click_tree_node("2018-19 Semester 2")
		
	await f.speak(`On the same lines, you can also create assessments to be conducted in the second semester.
			`)
	
	await f.add_slide({
			title: "Student Assessment",
			bullet_points: [ 'Assessment Plan', 'Assessment Result'],
			})
			
	await f.speak(`Using these masters, you will be able to create Assessment Plan and Assessment Result which we 
			will learn in the upcoming videos.
			`)

	await f.remove_slide()
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});