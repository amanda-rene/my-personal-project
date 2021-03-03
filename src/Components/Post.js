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
            timeTraining: '',
            timeRolling: '',
            newPost: false,
            
        }
        
   
       
    }

    addPost = async (e) => {
        e.preventDefault();
        const {technique, notes, dateTrained, timeTraining, timeRolling} = this.state;
        try {
            const post  = await axios.post
            ('/api/add/post', {technique, notes, dateTrained, timeTraining, timeRolling})
            this.props.addPost(post.data)
            this.props.history.push('/post')
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

                <h3>Time Trained</h3>
                    <h4>Start</h4>
                    <TextField
                    type='time'
                    name='timeTraining'
                    value={this.timeTraining}
                    
                    
                    format="HH:mm"
                    onChange={this.changeHandler}
                    />
                    <h4>Finish</h4>
                    <TextField
                    type='time'
                    name='timeTraining'
                    value={this.timeTraining}
                    
                    
                    format="HH:mm"
                    onChange={this.changeHandler}
                    />
            
                <h3>Time Rolling</h3>
                    <input 
                    type='number'
                    min='0'
                    max='10'
                    placeholder='hours'
                    />
                    <input
                    type='number'
                    min='0'
                    max='59'
                    placeholder='minutes'
                    name='time rolling'
                    value={this.timeRolling}
                    onChange={this.changeHandler}/>
                    {/* <TimePicker 
                    name='timeRolling'
                    value={this.timeRolling}
                    showNow={false}
                    onChange={this.changeHandler}
                    minuteStep={5}/> */}
                

               

                <br></br>
                <button onClick={this.toggleNewPost} type='submit'>Add Post</button>
               </form>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {postReducer}) (Post);