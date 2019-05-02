const PatientsRouter = require("./patients");
const QuestionRouter = require("./questions")

const constructorMethods = (app) =>{
    app.use("/patients", PatientsRouter);
    app.use("/questions", QuestionRouter);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
}

module.exports = constructorMethods;