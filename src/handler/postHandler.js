import https from 'https';

const postHandler = {}

postHandler.getAllPost = (req,res) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    https.get(apiUrl, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            try {
                const postData = JSON.parse(data);
                const posts = postData.map((post) => {
                    return {
                        userId: post.userId,
                        postId: post.id,
                        judulPost: post.title,
                        content: post.body,
                    }
                });
                res.end(JSON.stringify(posts));
            } catch(err) {
                console.error('Gagal mengurai JSON:', err);
                res.statusCode = 500;
                res.end('Terjadi kesalahan dalam mengolah data.');
            }
        })
    });
}

export default postHandler;
