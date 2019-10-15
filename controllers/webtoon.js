const connection = require('./../models')
const komik = connection.komik
const user = connection.user



exports.index = (req, res) => {
     komik.findAll().then(komiks=>res.send(komiks))
}

exports.show = (req, res) => {
    // console.log(req.params.id)
    // user.findOne({id: req.params.id}).then(users=> res.send(users))
}

exports.store = (req, res) => {
    const { title, is_done } = req.body    

    connection.query(`INSERT INTO todos (title, is_done) VALUES ('${title}', '${is_done}')`, (err)=> {
        if (err) throw err
    })    

    res.send({
        success: true,
        data: req.body
    })
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}