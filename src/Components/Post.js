import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import DayPicker from './DayPicker'
import postReducer from '../redux/postReducer'
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
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
            const post  = await axios.post('/api/add/post', {technique, notes, dateTrained, timeTraining, timeRolling})
            this.props.addPost(post.data)
            this.props.history.push('/post')
        }
        catch {
            alert (`Couldn't add post :/`)
        }
    }

    // addTraining = async (e) => {
    //     e.preventDefault();
    //     const {dateTrained, timeRolling, timeTrained} = this.state;
    //     try{
    //         const training = await axios.post('/api/add/post', {dateTrained, timeTrained, timeRolling})
    //         this.props.addTraining(training.data)
    //         this.props.history.push('/post')
    //     }
    //     catch {
    //         alert(`Couldn't add post :/`)
    //     }
    // }

    componentDidMount(){
        axios.post('api/add/post')
        .then (res => {
            this.setState({...res.data, loading:false})
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleNewPost = () => {
        this.setState({
            newPost: !this.state.newPost
        })
    }

    onTimeSelection = (value, timeString) => {
        console.log("Value:", value,"Time String:", timeString)
        this.setState({ time: value, formattedTime: timeString})
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
                <DayPicker
                    type='date'
                    name='dateTrained'
                    value={this.state.dateTrained}
                    onChange={this.changeHandler}/>

                <h3>Time Trained</h3>
                    <TimePicker 
                    name='timeTrained'
                    value={this.state.timeTrained}
                    onChange={this.onTimeSelection}
                    showNow={false}
                    minuteStep={15}/>
                <h3>Time Rolling</h3>
                    <TimePicker 
                    name='time rolling'
                    value={this.timeRolling}
                    showNow={false}
                    onChange={this.onTimeSelection}
                    minuteStep={5}/>
                

               

                <br></br>
                <button onClick={this.toggleNewPost} type='submit'>Add Post</button>
               </form>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {postReducer}) (Post);