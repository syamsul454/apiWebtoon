const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page

exports.index = (req, res) => {
    var favorite = req.query.is_favorite
    var title = req.query.title
if (req.query.is_favorite) {

     komik.findAll({
         include: [{
            model: user,
            as: "CreateBy",
        }],
             where : {isFavorite : favorite}
         } ,
       
        ).then(komiks=>res.send(komiks))
    }
     else {
         komik.findAll({
         include: [{
            model: user,
            as: "CreateBy",
        }] } ,
        ).then(komiks=>res.send(komiks))
    }

    if (req.query.title) {
        komik.findAll({
            where : {title : req.query.title }
        }).then(komiks=>res.send(komiks)) 
    } else {
         komik.findAll().then(komiks=>res.send(komiks))
    }
}


exports.favorite = (req, res) => {
    var favorite = req.params.is_favorite
    console.log(favorite)
     komik.findAll({
         include: [{
            model: user,
            as: "CreateBy",
        }],
            where : {isFavorite : favorite}
         } 
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

// tampilkan komik berdasarkan id user
exports.komik = (req, res) => {
    komik.findAll({
            include : [{ 
                model: episode,
                as : 'Episode'
            }],
        where : {createdBy : req.params.id} }
        ).then(komiks=> {
            if (komiks != '') {
                res.send(komiks)
            } else {
                res.send({ message : 'Data not found'})
            }
        })
}

exports.addKomik = (req, res) => {
    console.log(req.params.id)
    komik.create({
        title : req.body.title,
        genre : req.body.genre,
        isFavorite : req.body.isFavorite,
        image : req.body.image,
        createdBy: req.params.id,
        }).then(result => {
            res.send(result)
        })
}

exports.update = (req, res) => {
   komik.update(
            req.body,
             { 
            where: {id : req.params.id_komik}
   }).then(komiks =>{
            res.send({status : 'Sukses'})
   })
}

exports.delete = (req, res) => {
  komik.destroy({
        where: {id : req.params.id_komik}
  }).then(komiks=> {
    res.send({message : 'sukses'})
  })
}