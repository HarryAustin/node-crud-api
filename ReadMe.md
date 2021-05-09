# NODE-CRUD-API

## A Basic Crud Api to get used to the fundamentals of node web basics written in vanilla node js

## Criteria

1) Use vanilla node js for literally every basics with libraries like
   --- Nodemon for server reload
   --- uuid for generic ids

2) Use of a json file as a basic "database" with "O.R.Ms" written in models to act as popular moongose or others

### Summary

This project (node-crud-api) was built by me to learn the fundamentals of node and specs of node and a way to challenge myself as well using vanilla node(pure node and no framework). i choose [#Nodemon] because it tends to help reduce the stress of manually reloading the process and it automatically does that for me when i save a file, and p.s it was installed as a dev dependency. i as well choose [#uuid] because that's what everybody uses(LOL, just joking) because it helps hashes a id which helps in security, retains open information and automatically creates an id for me.

## Method

This basic Api gets data from a file, converts to Json and loads them as a node response. It also gets data from a body through the "data" event listener which adds that data to my json file and then overwrite the json file to a new json file with the data, coz we firstly change the list, then as well change the file. It also fetches a single post data with an id and it uses regular expressions (regex) to match the url to what we want and render data how we want

## Run Locally
1) Run this command git clone https://github.com/HarryAustin/node-crud-api.git
2) Run npm install (to install the dependencies if you want to)
3) Open postman or any Api tool and navigate to 127.0.0.1:3000/api/posts or any of this
    --- /api/posts
        /api/create-post
        /api/post/id
        /api/delete/id
4) You can then see your individual responses.

# CREDITS

My credit goes to "[#brad] [#traversy] media's vanilla Node.js REST API No Framework" on youtube, stackoverflow, sir bankole and co...