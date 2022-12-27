const errorHandler = (req, res) => {
    res.send("Route does not exist");
};

module.exports = {
    errorHandler,
};