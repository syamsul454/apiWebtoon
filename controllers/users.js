const connection = require('./../models')
const user = connection.user
const komik = connection.komik

exports.index = (req, res) => {
     user.findAll().then(users=>res.send(users))

}

exports.show = (req, res) => {
    console.log(req.params.id)
    user.findOne({id: req.params.id}).then(users=> res.send(users))
}

exports.store = (req, res) => {
    // const { title, is_done } = req.body    

    // res.send('registasi user')
}

exports.update = (req, res) => {
     // res.send('update user')
}

exports.delete = (req, res) => {
     // res.send('delete user')
}