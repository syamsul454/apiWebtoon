const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page



exports.listEpisode = (req, res) => {
    episode.findAll({
            where : {titleId :req.params.idComic} }
        ).then(episodes=> {
        if (episodes != '') {
        res.send({
            status : 200, 
            message : 'success',
            episodes
        })
         
        } else {
        res.send({
            message : 'Episode not found',
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

exports.detailEpisode = (req, res) => {
    episode.findAll({
            where : {titleId :req.params.idComic, id : req.params.idEpisode}}
        ).then(episodes=> {
        if (episodes != '') {
        res.send({
            status : 200, 
            message : 'success',
            episodes
        })
         
        } else {
        res.send({
            message : 'Episode not found',
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


exports.addEpisode = (req, res) => {
   episode.create({
                titleId : req.params.idComic,
                episode : req.body.episode,
                image : req.body.image
   }). then(result => {
        if (result) {
        res.send({
            status : 200,
            Message : 'Succes',
            result
            })
    } else {
        res.send({ 
            status : 304,
            Message : 'failed to input data'
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

exports.update = (req, res) => {
    episode.update(
            req.body,
             { 
            where: {id : req.params.idEpisode}
   }).then(episodes =>{
            res.send({
                status : 200,
                message : 'Sukses',
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

exports.delete = (req, res) => {
    episode.destroy({
        where: {id : req.params.idEpisode}
  }).then(episodes=> {
    res.send({
        status : 200,
        message : 'sukses'
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

