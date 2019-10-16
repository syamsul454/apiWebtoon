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
   episode.create({
                titleId : req.params.id_komik,
                episode : req.body.episode,
                image : req.body.image
   }). then(result => {
        res.send(result)
   })
}
exports.images = (req, res) => {
    console.log(req.params.id_episode)
   page.findAll({
    where : {episodeId : req.params.id_episode}
   }).then(pages=> res.send(pages))
}

exports.update = (req, res) => {
    episode.update(
            req.body,
             { 
            where: {id : req.params.id_episode}
   }).then(episodes =>{
            res.send({status : 'Sukses'})
   })
}

exports.delete = (req, res) => {
    episode.destroy({
        where: {id : req.params.id_episode}
  }).then(episodes=> {
    res.send({message : 'sukses'})
  })
}

exports.addimages = (req, res) => {
    console.log(req.body)
    page.create({
        episodeId : req.params.id_episode,
        page : req.body.page,
        image :req.body.image
    }). then(result => {
        res.send(result)
    })
}