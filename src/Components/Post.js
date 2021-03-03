import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
// import DayPicker from './DayPicker'
import {DatePicker} from 'antd'
import postReducer from '../redux/postReducer'
// import {TimePicker} from 'antd';
import 'antd/dist/antd.css';
// import moment from 'moment';
import {TimePicker} from '@material-ui/pickers'
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField'


class Post extends Component{
    constructor(props){
        super(props);

        

        this.state = {
            technique: '',
            notes: '',
            dateTrained: '',
            
            newPost: false,
            
        }
        
   
       
    }

    addPost = async (e) => {
        e.preventDefault();
        const {technique, notes, dateTrained } = this.state;
        try {
            const post  = await axios.post
            ('/api/add/post', {technique, notes, dateTrained })
            this.props.addPost(post.data)
            this.props.history.push('/home')
        }
        catch {
            alert (`Couldn't add post :/`)
        }
    }

    componentDidMount(){
        axios.post('api/add/post')
        .then (res => {
            this.setState({...res.data, loading:false})
        })
    }

    changeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    toggleNewPost = () => {
        this.setState({
            newPost: !this.state.newPost
        })
    }

 

    render(){
        
    
        return (
            <div>
                <header>
                    <h1>Add Training</h1>
                </header>
               <form onSubmit={this.addPost}>
                   <h3>Technique</h3>
                   <input
                    type='text'
                    placeholder='technique'
                    name='technique'
                    value={this.state.technique}
                    onChange={this.changeHandler}/>
                <br></br>
                    <h3>Notes</h3>
                    <input
                    type='text'
                    placeholder='notes'
                    name='notes'
                    value={this.state.notes}
                    onChange={this.changeHandler}/>
              
                <h3>Date Trained</h3>
                <TextField
                    type='date'
                    name='dateTrained'
                    
                    value={this.dateTrained}
                    onChange={this.changeHandler}/>

               

               

                <br></br>
                {/* <input type='submit' value='Add post'/> */}
                <button onClick={this.toggleNewPost}>Add Post</button>
               </form>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {postReducer}) (Post);