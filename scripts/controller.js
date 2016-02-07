(function(){
	var app = angular.module("jsonDummy");
	app.controller("Controller", ["$mdDialog", function($mdDialog){
		var _this = this;
		this.jsonClasses = [];
		this.dataTypes = []
		this.generated = null;
		this.selectedType = null;

		this.blacklisted = function (categoryName){
			var blacklist = ["locales", "locale", "localeFallback", "definitions", "helpers"];
			return blacklist.indexOf(categoryName) !== -1;
		};

		_.each(faker, function(category, categoryName){
			if(!_this.blacklisted(categoryName)){
				_.each(category, function(ctor, name){
					_this.dataTypes.push({name:name, ctor:ctor});
				});
			}
		});
		this.dataTypes = _.sortBy(this.dataTypes, "name");
		this.selectedType = this.dataTypes[0];

		this.generate = function(){
			_this.generated = {name:"test", value:_this.selectedType.ctor()};
		};
	}]);
})();