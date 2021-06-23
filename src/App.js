 import React ,{Component,useState} from 'react';
 const App=()=>{
   const [count,setCount]=useState(0);
  const increment=()=>{
     setCount(count+1)
   }
  
   return(
<div>
  <h2>counter app</h2>
  <button onClick={increment}>clicked {count} times

  </button>
</div>
   )
   }
 export default App