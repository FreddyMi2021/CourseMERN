import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import SignUp from './Pages/SignUp/SignUp';

function App(){
    return(
        <BrowserRouter>
            <Route exact path='/' component={SignUp}/>
            <Route exact path='/Homepage' component={Homepage}/>
        </BrowserRouter>
    )
}
export default App;