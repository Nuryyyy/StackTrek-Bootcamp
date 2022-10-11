const http = require('http');
const GCF = require('./my_modules/GCF')
const PORT = 3000;
   
const requestListener = (req, res) => {
    res.status(200);
    res.end();
};



http.createServer(requestListener).listen(PORT, err => {
    if(err) {
        console.log(err);
    } else  {
        console.log(`Server running at PORT ${PORT}`);
        GCF(15,20);
    }
});