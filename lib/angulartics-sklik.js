(function(window, angular) {
    'use strict';
	angular
		.module('angulartics.sklik', ['angulartics'])
		.config(['$analyticsProvider', function($analyticsProvider) {
			$analyticsProvider.registerPageTrack(function() {
				{
					var rtgId = window.seznam_retargeting_id;
					if (!rtgId)
						return;

					var src = "//c.imedia.cz/retargeting?id=" + rtgId + "&category=&itemId=&url=" + encodeURIComponent(window.location.href);
					document.createElement("img").src = src;
				}
			});
		}]);
})(window, angular)

