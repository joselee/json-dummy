(function(){
	var app = angular.module("jsonDummy", ["ngMaterial"]);
	app.config(["$mdThemingProvider", function($mdThemingProvider){
		$mdThemingProvider.theme("default").primaryPalette("blue-grey").accentPalette("yellow");
	}]);
})();