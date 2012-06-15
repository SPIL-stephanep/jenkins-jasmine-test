describe("My Demo Suite", function() {
	it("says hello to you", function() {
		var d = new demoClass();
		var name = 'Stephane';
		expect(d.greet(name)).toEqual('Hello, Stephane');
	});

	it("adds two numbers", function() {
		var d = new demoClass();
		var a = 1;
		var b = 3;
		expect(d.addition(a, b)).toEqual(4);
	});

	it("substracts two numbers", function() {
		var d = new demoClass();
		var a = 5;
		var b = 3;
		expect(d.substraction(a, b)).toEqual(2);
	});
});