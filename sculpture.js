var Sculpture = function(title) {
	var model = {};
	
	model._lastId = 0;
	model._title = title;
	model._collection = [];
	
	model.title = function() {
		return this._title;
	};
	
	model.add = function(data) {
		// Data should be a JSON object, which we'll add a few things to
		this._lastId = this._lastId + 1;
		data._id = this._lastId;
		
		this._collection.push(data);
		return data._id;
		
	};
	model.each = function(iterator) {
		// Pass this a function which takes a parameter of an item in the model
		for (var i = 0; i < this._collection.length; i++) {
			iterator(this._collection[i]);
		}
	};
	model.get = function(id) {
		// Pass this an ID of an item and it will find you that item
		for (var i = 0; i < this._collection.length; i++) {
			if (this._collection[i]._id == id) {
				return this._collection[i];
			}
		}
	};
	model.first = function() {
		return this._collection[0];
	};
	model.last = function() {
		var previous = this._collection.length-1;
		return this._collection[previous];
	};
	model.count = function() {
		return this._collection.length;
	};
	model.all = function() {
		return this._collection;
	};
	model.empty = function() {
		this._collection = [];
	};
	
	return model;
};