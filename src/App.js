
import './App.css';
import React from 'react';
import axios from 'axios';


 
   class App extends React.Component{
     constructor(props){
super(props)
//state
this.state={
  users:[]
}
     }
     getUsers(){
      axios('https://randomuser.me/api/?results=5').then(response => this.setState({users: response.data.results})
     
      );
     }
     componentWillMount(){
      this.getUsers();
    }
     
    
render(){
  return(<div>{this.state.users.map(user =><div>
   <h2> {user.name.first}</h2>,
   <hr/>
   <p>{user.email}</p>
    </div>)}
    </div>

  )
}
}
 

export default App;
