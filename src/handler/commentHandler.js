import https from 'https';

const commentHandler = {}

commentHandler.getAllComment = (req,res) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    https.get(apiUrl, (apiResponse) => {
        let data = "";

        // Mengumpulkan data dari respons API
        apiResponse.on("data", (chunk) => {
            data += chunk;
        });

        // Menyusun dan mengirim data JSON
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

export default commentHandler;
