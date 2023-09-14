const boot = require("./src/server");

const server = boot()
const port = 3000
server.listen(port,() => {
    console.log(`Server run in http://localhost:${port}`);
})
