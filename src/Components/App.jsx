import React from 'react';
import Grudges from './Grudges'
import NewGrudge from './NewGrudge'

function App(){

    return(
         <div className = "app">
             <NewGrudge />
             <Grudges />
         </div>
    )
}
export default App