import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import List from './todos';

class UserList extends Component {

    componentDidMount(){
        this.props.fetchUsers();
        
       
    }

    renderUser(user) {
        return (
            <div className="card card-block" key={user.id}>
                <h4 className="card card-title">{user.username}</h4>
                <p className="card-text">{user.company.name}</p>
                <a className="btn btn-primary">{user.email}</a> 
               
                <List/>
            </div>
        )
    }
    
    render() {
     
        return (
           
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
               
            </div>
           
           
        );
    }
}


function mapStateToProps(state){
  
    
    return {users:state.users};
}
export default connect(mapStateToProps, actions)(UserList);