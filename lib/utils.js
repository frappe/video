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
	async select_element(el, text) {
		let selector = el;
		if (text) {
			selector = el + ':contains("' + text + '")';
		}
		selector += ':visible';

		let element = await Selector(() => {
			const res = $(selector);
			if (res.length === 0) {
				throw `${selector} - Element not found`;
			}
			return res[0];
		}, { dependencies: { selector } })();

		return element;
	},

	hide_testcafe_bar: ClientFunction(() => {
		$("body").append(`
			<style type='text/css'>
				.status-bar-hammerhead-shadow-ui, .root-hammerhead-shadow-ui {
					display: none;
				}
			</style>
		`)
	})
}