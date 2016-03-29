import {debounce} from 'underscore';

function resize_splash(splash, menu_bar) {
	splash.height(window.innerHeight - menu_bar.height());
}

global.applets = (global.applets || []).concat({
	start() {
		const menu_bar = $('#site-menu-wrapper');
		const splash = $('#splash');
		$(window)
			.on('resize', debounce(() => resize_splash(splash, menu_bar), 250))
			.trigger('resize');
	}
});
