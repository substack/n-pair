module.exports = function npair (xs, cb) {
    if (xs.length === 1) {
        for (var i = 0, l = xs[0].length; i < l; i++) cb([ xs[0][i] ]);
        return;
    }
    var xs_ = xs.slice(0, -1);
    npair(xs_, function (y) {
        var z = xs[xs.length - 1];
        for (var i = 0, l = z.length; i < l; i++) {
            cb(y.concat(z[i]));
        }
    });
};
