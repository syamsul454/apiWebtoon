const connection = require('./../models')
const comic = connection.komik
const user = connection.user
const episode = connection.episode
const page = connection.page

// data Comic --------------------------------
exports.listComics = (req, res) => {
    comic.findAll().then(comic => res.send({ 
                
                Message :  "comic data successfully obtained",
                Status : 200,
                comic
                }
            )
        )
        .catch((error) => res.status(404).json(
            ResponseFormat.error(
                error,
                "somthing went wrong when reterieve the data",
                404,
                "error"
            )
        ))
    }
//  data comic Berdasarkan id --------------------
exports.listComic = (req, res) => {
    comic.findAll({
        where : {id : req.params.id}
    }).then(comic =>{
        if (comic != '') {

   res.send({ 
            Message :  "Comic data successfully obtained",
            Status : 200,
            comic,
           
            }
        )
    } else {
        res.send({ 
            Message :  "data not found",
            Status : 404
            }
        )
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

// data episode ----------------------------------
exports.listEpisodes = (req, res) => {
    episode.findAll({
        where : {titleId : req.params.id}
    }).then(episode =>{
        if (episode != '') {

   res.send({ 
            Message :  "Episode data successfully obtained",
            Status : 200,
            episode
           
            }
        )
    } else {
        res.send({ 
            Message :  "data not found",
            Status : 404
            }
        )
    }
 Status : 404
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

exports.listPages = (req, res) => {
    page.findAll({
            include : [{
                    model: episode,
                    as: "pages"
                    }],
        where : { episodeId : req.params.episodeId}
    }).then(page =>{
        
        if (page != '') {

   res.send({ 
            Message :  "Page data successfully obtained",
            Status : 200,
            page
            }
        )
    } else {
        res.send({ 
            Message :  "data not found",
            Status : 404
            }
        )
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





