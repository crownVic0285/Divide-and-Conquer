function sortedFrequency(arr, num) {
    let first = findFirst(arr, num)
    if (first === -1) return first
    let last = findLast(arr, num)
    return last - first + 1
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            return findFirst(arr, num, mid + 1, high)
        } else {
            return findFirst(arr, num, low, mid - 1)
        }
    }
    return -1
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
            return mid;
        } else if (arr[mid] > num) {
            return findLast(arr, num, low, mid - 1)
        } else {
            return findLast(arr, num, mid + 1, high)
        }
    }
    return -1
}
module.exports = sortedFrequency