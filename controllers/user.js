const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const {query} =  req;//Query params: lo que se manda por url después del ?, son variables opcionales
    res.status(202).json({
        msg: 'GET - Controlador',
        query
    });

};
const userPut = (req, res = response) => {

    const id = req.params.id;
    res.status(202).json({
        msg: 'PUT - Controlador',
        id
    });

};
const userPost = (req, res = response) => {

    const { body } = req;
    res.json({
        msg: 'POST - Controlador',
        body
    });

};
const userDelete = (req, res = response) => {

    res.json({
        msg: 'DELETE - Controlador'
    });

};
module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
};