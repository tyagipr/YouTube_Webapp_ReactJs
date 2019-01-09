import React from 'react';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';




const SideBar = () => {
    return (


    <Menu className="bm-menu">
        <h4><Link className="bm-item-list" to="/" activeClassName="active">Home</Link></h4>
        <h4><Link className="bm-item-list" to="/about" activeClassName="activepro">Profile</Link></h4>
    </Menu>

    );
};

export default SideBar;