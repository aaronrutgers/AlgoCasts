// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }
        if (indexOfMin !== i) {
            let tmp = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = tmp
        }
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    const mid = arr.length / 2
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid))
    return merge(leftArr, rightArr)
}

function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    result = [...result, ...left, ...right]
    return result
}

// function merge(left, right) {
//     const results = [];

//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         results.push(left.shift());
//       } else {
//         results.push(right.shift());
//       }
//     }

//     return [...results, ...left, ...right];
//   }

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
