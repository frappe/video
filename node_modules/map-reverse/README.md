# map-reverse

[![Build Status](https://travis-ci.org/AndreyBelym/map-reverse.svg?branch=master)](https://travis-ci.org/AndreyBelym/map-reverse)

*Apply a function to an array from then end to the beginning.*

It's may be useful when iterating an array and deleting its elements at the same time.

## Install
```
npm install map-reverse
```

## Usage
Reverse iteration allows you to delete current element from an array when iterating.
```
var mapReverse = require('map-reverse');

var a = [1, 2, 3, 4, 5, 6, 7];

var b = mapReverse(a, function (item, index) {
    if (item % 2)
        a.splice(index, 1);

    return item;
});

console.log(a);
//[ 2, 4, 6 ]

console.log(b);
//[ 7, 6, 5, 4, 3, 2, 1 ]
```

