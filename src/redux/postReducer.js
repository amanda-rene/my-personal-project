import axios from 'axios'

const initialState = {
    post: []
    
}

const ADD_POST = "ADD_POST";
const READ_POST = "READ_POST"
const DELETE_POST = "DELETE_POST"
const EDIT_POST = "EDIT_POST"


export function addPost (technique, notes, dateTrained){
    const post = axios.post('/api/add/post', 
    {technique, notes, dateTrained}).then(res => res.data)
    return{
        type: ADD_POST,
        payload: post
    }
}

export function readPost(post) {
    console.log(post)
    // const post = axios.get('/api/home').then(res => res.data)
    return{
        type: READ_POST,
        payload: post
    }
}

export function deletePost(post){
    // const post = axios.delete('/api/post/remove/:id').then(res => res.data)
    return {
        type: DELETE_POST,
        payload: post
    }
    
}

export function editPost(post){
    return{
        type: EDIT_POST,
        payload: post
    }
}
export default function postReducer( state = initialState, action){
    switch(action.type){
        case ADD_POST:
            return{...state, post: action.payload}
        case READ_POST:
            return{...state, post: [...action.payload]}
        case DELETE_POST:
            return{...state, post: action.payload}
        case EDIT_POST:
            return{...state, post: action.payload}
        default:
            return state
    }
}

// // need  to add post, action and payload. export default reducer and import to calendar.js