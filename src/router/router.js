import postHandler from '../handler/postHandler.js';
import commentHandler from '../handler/commentHandler.js';
import postCommentHandler from '../handler/postCommentHandler.js';

const router = {}
router.init = (req,res) => {
    if(req.url === "/api/post/get") {
        postHandler.getAllPost(req,res)
    }

    if(req.url === "/api/comment/get") {
        commentHandler.getAllComment(req, res);
    }

    if(req.url === "/api/post-comment/get") {
        postCommentHandler.getAllPostComment(req, res);
    }

    // else {
    //     res.end("Not Found Route !")
    // }
}

export default router;
