import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Calendar from './Calendar'
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';

class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            technique: '',
            notes: '',
            loading: true,
            dateTrained: '',
            timeTrained: '',
            timeRolling: ''
        }
        
   
       
    }

    addPost = async (e) => {
        e.preventDefault();
        const {technique, notes} = this.state;
        try {
            const post  = await axios.post('/api/add/post', {technique, notes})
            this.props.addPost(post.data)
            this.props.history.push('/post')
        }
        catch {
            alert (`Couldn't add post :/`)
        }
    }

    addTraining = async (e) => {
        e.preventDefault();
        const {dateTrained, timeRolling, timeTrained} = this.state;
        try{
            const training = await axios.post('/api/add/post', {dateTrained, timeTrained, timeRolling})
            this.props.addTraining(training.data)
            this.props.history.push('/post')
        }
        catch {
            alert(`Couldn't add post :/`)
        }
    }

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


    render(){
        
       

        return (
            <div>
                <header>
                    <h1>Add Training</h1>
                </header>
               <form onSubmit={this.addPost}>
                   <h3>technique</h3>
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
              
                

                {/* <h3>Time Trained</h3>
                    <TimePicker 
                    name='timeTrained'
                    value={this.timeTrained}
                    onChange={this.changeHandler}
                    minuteStep={15}/>
                <h3>Time Rolling</h3>
                    <TimePicker 
                    // name='time rolling'
                    // value={this.timeRolling}
                    // onChange={this.changeHandler}
                    minuteStep={15}/> */}
                

                <Calendar/>

                <br></br>
                <button>Add Post</button>
               </form>
                
                
                
            </div>
        )
    }
}

// const mapStateToProps = state => state;

export default Post;