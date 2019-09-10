import React from 'react';
import Userlist from '../Containers/Userlist';
import UserDetail from '../Containers/UserDetails';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import '../App.css';
// const App = () =>(
//     <div className="main">
//          <div className="submain1">
//          <h2>UserList</h2>
//        <Userlist />
//          </div>
//          <div className="submain2">
//        <h2>User Details</h2>
//        <UserDetail />
//        </div>
//     </div>


// );

function App() {
    return (
        <BrowserRouter>
            <div>
                <h2>React Example</h2>
                <div className="navigation">
                    <ul className="header">
                        <li><NavLink exact to="/">Page1</NavLink></li>
                        <li><NavLink to="/PostListTable">Page2</NavLink></li>
                    </ul>
                </div>
                <div className="main">
                    <div className="submain1">
                        <h2>UserList</h2>
                        <Userlist />
                    </div>
                    <div className="submain2">
                        <h2>User Details</h2>
                        <UserDetail />
                    </div>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;


