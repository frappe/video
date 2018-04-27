import { Selector } from 'testcafe';
import f from '../../lib';

const video_title = "Fee Structure"


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

		In this video, we will learn how to create fee structure in E R P Next.`)

	await f.add_slide({
		title: "Fee Structure",
		bullet_points: [ 'Fee Category', 'Fee Accounts' ],
			})

	await f.speak(`Fee Structure is composed of fee categories and amount based on which total fee is calculated. for the specific Program.`)

	await f.remove_slide()

	await f.speak(`Fee Structure is created for a specific Program and academic term.`)

	await f.speak(`Before creating a fee structure, we need to create fee categories.`)

	await f.click_icon("Schools")

	await f.scroll(400)

	await f.click_module_item("Fee Category")

	await f.pause(1)

	await f.click_primary_button("New")

	await f.speak(`Enter fee category name.`)

	await f.fill_field("Name", "Library Fee")

	await f.click_primary_button("Save")

	await f.pause(1)

	await f.speak(`This way, you can add more fee categories.`)

	await f.speak(`Now, lets create Accounts needed for creating fee structure.`)

	await f.search("chart of ac", "Open Chart of Accounts")

	await f.click_tree_node("Application of Funds (Assets) - WC")

	await f.click_tree_node("Current Assets - WC")

	await f.click_tree_node("Accounts Receivable - WC")

	await f.click_tree_node_option("Add Child")

	await f.fill_field("New Account Name", "Fee Receivable")

	await f.fill_field("Account Type", "Receivable")

	await f.click_primary_button("Create New")

	await f.pause(1)

	await f.click_tree_node("Fee Receivable - WC")

	await f.speak(`Same way, we can also add an income account in which fee income will be booked.`)

	await f.click_tree_node("Income - WC")

	await f.click_tree_node("Direct Income - WC")

	await f.click_tree_node("Student Fee - WC")

	await f.speak(`Now, we can create a Fee Structure.`)

	await f.goto_desk()

	await f.click_icon("Schools")

	await f.scroll(200)

	await f.click_module_item("Fee Structure")

	await f.click_primary_button("New")

	await f.hover_element("label","Student Category")

	await f.speak(`You can create separate Fee Structure for each Catetory of Student, even if the belonged to
		same program and term.
		`)

	await f.fill_field("Student Category", "Open", "open")

	await f.speak(`Select program.`)

	await f.fill_field("Program", "BCS-FY", "bcs")

	await f.hover_element("label","Academic Term")

	await f.hover_element("label","Academic Year")

	await f.speak(`Select term and year as per the requirement.`)

	await f.speak(`Now we can select Fee categories.`)

	await f.open_row("components", 1)

	await f.fill_field("Fees Category","Tuition Fee", "tu")

	await f.fill_field("Amount", "2500")

	await f.insert_above("components")

	await f.fill_field("Fees Category","Hostel Fee", "hos")

	await f.fill_field("Amount", "1500")

	await f.insert_above("components")

	await f.fill_field("Fees Category","Library Fee", "libr")

	await f.fill_field("Amount", "300")

	await f.close_row()

	await f.speak(`Select account related details.`)

	await f.hover_element("label", "Receivable Account")

	await f.speak(`Select a receivable account here.`)

	await f.fill_field("Receivable Account", "Fee Receivable - WC", "fee rece")

	await f.hover_element("label", "Income Account")

	await f.speak(`Select fee income account.`)

	await f.fill_field("Income Account", "Student Fee - WC", "student fe")

	await f.hover_element("label", "Cost Center")

	await f.speak(`Select Cost Center as per your requirement.`)

	await f.speak(`Save and submit Fee Structure.`)

	await f.click_primary_button("Save")

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.speak(`Once Fee Structure is created, you can link it in various other masters.`)

	await f.pause(4)
	
	await f.search("program", "Program List")

	await f.click_list_item("BCS-FY")

	await f.scroll_to_section("Fee Schedule")

	await f.add_row("fees")

	await f.open_row("fees", 1)

	await f.fill_field("Fee Structure", "FS00011", "11")

	await f.close_row()

	await f.click_primary_button("Save")

	await f.speak(`With this, this Fee Structure will be applicable to all the students who enroll for this program.
			Based on fee structure, Fee schedule and Fee receipt will be created for Students.
		`)

	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});