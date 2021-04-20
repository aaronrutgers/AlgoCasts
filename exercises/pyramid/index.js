// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    if (n === row) {
        return
    }

    if (stair.length === 2 * n - 1) {
        console.log(stair);
        return pyramid(n, row + 1)
    }

    let add;
    const midpoint = n - 1
    if (midpoint - row <= stair.length && stair.length <= midpoint + row ) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, stair + add)
}
module.exports = pyramid;
