const http = require('http');
const url = require('url');
const database = require('./database');

const requestListener = function (req, res) {
    res.writeHead(200);
    const routes = {
        "/" : index,
        "/route1" : route1,
        "/routedatabase" : routedatabase,
        "/routequery" : routequery
    };
    try {
        routes[url.parse(req.url,true).pathname](req, res);
    } catch (error) {
        console.log(error);
        res.end("e");
    }
  }
  
function index(req, res){
    res.end("Index");
}
function route1(req, res){
    res.end("Route 1");
}
function routedatabase(req, res){
    
    (async() => {
        const test = await database.updateDocument("hello", {"What assembly?" : "Dis assembly"});
        res.end(test.toString());
    })()
}
function routequery(req, res){
    res.end(url.parse(req.url,true).query["q"]);
}
const server = http.createServer(requestListener);
server.listen(8080);