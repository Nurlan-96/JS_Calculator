class Calculator{
    constructor (number) {
        this.number=number;
    }
    plus = function(n){
        this.number+=n;
        return this;
    }
    minus = function(n){
        this.number-=n;
        return this;
    }
    multiply = function(n){
        this.number*=n;
        return this;
    }
    divide = function(n){
        this.number/=n;
        return this;
    }
}

var result = new Calculator(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);
