import React from 'react';

import './styles.css'

import logoImg from '../../assets/Logo-login.png';


export default function Logon() {
    return (
        <div id='login'>
            <div className='logoImg'>
                <img src={logoImg} />
            </div>
            <form className='form'>
                <div className='field'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' id='email' />
                </div>
                <div className='field'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' id='password' />
                </div>
                <div className='actions'>
                    <button className='button' type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    );
}