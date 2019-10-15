const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page

exports.index = (req, res) => {
     komik.findAll().then(komiks=>res.send(komiks))
}

exports.show = (req, res) => {
    console.log(req.params.id)
    komik.findOne({id: req.params.id}).then(komiks=> res.send(komiks))
}

exports.episode = (req, res) => {
    console.log(req.params.id)
    komik.findOne({id: req.params.id}).then(komiks=> {
    if(komik){ 
            episode.findAll({where : {titleId : req.params.id}}).then(episodes =>res.send(episodes))
    }else {
            res.send('data tidak ')
    }

    })
}

exports.detailepisode = (req, res) => {
    komik.findOne({id: req.params.id}).then(komiks=> {
    if(komik){ 
            episode.findAll({where : {titleId : req.params.id}}).then(episodes => {
                if (episode) {
                    page.findAll({where : {episodeId : req.params.id}}).then(pages =>
                      res.send(pages))
                  }
            })
    }else {
            res.send('data tidak ')
    }

    })
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