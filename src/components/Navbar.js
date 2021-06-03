import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


// const navbarSearchForm = {
//     minWidth: '125px'
// };

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#098c8c'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" style={{marginLeft: 'auto'}}>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">
                                <i className="glyphicon glyphicon-home"></i>Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/listings">Listings</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
