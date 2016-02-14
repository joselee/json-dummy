module JsonDummy {
    export let app = angular.module("JsonDummy", ["ngMaterial"]);
    app.config(["$mdThemingProvider", ($mdThemingProvider) => {
		$mdThemingProvider.theme("default").primaryPalette("blue-grey").accentPalette("yellow");
	}]);
}