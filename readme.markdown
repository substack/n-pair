# n-pair

generate pairings for n-many sets

# example

``` js
var npair = require('n-pair');

npair([['a','b','c'],[1,2,3,4,5],['y','z']], function (x) {
    console.dir(x);
});
```

output:

```
[ 'a', 1, 'y' ]
[ 'a', 1, 'z' ]
[ 'a', 2, 'y' ]
[ 'a', 2, 'z' ]
[ 'a', 3, 'y' ]
[ 'a', 3, 'z' ]
[ 'a', 4, 'y' ]
[ 'a', 4, 'z' ]
[ 'a', 5, 'y' ]
[ 'a', 5, 'z' ]
[ 'b', 1, 'y' ]
[ 'b', 1, 'z' ]
[ 'b', 2, 'y' ]
[ 'b', 2, 'z' ]
[ 'b', 3, 'y' ]
[ 'b', 3, 'z' ]
[ 'b', 4, 'y' ]
[ 'b', 4, 'z' ]
[ 'b', 5, 'y' ]
[ 'b', 5, 'z' ]
[ 'c', 1, 'y' ]
[ 'c', 1, 'z' ]
[ 'c', 2, 'y' ]
[ 'c', 2, 'z' ]
[ 'c', 3, 'y' ]
[ 'c', 3, 'z' ]
[ 'c', 4, 'y' ]
[ 'c', 4, 'z' ]
[ 'c', 5, 'y' ]
[ 'c', 5, 'z' ]
```

# methods

``` js
var npair = require('n-pair')
```

## npair(sets, cb)

Pair each array in the array `sets` together in all the possible combinations,
calling `cb(pairing)` with each possible pairing.

# install

With [npm](https://npmjs.org) do:

```
npm install n-pair
```

# license

MIT
