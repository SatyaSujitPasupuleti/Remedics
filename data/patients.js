const collections = require("./collections");
const patients = collections.patients;


async function insert(info){
    const newPatient = {
        firstName:info.firstName,
        lastName:info.lastName,
        email:info.email,
        dob:info.dob,
        selections: {}
    }
    const patientColl = await patients();
    const insert = await patientColl.insertOne(newPatient); 
    const patient = await patientColl.find({_id:insert.insertedId});
    return patient;
}

async function addAnswers(info){
    const patientColl = await patients();
    let update = await patientColl.updateOne(
        {email:info.email},
        {$set: {selections:info.selections}}
    );
    return update;
}

async function read(info){
    const patientColl = await patients();
    const patientArray = await patientColl.find({}).toArray();
    return patientArray;
}


module.exports ={
    insert,
    read,
    addAnswers
}
