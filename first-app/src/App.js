import React, {Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

import './App.css';

class App extends Component {
 
  state={
   /*input:[
    {userName : "Yogesh",age : 14},
   ] */
   userName : "Yogesh",age : 14
  }

  nameChangeHandler = (event)=>{
    //console.log(event.target.value);
    this.setState({
      userName : event.target.value,age : 14
    });
    
  }
  
  render(){
    const style={
      color:'#ccc',
      padding:'10px'
    }
    return (
      <div className="App">
        <UserInput  changed = {this.nameChangeHandler} currentUser={this.state.userName}/>
        <UserOutput style={style} name={this.state.userName} age={this.state.age} />
      </div>
    );
  
  }
}

export default App;
