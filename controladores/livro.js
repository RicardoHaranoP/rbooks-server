function getLivros (req, res) {
    try{
        res.send("oii")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}