import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
  
    
    state = {
      count: 0
    }
    increment=()=>{
      this.setState({
        count:this.state. count + 1
      })
    }
    
  
  
  render(){
    return(
      <div><h2>Counter App</h2>
      <button onClick={ this.increment }>
        clicked {this.state.count}times
      </button>
      </div>

    )
    
  }
}
export default App 