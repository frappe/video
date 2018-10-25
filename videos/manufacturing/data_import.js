import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Data Import"

fixture(video_title)
    .page ("http://gadgets.erpnext.com/login");

test(video_title, async t => {
	
	await f.login('michael.corleone@gadgets.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("Tom")

    await f.toggle_speak(true)
	
	await f.speak(`
        In this tutorial, we will learn how to import data into E R P Next by using`)
        
    await f.add_slide({
		title: "Data Import",
        })
        
    await f.pause(4)

    await f.remove_slide()

    await f.speak(`
        In this tutorial, we will learn how to import data into E R P Next by using`)

	await f.search("dat import", "Data Import List")
		
	await f.speak(`
			Open the document to be printed.
            `)
            
});
		