
const fs = require('fs');
const path = require('path');

const fileUpdate = (absPath, data) => {
    fs.writeFileSync(path.join(__dirname, absPath), JSON.stringify(data), (err) => {
        if(!err){
            return;
        }else{
            console.log(err)
        }
    })
}




module.exports = {
    fileUpdate
}

