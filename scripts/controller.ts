declare var faker: Faker.FakerStatic;
module JsonDummy {
    export class JsonDummyController {
        public properties: Property[];
        public categories: IFakerCategory[];
        public selectedValueType: IFakerValueType;
        public jsonResult: string;
        
        static $inject = ["$mdDialog"];
        constructor(private $mdDialog){
            this.populateCategories();
            this.properties = [];
            this.jsonResult = "";
        }
        
        private populateCategories() {
            this.categories = [];
			var whitelist = [
				"address", "commerce", "company", "date", "finance", "hacker",
				"image", "internet", "lorem", "name", "phone", "random"
			];
			_.each(faker, (types, categoryName) => {
				if(whitelist.indexOf(categoryName) !== -1){
                    let categoryTypes = [];
                    _.each(types, (ctor, typeName) => {
                        categoryTypes.push({name: typeName, ctor: ctor});
                    });
                    this.categories.push({
                        name: categoryName,
                        types: categoryTypes
                    });
				}
			});
		}
        
        public addNewProperty () {
            this.properties.push(new Property());
        }
        
        public generate(){
            let json = {};
            _.each(this.properties, (property: Property) => {
                json[property.name] = property.selectedValueType.ctor();    
            });            
            this.jsonResult = JSON.stringify(json, null, 4);
        }
    }
    app.controller("JsonDummyController", JsonDummyController);
}
