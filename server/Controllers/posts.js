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

//     addTraining: async (req, res) => {
//         const db = req.app.get('db');
//         // const {userId} = req.session.user;
//         const userId = 2
//         const {date_trained, time_trained, time_rolling, post_id} = req.body
//         if(userId) {
//             const training  = await db.Training.add_training ([
//                 date_trained, time_trained, time_rolling, post_id
//             ])
//             res.status(200).send(training)
//         }
//         if(!userId){
//             return res.status(403).send(`Sorry, that won't  work!`)
//         }
//     },

//     editTraining: async (req, res) => {
//         const db = req.app.get('db');
//         const {id} = req.session.user;
//         const {date_trained, time_trained, time_rolling} = req.body
//         if(id) {
//             const training = await db.Training.edit_training ([
//                 date_trained, time_trained, time_rolling
//             ])
//             res.status(200).send(training)
//         }
//         if(!id){
//             return res.status(403).send(`Sorry, that won't  work!`)
//         }
//     },

//     deleteTraining: (req, res) => {
//         req.app.get('db').post.delete_training(req.params.id)
//         .then(training => res.sendStatus(200))
//     }
    
}