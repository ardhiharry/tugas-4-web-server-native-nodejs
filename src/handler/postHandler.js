import https from 'https';

const postHandler = {}

postHandler.getAllPost = (req,res) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    https.get(apiUrl, (apiResponse) => {
        let data = "";

        apiResponse.on("data", (chunk) => {
            data += chunk;
        });

        apiResponse.on("end", () => {
            try {
                const jsonData = JSON.parse(data);
                res.statusCode = 200;
                res.end(JSON.stringify(jsonData));
            } catch(err) {
                console.error('Gagal mengurai JSON:', err);
                res.statusCode = 500;
                res.end('Terjadi kesalahan dalam mengolah data.');
            }
        })
    });
}

export default postHandler;
