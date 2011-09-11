# Sculpture.js

__Sculpture.js__ is a really dreadful modelling system for your rudimentary Javascript applications. I'm really not very good at Javascript, so to be honest, it's not very good and it doesn't do much.

I'm hoping to improve it over time as I need to and as I get better at Javascript. 

Essentially, you can create models and then add items to them. Nothing is required for each item and each one can have whatever attributes you want. Once you've made an item, you can't delete it or change it, it's pretty much just stuck there. You can get an item from the model by its ID, or loop through all of them. There are also quick functions for finding the first and last one added

__Included are unit tests to make sure that everything works as expected - these are run prior to each commit.__

## Features

* Create a model
* Add items to your model with your choice of attributes
* Get an item from the model by its ID
* Loop through all the items and do something with them
* Get the first or last item
* Find out how many items there are in the model
* Get all the articles back in an array
* Clear everything that's in the model

## How to use

				Articles = new Sculpture("Article");
				
				var article1 = {};
				article1.title = "My first article";
				article1.author = "Tim Rogers";
				article1.datetime = "10th September 2011, 23:34";
				Articles.add(article1);
				
				var article2 = {};
				article2.title = "My second article";
				article2.author = "Tim Rogers";
				article1.datetime = "10th September 2011, 23:42";
				Articles.add(article2);
				
				var first_article = Articles.first();
				var last_article = Articles.last();
				var fifth_article = Articles.get(5);
				var number_of_articles = Articles.count();
				var all_the_articles = Articles.all();
				
				document.write(Articles.title());
				
				Articles.each(function(item) {
					alert(item.title);
				});
				
				Articles.empty();
				
## To-do

* Make it so you can change and delete items once you've made them
* Make items sortable
* Make the library actually useful
* Check with someone that this is built in at least a mildly sensible way

***

*by [Tim Rogers](http://tim-rogers.co.uk) - do with this what you will, since it's crap. Please do make it better, I'll love you. If forever :D If you use this, please share your use case with me and show me any changes!*
				
