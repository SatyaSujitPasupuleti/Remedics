const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/insert/general", { target: "http://localhost:4000/" }));
    app.use(proxy("/update", { target: "http://localhost:4000/" }));
    app.use(proxy("/delete", { target: "http://localhost:4000/" }));
    app.use(proxy("/query", { target: "http://localhost:4000/" }));
};