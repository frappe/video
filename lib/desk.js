import { Selector, ClientFunction, t } from 'testcafe';

export default {
	async login(username, password) {
		await t
			.typeText("#login_email", username)
			.typeText("#login_password", password)
			.click(".btn-login")
			.expect(Selector("#body_div").exists).ok()
		await this.hide_testcafe_bar()
	},

	async goto_desk() {
		await t.click("a.navbar-brand img.erpnext-icon")
	},

	async click_icon(name) {
		await this.click_element(`div.case-wrapper[data-name='${name}']`);
		await this.wait_for_ajax();
	},

	async click_module(module_name) {
		await this.click_element(`.module-link[data-name='${module_name}']`);
		await this.wait_for_ajax();
	},

	async click_module_item(module_item_name) {
		await this.click_element('.module-section-link', module_item_name);
		await this.wait_for_ajax();
	},

	async click_list_item(text) {
		await this.click_element('.list-item a', text);
	},

	async click_notification() {
		await t.click('.dropdown-navbar-new-comments')
	},

	async click_user_button() {
		await t.click('.dropdown-navbar-user');
	},

	async click_help_button() {
		await t.click('.dropdown-help');
	},

	async click_dropdown_item(text) {
		await t.click_element('.dropdown-menu li', text);
	},

	async hover_element(el, text, time = 1) {
		const element = await this.select_element(el, text);
		await t.hover(element);
		await this.pause(time);
	},

	async click_element(el, text) {
		const element = await this.select_element(el, text);
		await t.click(element);
	},

	async click_link(href) {
		await this.click_element("a[href='" + href + "']");
		await this.wait_for_ajax();
	},

	async click_primary_button(label) {
		var button = await Selector(() => {
			if ($('body').hasClass('modal-open')) {
				return cur_dialog.get_primary_btn()[0];
			} else {
				let selector = '.btn-primary.primary-action:visible';
				if(label) selector += `:contains("${label}")`;
				return $(selector)[0];
			}
		}, { dependencies: { label } });
		await t.click(button);
		await this.wait_for_ajax();
	},

	async search(keyword, result) {
		await t
			.click("#navbar-search")
			.typeText("#navbar-search", keyword)
			.wait(500)
			.click(Selector("li").withText(result));
	},

	async scroll_to_element(el, text, time = 1) {
		time = time * 1000;
		const selector = `${el}:visible:contains("${text}")`;

		const value = await t.eval(() => {
			return $(selector).offset().top - 150;
		}, { dependencies: { selector } });

		await this._scroll(value, time);
	},

	async scroll(value, time = 1) {
		time = time * 1000;
		await this._scroll(value, time);
	},

	async _scroll(value, time) {
		await t.eval(() => {
			$('html, body').animate({
				scrollTop: value
			}, time);
		}, {
				dependencies: { value, time }
			});
		return new Promise(res => {
			setTimeout(res, time);
		});
	},

	async upload_file(file) {
		const upload_input = await this.select_element('.file-upload:visible input.input-upload-file');
		if(!Array.isArray(file)) {
			file = [file];
		}
		await t.setFilesToUpload(upload_input, file);
	},

}