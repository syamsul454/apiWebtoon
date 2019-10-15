const express = require('express')
const router = express.Router()


// menagambil data
router.get('/api/v1/webtoons', (req, res) => {
    connection.query('SELECT * FROM tabelepisode', (err, rows) => {
       if (err) throw err
        res.send(rows)
	})
}

// mengambil data berdasarka id
// router.get('/api/v1/webtoon/:id', (req, res) => {
//     const id = req.params.id
//     const index = id - 1    
//     res.send(todos[index])
// })


// router.post('/api/v1/webtoon', (req, res) => {
//     const data = req.body
//     console.log(data)
//     todos.push(data)
//     res.send(todos)
// })


// router.patch('/api/v1/webtoon/:id', (req, res) => {
//     const id = req.params.id
//     const index = id - 1 
//     const t = todos.indexOf(index)
//     const data = req.body    
//     todos[index] = {...todos[index], ...data}
//     res.send(todos)
// })

// router.delete('/api/v1/webtoon/:id', (req, res) => {
//     const id = req.params.id
//     const index = id - 1        
//     todos.splice(index, 1)
//     res.send(todos)
// })


module.exports = router