import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updaterFn} from './../../ducks/reducer';
import {Link} from 'react-router-dom';

class Auth extends Component {
   constructor(){
       super()

       this.state = {
           username: '',
           password: ''
       }

       this.updateUsernameHandler = this.updateUsernameHandler.bind(this);
   }

   updateUsernameHandler(val){
        this.setState({
            username: val
        })
   }
   updatePasswordHandler = (val) =>{
        this.setState({
            password: val
        })
   }

   registerUser = () => {
       axios.post('/api/auth/register').then(response => {
           this.props.updaterFn(response.data)
       })
   }

    render(){
        return (
            <div>
            <h1>Auth</h1>
            <input type="text" placeholder="username" value={this.state.username}
            onChange={event => this.updateUsernameHandler(event.target.value)}/>
            <input type="text" placeholder="password" value={this.state.password}
            onChange={event => this.updatePasswordHandler(event.target.value)}/>
            <button>Login</button>
        <Link to='/dashboard' ><button onClick={()=>{this.registerUser()}} >Register</button></Link>
            </div>
        )
    }
}


export default connect(null, {updaterFn})(Auth);