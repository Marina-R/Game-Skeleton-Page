$(document).ready(function() {
	
	var myRouter = Backbone.Router.extend({
		routes: {
			'': 'main',
			'play': 'game',
			'leaderBoard': 'leads',
			'settings': 'set',
			'exit': 'goToMain',
			'*notfound': 'main'
		},
		main: function() {
			$('section').hide();
			$('#loading').show();

			setTimeout(function() {
				$('section').hide();
				$('#main').show();
			}, 4000);
		},
		game: function() {
			$('section').hide();
			$('#game-page').show();
		},
		leads: function() {
			$('section').hide();
			$('#leaders-page').show();
		},
		set: function() {
			$('section').hide();
			$('#settings-page').show();
		},
		goToMain: function() {
			$('section').hide();
			$('#main').show();
		},
		error: function() {
			$('section').hide();
			$('#main').show();
		}
	});
	var router = new myRouter();
	Backbone.history.start();
})