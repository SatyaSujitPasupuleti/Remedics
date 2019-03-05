const ServerRouter = require("./ServerRouter");

const constructorMethods = (app) =>{
    app.use("/", ServerRouter);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
}

module.exports = constructorMethods;