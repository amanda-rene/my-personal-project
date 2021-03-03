module.exports = {
    addPost: async (req, res) => {
        const db = req.app.get('db');
        // const {userId} = req.session.user;
        const userId = 1;
        const {technique, notes, dateTrained} = req.body
        console.log(req.body)
        if(userId){
            const post = await db.Posts.add_post([
                technique, notes, dateTrained, userId
            ])
            res.status(200).send(post)
        }
        if(!userId) {
            return res.status(403).send(`Sorry, that won't work!`)
        }
    },


    editPost: async (req, res) => {
        const db = req.app.get('db');
        // const {userId} = req.session.user;
        const userId = 2;
        const {post_id} = req.params;
        const {technique, notes} = req.body
        if(userId){
            const post = await db.Posts.edit_post ([
                technique, notes, post_id
            ])
            res.status(200).send(post)
        }
        if(!userId) {
            return res.status(403).send(`Sorry, that won't work!`)
        }
    },


    readPost: async (req, res) => {
        const db = req.app.get('db')
        const post = await db.Posts.read_post()
        console.log(post)

        res.status(200).send(post)
    },

    deletePost: (req, res) => {
        req.app.get('db').Posts.delete_post(req.params.id)
        .then( post => res.sendStatus(200))
    },


}