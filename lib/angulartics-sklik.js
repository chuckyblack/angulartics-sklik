(function(window, angular) {
    'use strict';
	angular
		.module('angulartics.sklik', ['angulartics'])
		.config(['$analyticsProvider', function($analyticsProvider) {
			$analyticsProvider.registerPageTrack(function(path) {
				{
					var rtgId = window.seznam_retargeting_id;
					if (!rtgId)
						return;

					var location = window.location;
					var url = location.protocol + "//" + location.hostname + path;
					var src = "//c.imedia.cz/retargeting?id=" + rtgId + "&category=&itemId=&url=" + encodeURIComponent(url);
					window.document.createElement("img").src = src;
				}
			});
		}]);
})(window, angular);

