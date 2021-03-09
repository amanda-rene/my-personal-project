import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import DeleteIcon from '@material-ui/icons/Delete'
import {connect} from 'react-redux';
import {readPost, deletePost} from '../redux/postReducer'
import moment from 'moment'
import axios from 'axios'
import Chart from './Chart'


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            toggleShow: false,
    
        }
    }

    componentDidMount(){
        
        axios.get('/api/posts')
        .then(res => {
            this.props.readPost(res.data)
          
        })
        
    }
    
    toggleShowFunc = () => {
        this.setState((prevState)=> {
            return{
            toggleShow: !prevState.toggleShow
            }
        })
    }

    handleDelete = postId => {
        axios.delete(`/api/post/remove/${postId}`)
        .then(res => {this.props.deletePost(res.data)})

    }

    // handleEdit = postId => {
    //     axios.put(`/api/post/${postId}`)
    //     .then(res => {this.props.deletePost(res.data)} )
    // }
  
      
    render(){
    // console.log(this.props)
    const readPost = this.props.post.map((p)=> (<p>Date Trained: {moment(p.dateTrained).format('ll')} <br></br>Technique: {p.technique} <br></br>Notes: {p.notes} 
    <br></br><DeleteIcon onClick={() => this.handleDelete(p.post_id)} alt='delete-icon'/><br></br>
    <button className='btn draw-border' onClick={() => this.handleEdit(p.post_id)} >Edit</button></p> )      
        )
    
  
    return(
        <div>
        <header className='header'><h1>Welcome, {this.props.user.username}</h1>
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <MenuRoundedIcon onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
        
        </header>

        

        <div 
        style={{
            color: 'white'
        }}>
            {readPost}
           
           <Chart/>
            
        </div>
        
        
    </div>
    )
}
}

const mapStateToProps = state =>  {return{...state.postReducer, ...state.userReducer}};

export default connect(mapStateToProps, {readPost, deletePost})(Home);