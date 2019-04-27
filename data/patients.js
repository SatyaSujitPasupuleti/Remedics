const creds = require('./credentials.json');
const collections = require("./collections");
const mongo = require("mongodb");
const patients = collections.patients;


async function insert(info){
    const newPatient = {
        firstName:info.firstName,
        lastName:info.lastName,
        email:info.email,
        dob:info.dob
    }
    const patientColl = await patients();
    const insert = await patientColl.insertOne(newPatient); 
    const patient = await patientColl.find({_id:insert.insertedId});
    return patient;

}

async function read(info){
   //TODO need to figure out how to read the questions and answers first 
}


module.exports ={
    insert,
    read
}
