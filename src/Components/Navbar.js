import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Smrt<b>Crt</b></h3>
                </div>
                <div id="sidebar-menu">
                <ul className="list-unstyled components">
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/promotions"><i className="fa fa-dollar"></i> Hot Deals</Link></li>
                    <li><Link to="/stores"><i className="fa fa-map-marker"></i>  Stores</Link></li>
                    <li><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> My Cart</Link></li>
                </ul>
                <ul className="list-unstyled components">
                    <p>Upload</p>
                    <li><Link to="/upload"><i className="fa fa-camera"></i> Take Photo</Link></li>
                    <li><Link to="/gallery"><i className="fa fa-picture-o"></i> Gallery</Link></li>
                </ul>
                <ul className="list-unstyled components">
                    <p>My Account</p>
                    <li><Link to="/profile"><i className="fa fa-user"></i> My Profile</Link></li>
                    <li><Link to="/settings"><i className="fa fa-cog"></i> Settings</Link></li>
                </ul>
                </div>
                <ul className="list-unstyled CTAs">
                    <li><Link to="/out" className="signoutButton">Sign Out</Link></li>
                </ul>
            </nav>

        );
    }
}

export default Navbar;