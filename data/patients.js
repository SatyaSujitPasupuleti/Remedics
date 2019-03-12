const mysql = require('mysql');
const creds = require('./credentials.json');

const con = mysql.createConnection({
    host: creds.host,
    user: creds.user,
    password: creds.password,
    database: creds.database
});

con.connect((err) => {
    if (err){
        throw err;
    }
    console.log("Successfully connected to: " + creds.database);
});

async function insertGeneral(info){
    con.query(
        'INSERT INTO test SET ?', 
        info, 
        (err, result) =>{
        if (err){
            throw err;
        }
        console.log('Last ID', result.insertId);
    
        return ('Last ID', result.insertId);
    });
}

async function updateGeneral(info){
    con.query(
        'UPDATE test SET ' + info.column + '= ? Where id = ?',
        [info.update, info.id],
        (err, result) =>{
        if (err){
            throw err;
        }
    
        console.log(`Rows changed: ${result.changedRows}`);
    
        return `Rows changed: ${result.changedRows}`;
    });
}

async function deleteGeneral(info){
    con.query(
        'DELETE FROM test WHERE id = ?', 
        [info.id],
        (err, result) =>{
        if (err){
            throw err;
        }
        console.log(`Deleted ${result.affectedRows}`);
    
        return (`Deleted ${result.affectedRows}`);
    });
}

module.exports ={
    insertGeneral,
    updateGeneral,
    deleteGeneral
}