import say from 'say';

export default {
	voice : null,
	skip_speak: false,

	toggle_speak: async function(flag) {
		this.enable_speech = flag;
	},

	use_voice : function (voice) {

		this.voice = voice;
	},

	speak : async function (text) {

		const no_speech = process.argv[3];
		if(no_speech == '--no-speech') {
			this.enable_speech = false;
		}

		if(!this.enable_speech) {
			this.pause(1)
			return;
		}

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