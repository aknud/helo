module.exports = {
    create: (req, res) => {
        const dbi = req.app('db');
        const { username, password} = req.body;
        dbi.new_user([username, password]).then(user => res.status(200).send(user))
        .catch(err => {
            req.session.user = createdUser[0];
            res.status(500).send({errorMessage: 'This is why we cant have nice things.' })
            console.log(err)
        })
    },
    read: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        
    }
}