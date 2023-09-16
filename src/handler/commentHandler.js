import https from 'https';

const commentHandler = {}

commentHandler.getAllComment = (req,res) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    https.get(apiUrl, (response) => {
        let data = "";

        // Mengumpulkan data dari respons API
        response.on("data", (chunk) => {
            data += chunk;
        });

        // Menyusun dan mengirim data JSON
        response.on("end", () => {
            try {
                const commentData = JSON.parse(data);
                const comments = commentData.map((comment) => {
                    return {
                        postId: comment.postId,
                        name: comment.name,
                        email: comment.email,
                        content: comment.body,
                    }
                });
                res.end(JSON.stringify(comments));
            } catch(err) {
                console.error('Gagal mengurai JSON:', err);
                res.statusCode = 500;
                res.end('Terjadi kesalahan dalam mengolah data.');
            }
        })
    });
}

export default commentHandler;
