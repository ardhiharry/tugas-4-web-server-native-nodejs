import http from 'http';
import router from './router/router.js';

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

export default boot;
