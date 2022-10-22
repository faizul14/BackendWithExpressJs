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

    // if(validate.length){
    //     return res
    //             .status(400)
    //             .json({validate });
    // }

    // res.send('ok');

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

module.exports = router;