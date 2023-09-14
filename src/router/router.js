const postHandler = require("../handler/postHandler")

const router = {}
router.init = (req,res) => {
    if(req.url === "/api/post/get"){
        postHandler.getAllPost(req,res)
    }

    // silahkan tambahkan routing lain disini

    else {
        res.end("Not Found Route !")
    }
}
module.exports = router