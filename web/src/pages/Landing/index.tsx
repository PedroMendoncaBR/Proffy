import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import LandingImg from '../../assets/landing.svg';

import StudyIcon from '../../assets/study.svg';
import giveClassIcon from '../../assets/give-classes.svg';
import purpleHeartIcon from '../../assets/purple-heart.svg';
import api from '../../services/api';

function Landing() {
  const [ totalConnections, setTotalConnections ] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua Plataforma de estudos online.</h2>
        </div>

        <img 
          src={LandingImg} 
          alt="Plataforma de estudos" 
          className="hero-image" 
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de { totalConnections } conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
