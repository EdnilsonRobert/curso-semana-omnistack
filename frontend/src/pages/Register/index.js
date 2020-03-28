import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, email, whatsapp, city, uf
    };


    try {
      const response = await api.post('ongs', data);
      alert(`ID de Acesso: ${response.data.id}`);
      history.push('./');
    } catch (err) {
      console.log(err);
      alert('Erro durante o cadastro. Tente novamente');
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size="16" color="#e62041"/>Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG"/>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
          <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp"/>
          <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
          <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF"/>

          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
