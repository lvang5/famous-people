import React, {Component} from 'react';

class Star extends Component {
    constructor(){
        super();
    
        this.state = {UserName: '', UserRole: ''}

    }
    
    handleNameChange = (event) => {
        this.setState({UserName: event.target.value});
    } 
    handleRoleChange = (event) => {
        this.setState({UserRole: event.target.value});
    } 

    logStar = () => {
        console.log(this.state.UserName + " is famous for " + this.state.UserRole);
    }
    

    render() {
        return(
            <div> 
            <input onChange={this.handleNameChange}/>
            <input onChange={this.handleRoleChange}/>
            <button onClick={this.logStar}> Submit </button>
            <br/>
             {this.state.UserName}  is famous for {this.state.UserRole}
          </div>

        );
    }
}

export default Star;