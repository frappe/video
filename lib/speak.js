import say from 'say';

export default {
	voice : null,
	skip_speak: false,

	toggle_speak: async function(flag) {
		this.skip_speak = flag;
	},

	use_voice : function (voice) {

		this.voice = voice;
	},

	speak : async function (text) {
		if(!this.skip_speak) return;

		var voice = this.voice;
		if(!voice) throw 'Please set voice first';

		return new Promise((resolve, reject) => {
			say.speak(text, voice, 1, err => {
				if(err) {
					return reject(err);
				}
				resolve();
			});
		});
	},
}