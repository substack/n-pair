module.exports = function npair (xs, cb, ix) {
    if (ix === undefined) ix = 0;
    if (xs.length <= ix + 1) {
        for (var i = 0, l = xs[0].length; i < l; i++) cb([ xs[0][i] ]);
        return;
    }
    npair(xs, function (y) {
        var z = xs[xs.length - 1 - ix];
        for (var i = 0, l = z.length; i < l; i++) {
            cb(y.concat(z[i]));
        }
    }, ix + 1);
};
