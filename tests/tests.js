test("Ensure operation of QUnit", function() {
	equal("string", "string", "We expect value to be 'string'");
});

module("Method tests");

test("Does Sculpture.title() work?", function() {
	var tests = Sculpture("Tests");
	equal("Tests", tests.title(), "We expect values to be 'Tests'");
});

test("Does Sculpture.add() work?", function() {
	var tests = Sculpture("Tests");
	var newtest = tests.add({'title': 'Sample title'});
	equal(1, newtest, "The result of the add function was the number 1, expected as this is the first record in the model.");
	var result = tests.get(newtest);
	equal('Sample title', result.title, "Getting the result back from the model worked as expected and had the correct data");
});

test("Does Sculpture.get() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var one_id = tests.add(one);
	var two_id = tests.add(two);
	equal(one.title, tests.get(1).title, "The 'title' attribute of the returned object should be one, as in the first object that was added.");
});

test("Does Sculpture.first() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	equal(one.title, tests.first().title, "The title attribute of the result should be equal to that of the first record added");
});

test("Does Sculpture.last() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	equal(three.title, tests.last().title, "The title attribute of the result should be equal to that of the last record added");
});

test("Does Sculpture.each() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	records = [];
	stringtest = true;
	tests.each(function(data) {
		if (typeof(data.title) != 'string') { stringtest = false; }
		records.push(data);
	});
	equal(true, stringtest, "The titles of the objects added all were as expected when running through the each() loop.");
	equal(3, records.length, "We added three records to the model and so we would expect there to be three calls to the each() function's iterator.");
});

test("Does Sculpture.count() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	equal(3, tests.count(), "We added three records so we expect there to be three records in the model.");
});

test("Does Sculpture.all() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	all = tests.all();
	equal(3, all.length, "We added three records so we expect there to be three records when we return all of them.")
})

test("Does Sculpture.empty() work?", function() {
	var tests = Sculpture("Tests");
	var one = { 'title': 'one' };
	var two = { 'title': 'two' };
	var three = { 'title': 'three' };
	tests.add(one); tests.add(two); tests.add(three);
	tests.empty();
	equal(0, tests.count(), "We added some records and then cleared them, so we expect there to be no records left.");
});

