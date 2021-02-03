import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">contact book</Link>
                </div>
                <div>
                    <Link to="/addcontacts" className="btn btn-light ml-auto">create contact</Link>
                </div>
                

            </nav>
        </div>
    )
}

export default Navbar
