const PatientsRouter = require("./patients");
const QuestionRouter = require("./questions")

const constructorMethods = (app) =>{
    app.use("/", PatientsRouter);
    // app.use("/", QuestionRouter);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
}

module.exports = constructorMethods;