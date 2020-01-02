const db = require('../database/dbConfig.js')

module.exports = {
    add,
    findBy,
    findById
}

function findBy(filter){
    return db('users')
    .where(filter)
}

function findById(id){
    return db('users')
    .where({user_id})
    .first()
}



async function add(user){
    const [id] = await db('users').insert(user)

    return findById(id)
}