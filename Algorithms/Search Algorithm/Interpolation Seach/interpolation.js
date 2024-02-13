const interpolation = (array, value) => {
    let hi = array.length - 1;
    let lo = 0;

    while (value >= array[lo] && value <= array[hi] && lo <= hi) {
        let probe = lo + ((hi - lo) * (value - array[lo])) / (array[hi] - array[lo]);

        if (array[probe] === value) {
            return `${value} found at index: ${probe}`;
        } else if (array[probe] < value) {
            lo = probe + 1;
        } else {
            hi = probe - 1;  
        }
    }

    return `${value} not found in the array`;
};

