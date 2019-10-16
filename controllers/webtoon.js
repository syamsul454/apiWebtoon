const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page

exports.index = (req, res) => {
     komik.findAll({
         include: [{
            model: user,
            as: "CreateBy",
        }] } 
        ).then(komiks=>res.send(komiks))
}

exports.show = (req, res) => {
   komik.findAll(
    {
         include: [{
            model: user,
            as: "CreateBy",
        }],
         where : {id : req.params.id}
    }).then(komiks=>res.send(komiks))
}

exports.episode = (req, res) => {
     episode.findAll( {
        include: [{
            model: komik,
            as: "komik",
        }],
        where : {titleId : req.params.id}}).then(episodes=>res.send(episodes))
}

exports.detailepisode = (req, res) => {
    const  {id, ep} = req.params
 page.findAll({
         include: [{
            model: episode,
            as: "List",
        }],
         where : {episodeId :ep},
       
    }).then(pages=> res.send(pages)) 

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