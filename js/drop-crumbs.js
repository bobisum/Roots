jQuery(document).ready(function($) {

	// Variables
	var defaults = {
		_breadcrumb: 'breadcrumb',
		_wrapper: 'breadcrumb-wrapper',
		_wrapper_class: '',
		_dropdown: 'breadcrumb-dropdown',
		_dropdown_class: '',
		_dropdown_content: 'Go to...'
	};

	// Init
	$.fn.extend({

		drop_crumbs: function(options){

			// Options
			var options = $.extend(defaults, options);

			return this.each(function(){

				var breadcrumbs = $(this);
				wrap_breadcrumbs(breadcrumbs);

				var dropdown = breadcrumbs.siblings('a');

				function wrap_breadcrumbs(breadcrumbs){
					breadcrumbs.wrap('<div class="' + options._wrapper + " " + options._wrapper_class + '">').before('<a href="" class="' + options._dropdown + " " + options._dropdown_class + '">' + options._dropdown_content + '</a>');
				}

			});
		}
		
	})

});