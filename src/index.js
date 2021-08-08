exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let min = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i];
        }
    }

    return min;
};

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let max = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        }
    }

    return max;
};

exports.avg = function avg(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg = avg + array[i];
    }
    return avg / array.length;
};
