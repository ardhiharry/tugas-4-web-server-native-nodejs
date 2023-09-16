import https from 'https';

const postCommentHandler = {}

postCommentHandler.getAllPostComment = async (req, res) => {
  try {
    const postDataPromise = fetchData('https://jsonplaceholder.typicode.com/posts');
    const commentDataPromise = fetchData('https://jsonplaceholder.typicode.com/comments');

    const [postData, commentData] = await Promise.all([postDataPromise, commentDataPromise]);

    // Menggabungkan data dari kedua API
    const combinedData = postData.map((post) => {
      const matchingComments = commentData.filter((comment) => comment.postId === post.id);

      return {
        id: post.id,
        judulPost: post.title,
        contentPost: post.body,
        comments: matchingComments.map((comment) => ({
          postId: comment.postId,
          namaUser: comment.name,
          emailUser: comment.email,
          contentComment: comment.body,
        })),
      }
    });

    res.end(JSON.stringify(combinedData));
  } catch (err) {
    console.error('Terjadi kesalahan dalam mengambil data:', err);
    res.statusCode = 500;
    res.end('Terjadi kesalahan dalam mengambil data.');
  }
}

function fetchData(apiUrl) {
  return new Promise((resolve, reject) => {
    https.get(apiUrl, (response) => {
      let data = '';

      // Mengumpulkan data dari respons API
      response.on('data', (chunk) => {
        data += chunk;
      });

      // Menyusun dan mengembalikan data JSON saat respons selesai
      response.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          console.error('Gagal mengurai JSON:', error);
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error('Terjadi kesalahan saat mengambil data dari API:', error);
      reject(error);
    });
  });
}

export default postCommentHandler;
