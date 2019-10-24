const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();
require('express-group-routes')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoon')
const UserController = require('./controllers/users')
const EpisodeController = require('./controllers/episode')
const PagesController = require('./controllers/page')

const { authenticated,  } = require('./middleware')

    app.group("/webtoon/api/v1", (router) => {
    router.post('/registrasi',AuthController.signUp)
    router.post('/login',AuthController.signIn)
    // -----------Routing webtoon -----------------
    router.get('/webtoons',WebtoonController.listComics) 
    router.get('/webtoon/:id',WebtoonController.listComic) 
    router.get('/webtoon/:id/episode',WebtoonController.listEpisodes)   
    router.get('/webtoon/:id/episode/:episodeId',WebtoonController.listPages)  



     router.get('/users',authenticated,UserController.index)    
     router.get('/user/:id',authenticated,UserController.show)  
     router.get('/user/:id/comics',authenticated,UserController.listComic)
     router.get('/user/:id/comic/:idComic',authenticated, UserController.detailComic)
     router.get('/user/:idUser/favorites',authenticated, UserController.favorite)
     router.post('/user/:idUser/favorite',authenticated, UserController.addFavorite)
     router.post('/user/:id/comic',authenticated,UserController.addComic)
     router.put('/user/:id/comic/:idComic',authenticated, UserController.update)
     router.delete('/user/:id/comic/:idComic',authenticated, UserController.delete)
     router.put('/user/:id',authenticated, UserController.userUpdate) 
     router.delete('/user/:id',authenticated, UserController.userDelete)

    
     // ------------------------------ Episode ------------------
     router.get('/user/:idUser/comic/:idComic/episode',authenticated, EpisodeController.listEpisode)
     router.get('/user/:idUser/comic/:idComic/episode/:idEpisode',authenticated, EpisodeController.detailEpisode)
     router.post('/user/:idUser/comic/:idComic/episode',authenticated, EpisodeController.addEpisode)
     router.put('/user/:idUser/comic/:idComic/episode/:idEpisode',authenticated, EpisodeController.update)      
     router.delete('/user/:idUser/comic/:idComic/episode/:idEpisode',authenticated, EpisodeController.delete)
      
    
     // ----------------------------- pages ------------------------------------------------
     router.get('/user/:idUser/comic/:idComic/episode/:idEpisode/pages',authenticated, PagesController.listPages)
     router.post('/user/:idUser/comic/:idComic/episode/:idEpisode/page',authenticated, PagesController.addPage)
     router.delete('/user/:idUser/comic/:idComic/episode/:idEpisode/page/:idPage',authenticated,PagesController.deletePage)
           
            
            
       
           
           

    
})

app.listen(port, () => console.log(`Listening on port ${port}!`))