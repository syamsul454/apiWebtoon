const connection = require('./../models')
const user = connection.user
const comic = connection.komik
const favorite = connection.favorite
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
     user.findAll({
     	}).then(users=> {
        if (users != '') {
        res.send({
            status : 200, 
            message : 'success',users 
        })

        } else {
        res.send({
            message : 'User ID not found',
            Status : 404
        })
        }

    })
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))
}

exports.show = (req, res) => {
    console.log(req.params.id)
    user.findAll({
    		where : {id : req.params.id} }
    	).then(users=> {
        if (users != '') {
        res.send({status : 200, message : 'success',users })
         } else {
        res.send({
            message : 'User ID not found',
            Status : 404
                })
        }
    })
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))

}

exports.listComic = (req, res) => {
    comic.findAll({
            where : {createdBy : req.params.id} }
        ).then(comics=> {
        if (comics != '') {
        res.send({
            status : 200, 
            message : 'success',
            comics 
        })
         
        } else {
        res.send({
            message : 'Comic not found',
            Status : 404
                })
        }
    })
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))

}

exports.detailComic = (req, res) => {
    comic.findAll({
            where : {createdBy : req.params.id, id : req.params.idComic} }
        ).then(comics=> {
        if (comics != '') {
        res.send({
            status : 200, 
            message : 'success',
            comics 
        })
         
        } else {
        res.send({
            message : 'Comic not found',
            Status : 404
                })
        }
    })
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))

}


exports.addComic = (req, res) => {
    console.log(req.params.id)
    comic.create({
        title : req.body.title,
        genre : req.body.genre,
        isFavorite : req.body.isFavorite,
        image : req.body.image,
        createdBy: req.params.id,
        }).then(result => {
            res.send({
                status : 200,
                message : 'Succes',
                result
             })
        })
        .catch((error) => res.status(404).json(
            ResponseFormat.error(
            error,
            "somthing went wrong when reterieve the data",
            404,
            "error"
            )
        ))
}

exports.update = (req, res) => {
   comic.update(
            req.body,
             { 
            where: {id : req.params.idComic}
   }).then(komiks =>{
            res.send({
                status : 'Sukses'
            })
   })
}


exports.delete = (req, res) => {
  comic.destroy({
        where: {id : req.params.idComic}
  }).then(comics=> {
    res.send({message : 'sukses'})
  })
  .catch((error) => res.status(404).json(
            ResponseFormat.error(
            error,
            "somthing went wrong when reterieve the data",
            404,
            "error"
            )
        ))
}


exports.userUpdate = (req, res) => {
   user.update(
            req.body,
             { 
            where: {id : req.params.id}
   }).then(komiks =>{
            res.send({
                status : 'Sukses'
            })
   })
}

exports.userDelete = (req, res) => {
  user.destroy({
        where: {id : req.params.id}
  }).then(users=> {
    res.send({message : 'sukses'})
  })
  .catch((error) => res.status(404).json(
            ResponseFormat.error(
            error,
            "somthing went wrong when reterieve the data",
            404,
            "error"
            )
        ))
}

exports.favorite = (req, res) => {
    favorite.findAll({
            include : [{
                 model : comic,
                 as : "favo"
            }],
            where : { idUser : req.params.idUser} }
        ).then(favorite=> {
           const nama = JSON.stringify(favorite)
        
           res.send(favorite)
    })
    .catch((error) => res.status(404).json(
        ResponseFormat.error(
        error,
        "somthing went wrong when reterieve the data",
        404,
        "error"
        )
    ))

}