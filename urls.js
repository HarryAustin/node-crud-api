
const { postsController, createController} = require('./controllers/postController');

const urls = {
    '/api/products-GET': postsController,
    '/api/products-POST': createController,
}


module.exports = urls;