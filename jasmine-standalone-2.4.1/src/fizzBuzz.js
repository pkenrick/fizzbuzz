function Javabuzz(){
};


Javabuzz.prototype = {
	isDivisibleBy: function(divisor, number) {
		return number % divisor === 0
	},

  checkNumber: function(number) {
    if (number === 0) {
      console.log(number)
      return number
    }
    else if (this.isDivisibleBy(15, number)) {
      console.log('FizzBuzz');
      return 'FizzBuzz'
    }
    else if (this.isDivisibleBy(5, number)) {
      console.log('Buzz')
      return 'Buzz'
    }
    else if (this.isDivisibleBy(3, number)) {
      console.log('Fizz')
      return 'Fizz'
    }
    else {
      console.log(number)
      return number
    }
  }




};

var javabuzz = new Javabuzz();
var N = 100
var numbers = Array.apply(null, {length: N + 1}).map(Number.call, Number)
var val;
var a = numbers
for (val of a) {
  javabuzz.checkNumber(val);
}