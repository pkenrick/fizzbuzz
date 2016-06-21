
describe('Javabuzz',function(){


	var javabuzz;

	describe('knows when the number is',function(){
		it('divisible by 3',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});
	});

	describe('knows when the number is NOT',function(){
		it('divisible by 3',function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(4)).toBe(false);
		});
	});





});
