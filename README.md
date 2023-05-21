# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s_jesse/lotide`

**Require it:**

`const _ = require('@s_jesse/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: checks to see if 2 array type values are equal and the assertion passes.
* `assertEqual(actual, expected)`: assert function to compare primitive type values and see if it passes.
* `assertObjectsEqual(obj1, obj2)`: assert function to compare two objects and see if it passes.
* `countLetters(sentence)`: takes a sentence and returns the count of how many times each letter occurs in the sentence.
* `countOnly(allItems, itemsToCount)`: takes a collection of items and is given what items we care about, will return a specfic subset of those items.  
* `eqArrays(arr1, arr2)`: takes two arrays and checks to see if they are equal and returns true or false accordingly.
* `eqObjects(object1, object2)`: takes two objects and checks to see if they are equal and returns true or false accordingly.
* `findKey(object, callback)`: searches for a key through the object using a callback function to return said key once it matches with a truthy value.
* `findKeyByValue(obj, target)`: should find the key of an object when the value matches.
* `flatten(arr)`: function will "flatten" nested arrays into single array.
* `head(arr1)`: returns first element "head" of an array.
* `letterPositions(sentence)`: takes a sentence and returns an index of where each character occurs in the sentence.
* `map(array, callback)`: takes an array to map and returns new array based on results of callback function.
* `middle(arr)`: should return the "middle" elements of an array, unless 2 or less values, then it should return empty array.
* `tail(arrTail)`: should return an array without the first element.
* `takeUntil(array, callback)`: takes an array and uses a callback function to return the array with desired outcome.
* `without(source, itemsToRemove)`: should take in an array as a source and items to remove as second argument and then return the array without itemsToRemove.
