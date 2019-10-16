const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page

// tampilan semua episode
exports.index = (req, res) => {
    const id = req.params.id
    const id_komik = req.params.id_komik
    console.log(id_komik)
    if (id) {
         episode.findAll( {
        include: [{
            model: page,
            as: "Page",
        }],
    where : {titleId : id}}).then(episodes=>res.send(episodes))
     } 

    if (id_komik) {
        episode.findAll( {
        include: [{
            model: page,
            as: "Page",
        }],
    where : {titleId : id_komik}}).then(episodes=>res.send(episodes))
     }
    
}


// detaill Episode berdasarkan komik
exports.show = (req, res) => {
    const  {id, ep} = req.params
 page.findAll({
         include: [{
            model: episode,
            as: "List",
        }],
         where : {episodeId :ep},
       
    }).then(pages=> res.send(pages)) 

}

// detail episode berdsarakn user id
exports.show = (req, res) => {
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