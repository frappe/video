import { Selector, ClientFunction, t } from 'testcafe';

export default {
	async login(username, password) {
		await t
			.typeText("#login_email", username)
			.typeText("#login_password", password)
			.click(".btn-login")
			.expect(Selector("#body_div").exists).ok()

		await this.add_rubik_font()
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

	async click_tree_node(label) {
		try {
			await this.click_element(`.tree:visible .tree-link:contains("${label}") .fa`);
		} catch (e) {
			await this.click_element(`.tree:visible .tree-link:contains("${label}") .octicon`);
		}
	},

	async click_tree_node_option(option) {
		await this.click_element(`.tree:visible .tree-node-toolbar:visible .btn`, option);
	},

	async search(keyword, result) {
		if (!result) {
			result = keyword;
			keyword = keyword.toLowerCase();
		}
		await t
			.click("#navbar-search")
			.typeText("#navbar-search", keyword)
			.wait(500)
			.click(Selector("li").withText(result));

		await this.wait_for_ajax();
	},

	async scroll_to_element(el, text, time = 1) {
		await this.wait_for_ajax();

		time = time * 1000;
		let selector = `${el}:visible`

		if (text) {
			selector += `:contains("${text}")`;
		}

		const value = await t.eval(() => {
			const el = $(selector);
			if(el.length === 0) {
				throw `Could not find element matching ${selector}`
			}
			return el.offset().top - 150;
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
		const upload_input = await this.select_element('.file-upload:visible .input-upload > input', '', { modify_selector: false });
		if(!Array.isArray(file)) {
			file = [file];
		}
		await t.setFilesToUpload(upload_input, file);
	},

	async close_dialog() {
		await ClientFunction(() => {
			cur_dialog && cur_dialog.cancel();
		})();
		await t.wait(500);
	},

	async add_slide(slide) {
		await t.eval(() => {

			const $slide = $('<div>')
				.addClass('frappe-video-slide')
				.css({
					position: 'fixed',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					'z-index': 9999,
					background: 'white',
					'text-align': 'center',
					display: 'flex',
					'justify-content': 'center',
					'align-items': 'center',
					'flex-direction': 'column',
					'font-family': 'Rubik'
				});

			const $h1 = $(`<h1>${slide.title}</h1>`).css({
				'font-size': '64px',
				'font-weight': 'bold',
			});

			$slide.append($h1);

			if (slide.subtitle) {
				const $h2 = $(`<h2>${slide.subtitle}</h2>`).css({
					'font-size': '50px',
					'font-weight': 'normal',
					'margin-top': 0
				});
				$slide.append($h2);
			}

			if (slide.bullet_points) {
				const $ul = $(`<ul>${slide.bullet_points.map(p => `<li>${p}</li>`).join("")}</ul>`).css({
					'font-size': '35px',
					'text-align': 'left'
				});
				$slide.append($ul);
			}

			if (slide.add_html) {
				$slide.append(`<div>${slide.add_html}</div>`);
			}

			$slide.hide().appendTo('body').fadeIn();

		}, { dependencies: { slide } });
	},

	async remove_slide() {
		await t.eval(() => {
			$('.frappe-video-slide').fadeOut(function() {
				$(this).remove();
			});
		});
	},

	async add_rubik_font() {
		await t.eval(() => {
			$('head').append('<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">');
		});
	}
}