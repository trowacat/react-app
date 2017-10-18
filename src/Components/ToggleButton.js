import React, { Component } from 'react';

class ToggleButton extends Component {
    render() {
        return (
            <div>
                        <button type="button" id="sidebarCollapse" className="navbar-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" id="search" type="text" placeholder="Search" aria-label="Search" />
                        </form>
            </div>


        );
    }
}

export default ToggleButton;