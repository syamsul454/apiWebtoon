const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')
const app = express()
const port = 7000

app.use(bodyParser.json())

const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoon')
const UserController = require('./controllers/users')
const EpisodeController = require('./controllers/episode')

const { authenticated } = require('./middleware')

app.group("/webtoon/api/v1", (router) => {
    //todos API
    router.post('/registrasi', UserController.store)
    router.post('/login',AuthController.login)

    // -----------Routing webtoon -----------------
    router.get('/webtoons',authenticated, WebtoonController.index) 
    router.get('/webtoon/:id', WebtoonController.show) 
    router.get('/webtoon/:id/episode', EpisodeController.index)   
    router.get('/webtoon/:id/episode/:ep', EpisodeController.show)  
    router.post('/webtoon', WebtoonController.store)    
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)
    // -------------------------------------------------------
    // --------------------- Routing User----------------------
    router.get('/users',authenticated, UserController.index)    
    router.get('/user/:id',authenticated, UserController.show)  
    router.get('/user/:id/komik',authenticated, WebtoonController.komik)
    router.get('/user/:id_user/komik/:id_komik/episode/:id_episode',authenticated, EpisodeController.index)
    router.get('/user/:id_user/komik/:id_komik/episode',authenticated, EpisodeController.index)
    router.post('/user/:id_user/komik/:id_komik/episode',authenticated, EpisodeController.store)
    router.get('/user/:id_user/komik/:id_komik/episode/:id_episode/images',authenticated, EpisodeController.images)
    router.put('/user/:id/komik/:id_komik',authenticated, WebtoonController.update)
    router.delete('/user/:id/komik/:id_komik',authenticated, WebtoonController.delete)
    router.post('/user/:id/komik', WebtoonController.addKomik)
    router.patch('/user/:id', UserController.update)    
    router.delete('/user/:id', UserController.delete)

    
})

app.listen(port, () => console.log(`Listening on port ${port}!`))