module.exports = (req, res, next) => {
    console.log("Logged on " + new Date().toLocaleDateString());
    next()
}