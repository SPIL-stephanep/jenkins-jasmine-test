describe("My Demo Suite", function() {
	it("greet(): Says hello to you", function() {
		var d = new demoClass();
		var name = 'Stephane';
		expect(d.greet(name)).toEqual('Hello, Stephane');
	});

	it("addition(): Adds two numbers", function() {
		var d = new demoClass();
		var a = 1;
		var b = 3;
		expect(d.addition(a, b)).toEqual(4);
	});

	it("substraction(): Substracts two numbers", function() {
		var d = new demoClass();
		var a = 5;
		var b = 3;
		expect(d.substraction(a, b)).toEqual(2);
	});
});