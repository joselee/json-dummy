(function(){
	var app = angular.module("jsonDummy");
	app.controller("Controller", ["$mdDialog", function($mdDialog){
		var _this = this;
		this.jsonClasses = [];
		this.dataTypes = []
		this.generated = null;
		this.property = {
			name: "",
			type: null,
		};

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
		this.property.type = this.dataTypes[0];

		this.generate = function(){
			_this.generated = {name:_this.property.name, value:_this.property.type.ctor()};
		};

		this.availableMethods = function(){
			var result = {};
			var whitelist = [
				"address",
				"commerce",
				"company",
				"date",
				"finance",
				"hacker",
				"image",
				"internet",
				"lorem",
				"name",
				"phone",
				"random"
			];

			_.each(faker, function(category, categoryName){
				if(whitelist.indexOf(categoryName) !== -1){
					result[categoryName] = category;
				}
			});
			return JSON.stringify(result, null, 4);
		};
	}]);
})();