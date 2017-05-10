function mapReverse(array, callback) {
    var results = [];

    for(var i = array.length - 1; i>=0; i--) {
        results.push(callback(array[i], i, array));
    }

    return results;
}

module.exports = mapReverse;
