declare var faker: Faker.FakerStatic;
module JsonDummy {
    export class JsonDummyController {
        static $inject = ["$mdDialog"];
        constructor(private $mdDialog){
            
        }
        
        public availableMethods() {
			var result = {};
			var whitelist = [
				"address", "commerce", "company", "date", "finance", "hacker",
				"image", "internet", "lorem", "name", "phone", "random"
			];
			_.each(faker, function(category, categoryName){
				if(whitelist.indexOf(categoryName) !== -1){
					result[categoryName] = category;
				}
			});
			return JSON.stringify(result, null, 4);
		}
    }
    app.controller("JsonDummyController", JsonDummyController);
}
