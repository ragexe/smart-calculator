class SmartCalculator {
    constructor(initialValue) {
        this.mind = '';
        this.remember('',initialValue)
    }

    add(number) {
        this.remember('+', number);
        return this
    }

    subtract(number) {
        this.remember('-', number);
        return this
    }

    multiply(number) {
        this.remember('*', number);
        return this
    }

    devide(number) {
        this.remember('/', number);
        return this
    }

    pow(number) {
        this.remember('**', number);
        return this
    }

    remember(operator, number){
        this.mind = this.mind.concat(operator).concat(number)
    }

    valueOf() {
        return eval(this.mind)
    }
}

module.exports = SmartCalculator;
