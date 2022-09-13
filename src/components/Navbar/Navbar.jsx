import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends';

const SelectedLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

const Navbar = (props) => {

    return (
        <div className={s.sidebar}>
            <div>
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to="/profile" className={SelectedLink()}>Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to="/dialogs" className={SelectedLink()}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/News" className={SelectedLink()}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Music" className={SelectedLink()}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Settings" className={SelectedLink()}>Settings</NavLink>
                    </div>
                </nav>
            </div>
            <div>

                {/*<Friends friends={props.state.friends}/>*/}
            </div>

        </div>
    )
}

export default Navbar;