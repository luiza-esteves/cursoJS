import http from "node:http";

const server = http.createServer((req,res)=>{

    const {url, method} = req;
    if(url==='/' && method === 'GET'){
        return res.end(
            JSON.stringify({
                status: 200,
                body: "Bem vindo a home - com method GET"
            })
        );
    }

    if(url==='/' && method === 'POST'){
        return res.end(
            JSON.stringify({
                status: 200,
                body: "Bem vindo a home - com method POST"
            })
        );
    }

    res.statusCode = 404;
    return res.end(
        JSON.stringify({
            status: 404,
            body: "404 (Not Found)"
        })
    );
});

server.listen(3000, ()=>{
    console.log("Deu bom");
});