const connection = require('./../models')
const komik = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page



exports.listPages = (req, res) => {
    page.findAll({
            where : {episodeId :req.params.idEpisode} }
        ).then(pages=> {
        if (pages != '') {
        res.send({
            status : 200, 
            message : 'success',
            pages
        })
         
        } else {
        res.send({
            message : 'Page not found',
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



exports.addPage = (req, res) => {
    console.log(req.body)
    page.create({
        episodeId : req.params.idEpisode,
        page : req.body.page,
        image :req.body.image
    }). then(result => {
        res.send({
        	status : 200,
        	message : 'success',
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


exports.deletePage = (req, res) => {
    page.destroy({
        where: {id : req.params.idPage}
  }).then(pages=> {
    res.send({message : 'sukses'})
  })
}