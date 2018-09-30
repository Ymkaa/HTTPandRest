'use strict';

function createCustomArr() {
    let arr = [];

    function append(element) {
        arr.push(element);
    }

    function shiftLeft() {
        if (arr.length > 1) {
            arr.push(arr.shift());
        }
    }

    function shiftRight() {
        if (arr.length > 1) {
            arr.unshift(arr.pop());
        }
    }

    function swap(index1, index2) {
        if (!Number.isInteger(index1) || index1 < 0 || index1 >= arr.length ||
            !Number.isInteger(index2) || index2 < 0 || index2 >= arr.length ||
            index1 === index2) {
            return false;
        }

        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    function toString() {
        return arr.join(", ");
    }

    return {append, shiftLeft, shiftRight, swap, toString};
}

module.exports = createCustomArr;