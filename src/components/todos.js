import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import uuid from 'uuid';

class TodoList extends Component {

    componentDidMount(){
      
        this.props.fetchTodos();
    }

    renderList(list) {
       
        return (
           
               <option key={uuid()}>{list.name}</option>
               
           
        )
    }
    
    render() {
        return (
            <div>
                <br/>
                <div className="form-groups">

  <select className="form-control">
  {this.props.lists.map(this.renderList)}
  </select>
</div>
               
            
            </div>
        );
    }
}


function mapStateToProps(state){
   
   
    return {lists:state.lists};
}
export default connect(mapStateToProps, actions)(TodoList);


//export default TodoList;