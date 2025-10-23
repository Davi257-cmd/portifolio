import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="particles-background">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}></div>
        ))}
      </div>
      <Container className="hero-content">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="hero-title">
              <span className="hero-greeting">Olá, eu sou</span>
              <br />
              <span className="hero-name">Davi Lucas</span>
            </h1>
            <h2 className="hero-subtitle">Desenvolvedor Full Stack</h2>
            <p className="hero-description">
              Desenvolvedor apaixonado por criar experiências digitais incríveis. Especializado em React, 
              Node.js e tecnologias modernas para transformar ideias em realidade.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="lg" className="hero-cta-btn me-3">
                <i className="bi bi-envelope me-2"></i>
                Entre em Contato
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="hero-cv-btn"
                href="/curriculo_davi.pdf"
                download="Curriculo_Davi_Lucas.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
