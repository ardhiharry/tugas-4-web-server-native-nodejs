const http = require("http")
const router = require("./router/router")

const boot = () => {
    const init = http.createServer((req,res) => {
        res.setHeader('Content-Type', 'application/json');
        if(req.method === "GET" || req.method === "POST"){
            router.init(req,res)
        }else {
            res.end("Route Not Found !")
        }
    })
    return init
}

module.exports = boot