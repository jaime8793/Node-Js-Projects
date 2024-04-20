let http = require('http');
let fs = require('fs');

http.createServer(req, res){
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
}
 fileStream.on('error', (err) => {
        res.end(err)
    })
