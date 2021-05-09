
const Posts = require('../models/postModels');

async function postsController (req, res) {
    if(req.method == 'GET') {
        try{
            const posts = await Posts.find();
            if(!posts){
                res.writeHead(404, {'content-type': 'application/json'})
                res.end(JSON.stringify({'message': 'Sorry No Posts'}))
            }
            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify(posts))
        }
        catch(err) {
            console.log(err)
        }
    }
}


async function createController(req, res){
    try{
        let body = '';
        req.on('data', (chunk, err) => {
            if(err){
                res.writeHead(400, {'content-type':'application/json'})
                return res.end(JSON.stringify({'message':'No Data available'}))
            }
            body += chunk;
        })
    
        req.on('end', async (err) => {
            if(body.length > 1){
                const { title, description, likes } = JSON.parse(body);
                const data = {
                    title,
                    description,
                    likes
                }
                const post = await Posts.create(data);
                res.writeHead(201, {'content-type':'application/json'})
                return res.end(JSON.stringify(post));
            }else{
                res.writeHead(400, {'content-type':'application/json'})
                return res.end(JSON.stringify({'message':'No Data available'}))
            }
        })
    }
    catch(err) {
        console.log(err)
    }
}


async function getPostController(req, res, id) {
    try{
        const post = await Posts.findOne(id);
        console.log(post)
        if(!post){
            res.writeHead(404, {'content-type': 'application/json'})
            res.end(JSON.stringify({'message': 'Sorry No Posts'}))
        }
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(post))
    }
    catch(err) {
        console.log(err)
    }
}


async function updateSinglePostController(req, res, id){
    try{

        const postData = await Posts.findOne(id);
        if(!postData){
            return res.end(JSON.stringify({'message': 'no post to update'}))
        }

        let body ='';
        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', async () => {
            const { title, description, likes } = JSON.parse(body);
            const data = {
               "title":  title || postData.title,
               "description": description || postData.description,
               "likes": likes || postData.likes
            }
            const updatedPost = await Posts.update(id, data);

            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify(updatedPost))
        })

    }catch(err) {
        console.log(err);
    }
}

function deleteController(req, res, id) {
    const post = Posts.deletePost(id);
    if(!post){
        res.writeHead(400, { 'content-type':'application/json'})
        return res.end(JSON.stringify({'message':`no post at ${id}`}))
    }
    res.writeHead(200, { 'content-type':'application/json'})
    return res.end(JSON.stringify({'message':`Post at ${id} deleted`}))
}


module.exports = {
    postsController,
    createController,
    getPostController,
    updateSinglePostController,
    deleteController
}