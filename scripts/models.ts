module JsonDummy {
    export class Property {        
        public name: string;
        public selectedValueType: IFakerValueType; // TODO: add support for custom value types
        ctor(){
            this.name = "";
            this.selectedValueType = null;
        }
    }
        
    export interface IFakerCategory {
        name: string;
        types: IFakerValueType[];
    }
    
    export interface IFakerValueType {
        name: string;
        ctor: () => any;
    }
}