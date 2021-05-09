
const posts = require('../Data/posts.json');
const { v4: uuidv4 } = require('uuid');
const utils = require('../utils');

function find() {
    return new Promise((resolve, reject) => {
        resolve(posts)
    })
}

// Get products, and also get id
function create(data) {
    return new Promise((resolve, reject) => {
        const editData = {id: uuidv4(), ...data};
        posts.push(editData);
        utils.fileUpdate('Data/posts.json', posts)
        resolve(editData)
    })
}

function findOne(id) {
    return new Promise((resolve, reject) => {
        // const data = posts.find((p) => id == p.id);
        // OR
        const data = posts.filter((p) => id == p.id);
        resolve(data)
    })
}

function update(id, data) {
    return new Promise((resolve, reject) => {
        const index = posts.findIndex((e) => id == e.id);
        posts[index] = { id, ...data};
        utils.fileUpdate('Data/posts.json', posts)
        resolve(posts[index])
    })
}

function deletePost(id) {
    return new Promise((resolve, reject) => {
        const newPosts = posts.filter((p) => id != p.id)
        console.log(newPosts)
        utils.fileUpdate('Data/posts.json', newPosts)
        resolve(newPosts);
    })
}

module.exports = {
    find,
    create,
    findOne,
    update,
    deletePost
}