module.exports = {

    create: (req,res) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        db.create_product([name, description, price, image_url]).then(() => {
            res.sendStatus(200)
        }).catch(error => {
            res.status(500).send({error: "Oops! Something went wrong"})
            console.error('Error on CREATE', error)
        });
    },

    getOne: (req,res) => {
        const db = req.app.get('db');
        db.read_product(req.params.id).then(product => {
            res.status(200).json(product)
        }).catch(error => {
            res.status(500).send({error: "Oops! Something went wrong"})
            console.error('Error on READ', error);
        });
    },

    getAll: (req,res) => {
        const db = req.app.get('db');
        db.read_products().then(products => {
            res.status(200).json(products)
        }).catch(error => {
            res.status(500).send({error: "Oops! Something went wrong"})
            console.error('Error on GET READ', error);
        });
    },

    update: (req,res) => {
        const db = req.app.get('db');
        const { params, query } = req;
        db.update_product({id: params.id, description: query.desc}).then(() => {
            res.sendStatus(200)
        }).catch(error => {
            res.status(500).send({error: "Oops! Something went wrong"})
            console.error('Error on UPDATE', error);
        });
    },

    delete: (req,res) => {
        const db = req.app.get('db');
        db.delete_product(req.params.id).then(() => {
            res.sendStatus(200)
        }).catch(error => {
            res.status(500).send({error: "Oops! Something went wrong"})
            console.error('Error on DELETE', error)
        });
    }
};

