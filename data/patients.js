const collections = require("./collections");
const patients = collections.patients;
const fs = require("fs");

async function insert(info){
    const newPatient = {
        firstName:info.firstName,
        lastName:info.lastName,
        email:info.email,
        dob:info.dob,
        selections: {},
        questionsAnswers: {}
    }
    let data = JSON.stringify(newPatient);
    fs.writeFileSync("./data/questions.json", data, (err) => {
        if (err){
            throw err;
        }
    });
    return newPatient;
}

async function addAnswers(info){
    let patientArray = fs.readFile("./data/questions.txt", (err) => {
        if (err){
            throw err;
        }
    })

    console.log
    return update;
}

async function addQuestions(info){
    const patientColl = await patients();
    let update = await patientColl.updateOne(
        {email:info.email},
        {$set: {questionsAnswers:info.questionsAnswers}}
    );
    return update;
}

async function readOne(info){
    const patientcoll = await patients();
    const patient = await patientcoll.findOne({email:info.email});
    return patient;
}

async function read(info){
    const patientArray = fs.readFile("./data/questions.txt", "utf8", (err) => {
        if (err){
            throw err;
        }
    })
    return patientArray;
}


module.exports ={
    insert,
    read,
    readOne,
    addAnswers,
    addQuestions
}
