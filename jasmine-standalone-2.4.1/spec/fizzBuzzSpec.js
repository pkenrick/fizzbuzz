
describe('Javabuzz',function(){


	var javabuzz;

	describe('knows when the number is',function(){
		it('divisible by 3',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(3, 3)).toBe(true);
		});

		it('divisible by 5',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(5, 5)).toBe(true);
		});

		it('divisible by 15',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(15, 15)).toBe(true);
		});
	});

	describe('knows when the number is NOT',function(){
		it('divisible by 3',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(3, 4)).toBe(false);
		});

		it('divisible by 5',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(5, 4)).toBe(false);
		});

		it('divisible by 15',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleBy(15, 4)).toBe(false);
		});
	});

	describe('prints', function() {
		it('"Fizz" when divisible by 3', function() {
			expect(javabuzz.checkNumber(3)).toEqual("Fizz")
		});

		it('"Buzz" when divisible by 5', function() {
			expect(javabuzz.checkNumber(5)).toEqual("Buzz")
		});

		it('"FizzBuzz" when divisible by 15', function() {
			expect(javabuzz.checkNumber(15)).toEqual("FizzBuzz")
		});

		it('the number when not divisible by any', function() {
			expect(javabuzz.checkNumber(4)).toEqual(4)
		});

		it('"0" when number is 0', function() {
			expect(javabuzz.checkNumber(0)).toEqual(0)
		});

	});

		
	





});
