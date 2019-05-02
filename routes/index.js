const PatientsRouter = require("./patients");

const constructorMethods = (app) =>{
    app.use("/", PatientsRouter);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
}

module.exports = constructorMethods;