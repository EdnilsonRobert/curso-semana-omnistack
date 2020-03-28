import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      console.log(err);
      alert('Falha no login. Tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input value={id} onChange={e => setId(e.target.value)} type="text" placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size="16" color="#e62041"/> Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes"/>
    </div>
  );
}
