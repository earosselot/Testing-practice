function analyze(array) {
    let object = {};
    object['average'] = average(array);
    object['min'] = min(array);
    object['max'] = max(array);
    object['length'] = array.length;
    return object;
}

function average(array) {
    if (array.length > 0) {
        let sum = 0;
        for (let elem of array) sum += elem;
        return sum / array.length;
    } else {
        return 0;
    }

}

function min(array) {
    if (array.length > 0) {
        let min = array[0];
        for (let elem of array) {
            if (elem < min) {
                min = elem;
            }
        }
        return min;
    } else {
        return undefined;
    }

}

function max(array) {
    if (array.length > 0) {
        let max = array[0];
        for (let elem of array) {
            if (elem > max) {
                max = elem;
            }
        }
        return max;
    } else {
        return undefined;
    }
}

module.exports = analyze;
