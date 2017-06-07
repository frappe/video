import { Selector, ClientFunction, t } from 'testcafe';
import say from 'say';

export var f = {

	// TTS 

	voice : undefined,

	use_voice : function (voice) {
		this.voice = voice;
	},

	speak : async function (text) {
		var voice = this.voice;
		return new Promise(function(resolve, reject) {
			say.speak(text, voice, 1, (err) => {
			if(err) {
				return reject(err);
			}
			resolve();
			});
		});
	},

	// Basic Functions
	
	login : async function (username, password) {
		await t
			.typeText("#login_email", username)
			.typeText("#login_password", password)
			.click(".btn-login")
		await this.hide_status_bar()
	},

	goto_desk: async function () {
		await t
			.click("a.navbar-brand img.erpnext-icon")
	},

	click_icon : async function (name) {
		await t.click("div.case-wrapper[data-name='" + name + "']")
		await this.wait_for_ajax()
	},

	wait_for_ajax: Selector("body[data-ajax-state='complete']"),

	wait_for_modal: async function () {
		await Selector("body.modal-open")
		await t.wait(1000)
	},

	search : async function (keyword, result) {
		await t
			.click("#navbar-search")
			.typeText("#navbar-search", keyword)
			.click( Selector("li").withText(result) )
		return this;
	},

	click_module : async function (module_name) {
		await t
			.click(".module-link[data-name='" + module_name + "']")
	},

	click_link : async function (href) {
		await t.click("a[href='" + href + "']")
	},

	click_primary_button : async function () {
		var button = await Selector(() => {
			if ($('body').hasClass('modal-open')) {
				return cur_dialog.get_primary_btn()[0]
			} 
			else {
				return $('button.btn-primary.primary-action:visible')[0];
			}
		})()
		await t.click(button)
		await this.wait_for_ajax()
	},

	click_section : async function (section) {
		var section_heading = Selector((section) => {
			return $('div.section-head:contains('+ section + '):visible')[0]
		})
		await t.click(section_heading(section))
	},

	// Hacks

	hide_status_bar : ClientFunction(() => {
		$("body").append("<style type='text/css'> .status-bar-hammerhead-shadow-ui {\
		display: none; }</style>")
	}),

	highlight_element : ClientFunction((element, duration) => {
		$(element).css('outline','rgba(255,0,0, 0.45) 3px solid');
		setTimeout( function() {
			$(element).css('outline','none');
		}, duration);
	}),


	// Specific Functions

	edit_in_full : async function () {
		await t.click(() => { return $("a.edit-full:visible")[0]; })
		await this.wait_for_ajax()	
	},

	close_modal : async function () {
		const close_btn = Selector(() => { return $(".btn-modal-close:visible")[0];	})
		await t.click(close_btn);
	},

	click_print_icon : async function () {
		await t.click("i.fa-print")
	},

	// Helpers

	get_route: async function () {
		var route = await ClientFunction(() => {
			if ($('body').hasClass('modal-open')) {
				return ".modal-open"
			} 
			else if ( $(".grid-row-open").is(":visible") ) {
				return ".grid-row-open";
			}
			else {
				var route = frappe.get_route()
				return ".page-container[data-page-route='" + route[0]
				+ "/" + route[1] + "']"
			}
		})()

		return route;
	},

	get_field: async function (fieldname) {
		var field = await Selector(() => {
			if ($('body').hasClass('modal-open')) {
				return cur_dialog.fields_dict[fieldname].$input[0]
			}
			else if ($(".grid-row-open").is(":visible")) {
				return 
			} 
			else {
				var wrapper = cur_frm.fields_dict[fieldname].$wrapper
				var fieldtype = wrapper.attr("data-fieldtype")
				
				if (fieldtype == "Text Editor" || "Table") {
					return wrapper[0]
				}
				return cur_frm.fields_dict[fieldname].$input[0]
			}
		}, { dependencies: {fieldname} })()

		return field;
	},

	fill_field: async function (fieldname, value, keyword=false) {
		var field = await this.get_field(fieldname)
		var fieldtype = field.getAttribute("data-fieldtype")

		if (fieldtype == "Link") {
			var result = Selector((value) => {
				return $('li:contains(' + value + '):visible')[0];		
			})

			await t.click(field)

			if (keyword) {
				await t.typeText(field, keyword, {replace: true})
			} else {
				await t.typeText(field, value.toLowerCase(), {replace: true})
			}

			await t.click(result(value))
		}
		else if (fieldtype == "Select") {
			var option = Selector("option[value='" + value + "']")
			await t
				.click(field)
				.click(option)
		}
		else if (fieldtype == "Data" || "Currency" ) {
			await t
				.typeText(field, value, {replace: true})
		}
		else if (fieldtype == "Text Editor"){
			await t
			.click(field)
			.typeText(Selector(field).find(".note-editable"), value, {replace: true})
		}

	},

	check: async function (fieldname) {
		const field = await this.get_field(fieldname)
		const label = await Selector((fieldname) => {
				return $('div[data-fieldname='+ fieldname +'] .label-area:visible')[0]; 
			})
		if (!field.checked) {
			await t.click(label(fieldname))
		}
	},

	uncheck: async function (fieldname) {
		const field = await this.get_field(fieldname)
		const label = await Selector((fieldname) => {
				return $('div[data-fieldname='+ fieldname +'] .label-area:visible')[0]; 
			})
		if (field.checked) {
			await t.click(label(fieldname))
		}
	},

	// Child table functions

	open_row: async function (table_name, row) {
		var table = await this.get_field(table_name)
		var open_btn = Selector(table).find("[data-idx='" + row + "'] .btn-open-row")
		await t.click(open_btn)
	},

	add_row: async function (table_name) {
		var table = await this.get_field(table_name)
		var add_btn = Selector(table).find(".grid-add-row")
		await t.click(add_btn)
		await f.wait(500)
	},

	insert_above: async function () {
		await t.click(".grid-row-open .grid-insert-row")
	},

	insert_below: async function () {
		await t.click(".grid-row-open .grid-insert-row-below")
	},

	fill_items_table : async function (items){
		const close_btn = Selector(() => { return $(".btn-modal-close:visible")[0];	})

		for(var i = 1; i == items.length; i++){
			
			var item = items[i - 1]
			const item_code = Selector("[data-idx='" + i + "'] [data-fieldname='item_code']")
			const qty = Selector("[data-idx='" + i + "'] [data-fieldname='qty']")
			// const rate = Selector("[data-idx='" + i + "'] [data-fieldname='rate']")		
			
			await t
			.click(item_code)
			.click( Selector("li").withText(item.code) )
			
			.click(qty)
			.typeText(qty, item.qty)
			
			// .click(rate)
			// .typeText(rate, item.rate)

		}
	}

}

Object.assign(f, t)
