jQuery(document).ready(function($) {

	// Variables
	var defaults = {
		_button: 'drop-crumbs-button',
		_button_class: '',
		_wrapper: 'drop-crumbs-wrapper',
		_wrapper_class: '',
		_dropdown: 'drop-crumbs-dropdown',
		_dropdown_content: 'Go to...'
	};

	// Init
	$.fn.extend({

		drop_crumbs: function(options){

			// Options
			var options = $.extend(defaults, options);

			return this.each(function(){

				var dropcrumbs = $(this);
				dropcrumbs.addClass(options._dropdown);
				wrap_breadcrumbs(dropcrumbs);

				var dropdown = dropcrumbs.siblings('a');

				// Create needed elements
				function wrap_breadcrumbs(dropcrumbs){
					dropcrumbs.wrap('<div class="' + options._wrapper + " " + options._wrapper_class + '">').before('<a href="" class="' + options._button + " " + options._button_class + '">' + options._dropdown_content + '</a>');
				}

				// Drop the dropdown
				dropdown.click(function(e){
					e.preventDefault();
					$this = $(this);

					$this.toggleClass('active');
				});

			});
		}
		
	})

});