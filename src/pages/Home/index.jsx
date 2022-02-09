import React from 'react';
import { Link } from "react-router-dom";

import './styles.css'
import AvatarImg from '../../assets/avatar.png';


export default function Logon() {
    return (
        <header>
            <nav className='navbar'>
                <div className='avatar'>
                    <img src={AvatarImg} />
                </div>
            </nav>
        </header>
    );
}