const collections = require("./collections");
const questions = collections.questions;


async function insert(info){
    const newQuestion = info.questionsAnswers;
    const questionColl = await questions();
    const insert = await questionColl.insertOne(newQuestion); 
    return insert.insertedId;
}

async function read(info){
    //not sure  if we need this
}


module.exports ={
    insert,
    read
}
