function multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw ("error error error")
    }
    return x * y;

}



module.exports = multiply;