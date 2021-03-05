import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {connect} from 'react-redux';
import {readPost, deletePost} from '../redux/postReducer'
// import {deletePost} from '../redux/postReducer'
// import {getUser} from '../redux/userReducer'
import axios from 'axios'


class Home extends Component{

    constructor(){
        super();
        this.state = {
            toggleShow: false,
            
        }
    }

    componentDidMount(){
        
        axios.get('/api/posts')
        .then(res => {
            this.props.readPost(res.data)
          
        })

        // axios.delete('/api/post/remove/:post_id')
        // .then(res => {
        //     this.props.deletePost(res.data)
        // })
        
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

    handleEdit = postId => {
        axios.put(`/api/post/${postId}`)
        .then(res => {this.props.deletePost(res.data)} )
    }
  
    // const deletePost = this.props.post.delete((post) => post === post.id)    
    render(){
    // console.log(this.props)
    const readPost = this.props.post.map((p)=> (<p>Date Trained: {p.dateTrained} Technique: {p.technique} Notes: {p.notes} 
    <button onClick={() => this.handleDelete(p.post_id)}>Delete Post</button> 
    <button onClick={() => this.handleEdit(p.post_id)}>Edit Post</button></p> )      
        )
    
  
    return(
        <div>
        <header className='header'><h1>Welcome, {this.props.user.username}</h1>
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
        </header>

        <div>
            {readPost}
            {/* <button onClick={deletePost}>Delete</button> */}
        </div>
        
        
    </div>
    )
}
}

const mapStateToProps = state =>  {return{...state.postReducer, ...state.userReducer}};

export default connect(mapStateToProps, {readPost, deletePost})(Home);