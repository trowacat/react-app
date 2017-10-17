import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Smrt<b>Crt</b></h3>
                </div>
                <div id="sidebar-menu">
                <ul className="list-unstyled components">
                    <li><a href="/myaccount"><i className="fa fa-home"></i> Home</a></li>
                    <li><a href=""><i className="fa fa-dollar"></i> Hot Deals</a></li>
                    <li><a href=""><i className="fa fa-map-marker"></i>  Stores</a></li>
                    <li><a href=""><i className="fa fa-shopping-cart" aria-hidden="true"></i> My Cart</a></li>
                </ul>
                <ul className="list-unstyled components">
                    <p>Upload</p>
                    <li><a href="/myaccount"><i className="fa fa-camera"></i> Take Photo</a></li>
                    <li><a href=""><i className="fa fa-picture-o"></i> Gallery</a></li>
                </ul>
                <ul className="list-unstyled components">
                    <p>My Account</p>
                    <li><a href="/myaccount"><i className="fa fa-user"></i> My Profile</a></li>
                    <li><a href=""><i className="fa fa-cog"></i> Settings</a></li>
                </ul>
                </div>
                <ul className="list-unstyled CTAs">
                    <li><a href="/users/logout" className="download">Sign Out</a></li>
                </ul>
            </nav>

        );
    }
}

export default Navbar;