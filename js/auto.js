export class Auto {
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getTotal(taxRate) {
        return this.price + (this.price * taxRate);
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
    
}

export class AutoWithProperties {
    constructor(data) {
        this._make;
        this._model;
    }

    get make() {
        return this._make;
    }
    
    set make(val) {
        if (val) {
            this._make = val;
        } else {
            this._make = 'No Make';
        }
    }
    
    get model() {
        return this._model;
    }
    
    set model(val) {
        if (val) {
            this._model = val;
        } else {
            this._model = 'No Model';
        }
        
    }
}



