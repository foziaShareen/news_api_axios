// import React from 'react';
// class App extends  React.Component{
//     state={
//         count:0
//     }
//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         });
//     }
//          componentDidMount(){
//             document.title= `clicked ${this.state.count}times`;
//      }
//         componentDidUpdate(){
//             document.title= `clicked ${this.state.count}times`;
//         }
    
//     render(){
//         return(<div>
//             <button onClick={this.increment}>click</button>
//             <h2>{this.state.count}</h2>
//         </div>
//         )
//     }
// }

import React,{Component,useState,useEffect} from 'react';
const App =()=>{
    const [count,setCount]= useState(0);
    useEffect(()=>{
        document.title=`clicked ${count} times`
    }
    )
    const increment =()=>{
setCount(count+1)
    }
return(
    <div>
        <h2>my app</h2>
        <button onClick={increment}>clicked</button>
    </div>
)
    
} 
export default App;
