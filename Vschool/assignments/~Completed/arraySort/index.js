function leastToGreatest(arr) {
    let order = arr.sort((a, b) => a - b)
    return order;
}

function greatestToLeast(arr) {
    let order = arr.sort((a, b) => b - a)
    return order;
}

function lengthSort(arr) {
    let order = arr.sort((a, b) => a.length - b.length)
    return order;
}

function alphabetical(arr) {
    let order = arr.sort()
    return order;

}


function byAge(arr) {
    let order = arr.sort((a, b) => a.age - b.age)
    return order;

}


module.exports = {
    leastToGreatest,
    greatestToLeast,
    lengthSort,
    alphabetical,
    byAge
}