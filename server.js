
const http = require('http');
const { postsController, 
        createController, 
        getPostController,
        updateSinglePostController,
        deleteController
    } = require('./controllers/postController');

const { url } = require('inspector');
const urls = require('./urls');


const server = http.createServer((req, res) => {
    if(req.url == '/api/posts' && req.method == 'GET'){
        postsController(req, res);
    }
    else if(req.url == '/api/create-post' && req.method == 'POST'){
        createController(req, res);
    }
    else if(req.url.match(/\/api\/posts\/([0-9]+)/) && req.method == 'GET'){
        const newList = req.url.split('/');
        const id = newList[newList.length-1]
        getPostController(req, res, id);
        console.log(id)
    }
    else if(req.url.match(/\/api\/posts\/([0-9]+)/) && req.method == 'POST'){
        const newList = req.url.split('/');
        const id = newList[newList.length-1]
        updateSinglePostController(req, res, id);
    }
    else if(req.url.match(/\/api\/delete-post\/([0-9]+)/) && req.method == 'POST'){
        const newList = req.url.split('/');
        const id = newList[newList.length-1]
        deleteController(req, res, id);
    }
    // const keys = Object.keys(urls)
    // keys.forEach((val, index) => {
    //     if(req.url == val.split('-')[0] && req.method == val.split('-')[1]){
    //         // console.log('url', req.url, 'and', val.split('-')[0])
    //         // console.log('method', req.method, 'and', val.split('-')[1])
    //         urls[`${req.url}-${req.method}`](req, res)
    //     }
    //     else{
    //         res.writeHead(404, {'content-type':'application/json'})
    //         res.end(JSON.stringify({'message': 'Sorry Page does not exist'}))
    //     }
    // })
    
})

let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})