import { Selector } from 'testcafe';
import f from '../lib';

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

			In this tutorial, we will learn how to create assessment result against an Assessment plan.
			`)

	await f.add_slide({
			title: "Assessment Result",
			bullet_points: [ 'Assessment Result', 'Assessment Result Tool'],
			})

	await f.speak(`The actual marks scored by students in the assessment is tracked in assessment result.
			`)

	await f.remove_slide()

	await f.search("assessment result", "Assessment Result List")

	await f.click_primary_button("New")

	await f.speak(`Select a Student for which assessment result is to be created.`)

	await f.fill_field("Student", "STUD00080")

	await f.speak(`Select an Assessment Plan.`)

	await f.fill_field("Assessment Plan", "ASP00001")

	await f.speak(`Assessment Criteria is fetched from Assessment Plan. Enter actual marks scored by the
			student for each assessment criteria.
			`)

	await f.open_row('details', 1)

	await f.fill_field("Score", "18")

	await f.close_row()

	await f.open_row('details', 2)

	await f.fill_field("Score", "7")

	await f.close_row()

	await f.open_row('details', 3)

	await f.fill_field("Score", "4")

	await f.close_row()

	await f.speak(`Based on marks scored by the student, the grade is allocated.`)

	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.speak(`For creating Assessment Results for multiple students at a time`)

	await f.add_slide({
				title: "Assessment Result Tool",
				})

	await f.speak(`you can use assessment result tool.`)

	await f.pause(2)

	await f.remove_slide()

	await f.search("assessment result tool", "Assessment Result Tool")

	await f.speak(`Select Assessment Plan.`)

	await f.pause(2)

	await f.fill_field("Assessment Plan", "ASP00001")

	await f.pause(2)

	await f.speak(`You can see that in a table, student groups and assessment criteria has been fetched.
			You just need to update score earned by a student, and assessment Result should be auto-created.
		`)

	const input = await f.select_element('input[data-criteria="Writing"]:first')
	await t.click(input)

	await f.pressKey('1 8')

	await f.pressKey('tab 8')

	await f.pressKey('tab 7 tab')

	await f.pause(1)

	await f.speak(`You can check that based on the marks entered, Grades are auto-assigned. Also, it creates
			draft of Assessment Result in the backend.
		`)

	await f.pressKey('G o o d space L e a d e r s h i p space s k i l l s tab')

	await f.speak(`Now, we will enter result for another student.`)

	await f.pressKey('tab 7')

	await f.pressKey('tab 6')

	await f.pressKey('tab 5 tab')

	await f.pressKey('L a c k s space s e r i o u s n e s s')

	await f.pressKey('tab')

	await f.hover_element(`button`, "Submit")

	await f.speak(`After entering the marks, click on submit. It will lead to submission of assessment result.`)

	await f.click_primary_button("Submit")

	await f.pause(1)

	await f.close_modal()

	await f.speak(`Let's check assessment result created in the backend.`)

	await f.search("assessment result", "Assessment Result List")
		
	await f.pause(1)
		
	await f.hover_element("a", "Cho Chang")
	
	await f.hover_element("a", "Anthony  Goldstein")
		
	await f.click_list_item("Anthony  Goldstein")
		
	await f.click_print_icon()
		
	await f.pause(1)
		
	await f.scroll(150)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});