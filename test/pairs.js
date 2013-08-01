var npair = require('../');
var test = require('tape');

test('single', function (t) {
    t.plan(1);
    var results = [];
    
    npair([[1,2,3,4,5]], function (x) {
        results.push(x);
    });
    
    t.deepEqual(results, [
        [1],
        [2],
        [3],
        [4],
        [5]
    ]);
});

test('3-way pairs', function (t) {
    t.plan(1);
    
    var results = [];
    npair([['a','b','c'],[1,2,3,4,5],['y','z']], function (x) {
        results.push(x);
    });
    
    t.deepEqual(results, [
        ['a',1,'y'],
        ['a',1,'z'],
        ['a',2,'y'],
        ['a',2,'z'],
        ['a',3,'y'],
        ['a',3,'z'],
        ['a',4,'y'],
        ['a',4,'z'],
        ['a',5,'y'],
        ['a',5,'z'],
        ['b',1,'y'],
        ['b',1,'z'],
        ['b',2,'y'],
        ['b',2,'z'],
        ['b',3,'y'],
        ['b',3,'z'],
        ['b',4,'y'],
        ['b',4,'z'],
        ['b',5,'y'],
        ['b',5,'z'],
        ['c',1,'y'],
        ['c',1,'z'],
        ['c',2,'y'],
        ['c',2,'z'],
        ['c',3,'y'],
        ['c',3,'z'],
        ['c',4,'y'],
        ['c',4,'z'],
        ['c',5,'y'],
        ['c',5,'z']
    ]);
});
