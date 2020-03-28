import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const histtory = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId] );

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      console.log(err);
      alert('Erro ao deletar caso. Tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();
    histtory.push('./');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="BE the Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button"><FiPower/></button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <span>{incident.title}</span>
            <strong>Descrição</strong>
            <span>{incident.description}</span>
            <strong>Valor</strong>
            <span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</span>

            <button onClick={() => handleDeleteIncident(incident.id)}><FiTrash2 size={16} color="#747474"/></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 1:35:23
