(function($){
	var methods = {
		flash: function(settings){			
			var $this = this, flag = true, i = 0, colors;
			var fontFamily = settings.fontFamily || $this.css('fontFamily');
				var minTextSize = settings.minTextSize || '10';
				var maxTextSize = settings.maxTextSize || '10';
			colors = settings.colors === null ? [] : settings.colors;
			(function f (){				
				if(flag) $this.css('visibility', 'hidden');
				else $this.css('visibility', 'visible');
				if(colors.length > 0) {
					$this.css('color', colors[(i++) % colors.length]);
					i = i % colors.length;
				}
				$this.css('fontFamily', fontFamily);				
				flag = !flag;
				setTimeout(f, settings.flashInterval)
			})();
		},
		scroller: function(settings){
			var parent = this.parent();
			var wrapper = $('<div>', {class: 'wrapper'}).appendTo(parent);
			var nparent = $('<div>', {class: 'perspective'}).appendTo(wrapper);
			var clone = $('<div>', {class: 'crawl', text: this.text()}).appendTo(nparent);
			$(function(){
				clone.addClass('play');
			});

		}
	};
	$.fn.specffect = function(method, options){
		if(!method) $.error('No function specified');
		var settings = $.extend({
			'flashInterval' : '200', //in ms
			'fontFamily': null, //font family
			'minTextSize': '10', //in px
			'maxTextSize': '10', //default	
			'colors': null//default = null, ['red', 'blue', 'black']	
		}, Array.prototype.slice.call(arguments, 1));
		
		if(methods[method]){
			return methods[method].call(this, settings);
		} else {
			$.error('Invalid function');
		}			
	}		
})(jQuery);