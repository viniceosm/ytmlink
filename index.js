var demo = new Vue({
	el: '#app',
	data: {
		text: '',
		resultado: ''
	},
	methods: {
		generate() {
			if (this.text.trim() !== '') {
				let linkMusic = this.text.trim();

				
				if (linkMusic.includes('youtu.be/')) {
					linkMusic = linkMusic.replace('youtu.be/', 'music.youtube.com/watch?v=');
				} else if (linkMusic.includes('youtube.com')) {
					linkMusic = linkMusic.replace('youtube.com', 'music.youtube.com');
				}

				this.resultado = linkMusic;
			} else {
				this.resultado = 'Type something.';
			}
		}
		//, focusInput() {
			// this.$refs.surname.focus();
		// }
	}
});