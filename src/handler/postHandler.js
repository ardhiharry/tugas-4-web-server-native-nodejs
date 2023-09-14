const postHandler = {}

postHandler.getAllPost = (req,res) => {
    res.writeHead(200,"OK")
    res.end("Hallo !")
}



module.exports = postHandler