import axios from 'axios'

const initialState = {
    post: {
        technique: '',
        notes: '',
        dateTrained: '',
        timeTraining: '',
        timeRolling: '',
    }
}

const ADD_POST = "ADD_POST";

export function addPost (technique, notes, dateTrained, timeTraining, timeRolling){
    const post = axios.post('/api/add/post', 
    {technique, notes, dateTrained, timeTraining, timeRolling}).then(res => res.data)
    return{
        type: ADD_POST,
        payload: post
    }
}


export default function postReducer( state = initialState, action){
    switch(action.type){
        case ADD_POST:
            return{...state, post: action.payload}
        default:
            return state
    }
}

// // need  to add post, action and payload. export default reducer and import to calendar.js