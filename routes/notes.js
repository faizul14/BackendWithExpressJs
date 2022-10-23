var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const v = new Validator();

const { Note} = require('../models')

router.post('/test', async (req, res) => {
    res
    .json({
        message : "ini berhasil"
    })
    .status(200)
});

router.post('/addnote', async (req, res) => {

    const schema = {
        name: 'string',
        tittle: 'string',
        note: 'string|optional'
    }

    const validate = v.validate(req.body, schema);
    if( validate.length) {
        return res
                .json({
                    validate
                })
                .status(400)
    }

    const note = await Note.create(req.body);

    res.json({
        message: "Succes tambah data",
        code : 200
    })
    .status(200);
});


router.put('/updateNote/:id', async (req, res) => {
    const id = req.params.id;
    let note = await Note.findByPk(id);
    if(!note){
        return res.json({
            message : "Data not found"
        })
    }

    const schema = {
        name: 'string|optional',
        tittle: 'string|optional',
        note: 'string|optional'
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res
        .json({validate})
        .status(400)
    }

    note = await note.update(req.body);
    res.json({
        note
    })
    
})

router.delete('/deleteNote/:id', async (req, res) => {
    const id = req.params.id;
    let note = await Note.findByPk(id);
    if(!note){
        return res
        .json({
            message: 'Data not found'
        })
    }

    await note.destroy();
    res
    .json({
        message: "Succes delete note"
    })
    .status(200);
})

router.get('/', async(req, res) => {
    const note = await Note.findAll();
    res
    .json({
        note
    })
})

router.get('/findNote/:id', async(req, res) => {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    if(!note){
        return res
        .json({
            message: 'Data not found'
        })
    }

    res
    .json({
        note
    })
    .status(200);
})


module.exports = router;