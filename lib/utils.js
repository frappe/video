import { Selector, ClientFunction, t } from 'testcafe';

export default {
	wait_for_ajax: Selector("body[data-ajax-state='complete']"),

	async wait_for_modal() {
		await Selector("body.modal-open");
		await t.wait(1000);
	},

	async pause(time = 1) {
		await t.wait(time * 1000);
	},

	/**
	 * @param {string} el - CSS selector for element
	 * @param {string} text - Text content
	 * @return {HTMLElement} If found, returns first visible HTMLElement, else throws
	 */
	async select_element(el, text, {modify_selector=true}={}) {
		// first time in select element
		this.in_select_element = this.in_select_element ?
			this.in_select_element + 1 : 1;

		let selector = el;
		if (modify_selector) {
			if (text) {
				selector = el + ':contains("' + text + '")';
			}
			selector += ':visible';
		}

		let element = null;

		try {
			element = await Selector(() => {
				const res = $(selector);
				if (res.length > 0) {
					return res[0];
				}
				throw `${selector} - Element not found`;
			}, { dependencies: { selector } })();
		} catch(e) {
			if (this.in_select_element === 1) {
				// try one more time
				this.pause(1);
				return this.select_element.apply(this, arguments);
			} else {
				throw e;
			}
		}

		if (element) {
			// found element, reset counter
			this.in_select_element = 0;
		}

		return element;
	},

	async go_back() {
		await ClientFunction(() => {
			window.history.back();
		})();
		await this.pause(0.5);
	},

	hide_testcafe_bar: ClientFunction(() => {
		$("body").append(`
			<style type='text/css'>
				.status-bar-hammerhead-shadow-ui, .root-hammerhead-shadow-ui {
					display: none;
				}
			</style>
		`)
	}),

	async show_message(message, time = 1) {
		const show_message = ClientFunction(() => {
			const msg_box = $('<div>').css({
				"position": "fixed",
				"background": "rgba(0, 0, 0, 0.35)",
				"bottom": "20px",
				"left": "50%",
				"transform": "translateX(-50%)",
				"padding": "20px",
				"text-align": "center",
				"line-height": "30px",
				"font-size": "1.3em",
				"border-radius": "5px",
				"color": "white",
				"display": "none"
			});
			msg_box.append('<span>').text(message);
			msg_box.appendTo('body');

			msg_box.fadeIn(400, function () {
				setTimout(() => msg_box.fadeOut(), time * 1000);
			});
		}, {
			dependencies: { message, time }
		});

		await show_message();
		await this.pause(time);
	}
}