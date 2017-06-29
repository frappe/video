import { Selector, ClientFunction, t } from 'testcafe';

export default {

	async edit_in_full() {
		await this.click_element('a.edit-full');
		await this.wait_for_ajax();
	},

	async close_modal() {
		await this.click_element(".btn-modal-close");
	},
}