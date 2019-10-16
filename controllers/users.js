const connection = require('./../models')
const user = connection.user
const komik = connection.komik
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
     user.findAll({
     		include: [{
            model: komik,
            as: "komik",
        }],
     	}).then(users=>res.send(users))

}

exports.show = (req, res) => {
    console.log(req.params.id)
    user.findAll({
    		include: [{
            model: komik,
            as: "komik",
        }],
    		where : {id : req.params.id} }
    	).then(users=> res.send(users))

}

exports.komik = (req, res) => {
    console.log(req.params.id)
    komik.findAll({

    	where : {createdBy : req.params.id} }
    	).then(komiks=> res.send(komiks))
}

exports.store = (req, res) => {
	const {email,password,name,createdAt, updateAt} = req.body
	const token = jwt.sign({email : req.body.email}, 'my-secret-key')
    user.create({
    		email : req.body.email,
    		password : req.body.password,
    		name : req.body.name})
    .then(function(result){
    	var name = req.body.name
    	res.send({name,token})
    })
}

exports.update = (req, res) => {
     // res.send('update user')
}

exports.delete = (req, res) => {
     // res.send('delete user')
}