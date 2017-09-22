import { Selector, ClientFunction, t } from 'testcafe';

export default {
	async fill_field(_fieldname, value, keyword) {

		this.scroll_to_field(_fieldname);

		// swap if 2nd argument was meant to be keyword for Link
		if (keyword && value.length < keyword.length) {
			[value, keyword] = [keyword, value];
		}

		var field = await this.get_field(_fieldname);
		var { input, fieldtype, fieldname } = field;

		if (fieldtype == "Link") {
			// type keyword
			var to_type = keyword || value;
			await click_and_type(input, to_type);
			await this.wait_for_ajax();
			// click link option
			await this.click_element(`.frappe-control[data-fieldname="${fieldname}"] .link-field li`, value);
		}
		else if (fieldtype == "Select") {
			var option = Selector("option[value='" + value + "']");
			await t.click(input).click(option);
		}
		else if (['Data', 'Currency', 'Float', 'Text Editor'].includes(fieldtype)) {
			await click_and_type(input, value);
		}
		else if(fieldtype === 'Check') {
			await t.click(input);
		}
		else if(fieldtype === 'Date') {
			await this.pause(1);
			await click_and_type(input, value);
		}
		else {
			await click_and_type(input, value);
		}

		async function click_and_type(input, text) {
			await t.click(input).typeText(input, text, { replace: true });
		}

	},

	async scroll_to_field(fieldname) {
		var label = null;
		if (this.is_field_a_label(fieldname)) {
			label = fieldname;
			fieldname = null;
		}

		if (fieldname) {
			this.scroll_to_element(`.frappe-control[data-fieldname="${fieldname}"]`)
		}

		if (label) {
			this.scroll_to_element('label', label, 1);
		}
	},

	async get_fieldname(fieldname) {
		var label;
		if (fieldname.includes(' ') || has_upper_case(fieldname)) {
			label = fieldname;
			fieldname = null;
		}

		function get_field(fields_dict) {
			if (label) {
				var fields = Object.keys(fields_dict).map(key => fields_dict[key]);
				var field = fields.find(f => f.df.label === label);
				return field;
			} else {
				return fields_dict[fieldname];
			}
		}
	},

	async get_field(fieldname) {

		var field = await Selector(() => {
			var label;

			if (is_field_a_label) {
				label = fieldname;
				fieldname = null;
			}

			function get_field(fields_dict) {
				if (label) {
					var fields = Object.keys(fields_dict).map(key => fields_dict[key]);
					var field = fields.find(f => f.df.label === label);
					return field;
				} else {
					return fields_dict[fieldname];
				}
			}

			function return_field(field) {
				if (!field) {
					return null;
				}
				if (field.df.fieldtype === 'Table') {
					return field.$wrapper[0];
				}
				if (field.df.fieldtype === 'Text Editor') {
					return field.$wrapper.find('[contenteditable=true]:visible')[0];
				}
				if (field.df.fieldtype === 'Check') {
					return field.$wrapper[0];
				}
				return field.$input[0];
			}

			// Priority 1: Modal
			if ($('body').hasClass('modal-open')) {
				const field = get_field(cur_dialog.fields_dict);
				return return_field(field);
			} // Priority 2: Grid
			else if ($(".grid-row-open").is(":visible")) {
				if (label) {
					fieldname = cur_frm.cur_grid.docfields.find(f => f.label === label).fieldname;
				}

				var wrapper = $(".grid-row-open div[data-fieldname='" + fieldname + "']:visible");
				if (wrapper.length === 0) {
					return null;
				}
				var fieldtype = wrapper.attr("data-fieldtype");
				if (fieldtype === "Text Editor") {
					return wrapper.find('[contenteditable=true]:visible')[0];
				}
				return wrapper.find("input")[0];
			} else if(cur_frm) {
				// Priority 3: Form
				var field = get_field(cur_frm.fields_dict);
				return return_field(field);
			} else {
				// Priority 4: General fields
				const $input = $(`[data-fieldname="${fieldname}"]`);
				return $input[0];
			}

		}, { dependencies: { fieldname, is_field_a_label: this.is_field_a_label(fieldname) } })();

		if (!field) {
			throw `${fieldname} not found`;
		}

		let input = field;
		const fieldtype = input.getAttribute('data-fieldtype');
		fieldname = input.getAttribute('data-fieldname');

		if (fieldtype === 'Text Editor') {
			input = Selector(input).find('[contenteditable=true]');
		}
		if (fieldtype === 'Check') {
			input = Selector(input).find('label');
		}

		return {
			input, fieldtype, fieldname
		};

	},

	is_field_a_label(fieldname) {
		return fieldname.includes(' ') || (/[A-Z]/.test(fieldname));
	},

	async check(field) {
		const label = await this.select_element('[data-fieldname=' + field.df.fieldname + '] .label-area');
		if ((val == 1 && !field.input.checked) || (val == 0 && field.input.checked)) {
			await t.click(label);
		}
	},

	async uncheck(fieldname) {
		const field = await this.get_field(fieldname);
		const label = await this.select_element('[data-fieldname=' + fieldname + '] .label-area');
		if (field.input.checked) {
			await t.click(label);
		}
	},

	async click_form_button(text) {
		const selector = `button[data-fieldtype="Button"]`;
		await this.scroll_to_element(selector, text);
		await this.click_element(selector, text);
	},

	async click_print_icon() {
		await this.click_element('i.fa-print');
	},

	async click_form_menu() {
		await this.click_element('.btn-default', 'Menu');
	},

	async click_toolbar_button(text) {
		let button_text, dropdown_item;

		if (text.includes(':')) {
			[button_text, dropdown_item] = text.split(":")
		} else {
			button_text = text;
		}

		await this.click_element('.form-inner-toolbar .btn', button_text);

		if (dropdown_item) {
			await t.wait(1000);
			await t.click_dropdown_item(dropdown_item)
		}
	},

	async set_sidebar_image(file) {
		const sidebar_image = await this.select_element('.page-container:visible .layout-side-section .sidebar-image-wrapper');
		await t.click(sidebar_image).wait(1000);
		await this.upload_file(file);
	},


	// Child table functions

	async open_row(table_name, row) {
		var table = await this.get_field(table_name);
		var open_btn = await Selector(table.input).find("[data-idx='" + row + "'] .btn-open-row");
		await t.click(open_btn);
	},

	async add_row(table_name) {
		var table = await this.get_field(table_name);
		var add_btn = Selector(table.input).find(".grid-add-row");
		await t.click(add_btn).wait(500);
	},

	async insert_above() {
		await t.click(".grid-row-open .grid-insert-row");
	},

	async insert_below() {
		await t.click(".grid-row-open .grid-insert-row-below");
	},

	async close_row() {
		await t.pressKey("esc");
	},

	// Sections

	async click_section(section) {
		await this.click_element('.section-head', section);
	},

	async scroll_to_section(section, time) {
		await this.scroll_to_element('.form-section .uppercase', section, time);
	},
}
