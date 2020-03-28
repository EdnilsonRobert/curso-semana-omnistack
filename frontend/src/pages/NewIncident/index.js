import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (err) {
      console.log(err);
      alert('Erro ao cadastrar caso. Tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="#e62041"/> Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso"/>
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição do caso"></textarea>
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor (R$)"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}