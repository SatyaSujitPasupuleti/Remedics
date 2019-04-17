const Pool = require('pg').Pool;
const creds = require('./credentials.json');

const pool = new Pool({
    host: creds.host,
    user: creds.user,
    password: creds.password,
    database: creds.database,
    port: creds.port
});

async function insertGeneral(info){
    pool.query(
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
    pool.query(
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
    pool.query(
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
