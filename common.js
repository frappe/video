import { Selector, ClientFunction, t } from 'testcafe';
import say from 'say';

export var f = {

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

	login : async function (username, password) {
		await t
			.typeText("#login_email", username)
			.typeText("#login_password", password)
			.click(".btn-login")
	},

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

	goto_desk: async function () {
		await t
			.click("a.navbar-brand img.erpnext-icon")
	},

	click_icon : async function (name) {
		await t
			.click("div.case-wrapper[data-name=" + name + "]")
	},

	click_module : async function (module_name) {
		await t
			.click(".module-link[data-name='" + module_name + "']")
	},

	click_link : async function (href) {
		await t.click("a[href='" + href + "']")
	},

	click_print_icon : async function (){
		await t.click("i.fa-print")
	},

	click_primary_button : async function (btn_name) {
		var button = Selector((btn_name) => { 
			return $('button.btn-primary:contains(' + btn_name + '):visible')[0];
		 })
		await t.click(button(btn_name))
	},

	close_modal : async function () {
		const close_btn = Selector(() => { return $(".btn-modal-close:visible")[0];	})
		await t.click(close_btn);
	},

	search : async function (result) {
		await t
			.click("#navbar-search")
			.typeText("#navbar-search", result.toLowerCase())
			.click( Selector("li").withText(result) )
		return this;
	},

	fill_field: async function (fieldname, fieldtype, value) {
		if (fieldtype == "Link") {
			var field = Selector((fieldname) => {
				return $('input[data-fieldname=' + fieldname + ']:visible')[0];
			})
			var result = Selector((value) => {
				return $('li:contains(' + value + '):visible')[0];		
			})
			await t
				.typeText(field(fieldname), value.toLowerCase())
				.click(result(value))
		}

		else if (fieldtype = "Table") {
			return;
		}

		else {
			return;
		}
	},

	fill_items_table : async function (items){
		const close_btn = Selector(() => { return $(".btn-modal-close:visible")[0];	})

		for(var i = 1; i == items.length; i++){
			
			var item = items[i - 1]
			const item_code = Selector("[data-idx='" + i + "'] [data-fieldname='item_code']")
			const qty = Selector("[data-idx='" + i + "'] [data-fieldname='qty']")
			const rate = Selector("[data-idx='" + i + "'] [data-fieldname='rate']")		
			
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
