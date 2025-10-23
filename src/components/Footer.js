import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-section">
        <Container>
          <Row className="py-5">
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <div className="footer-brand">
                <div className="footer-logo mb-3">
                  <div className="logo-icon">DL</div>
                  <h5 className="text-white mb-2">Davi Lucas</h5>
                </div>
                <p className="text-white-50 mb-3">
                  Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Sempre em busca de novos desafios e oportunidades de crescimento.
                </p>
                <div className="contact-info">
                  <p className="text-white-50 mb-1">
                    <i className="bi bi-envelope me-2"></i>
                    davillucas324567@gmail.com
                  </p>
                  <p className="text-white-50 mb-1">
                    <i className="bi bi-telephone me-2"></i>
                    +55 85 9 9682-7671
                  </p>
                  <p className="text-white-50 mb-0">
                    <i className="bi bi-geo-alt me-2"></i>
                    Fortaleza, CE - Brasil
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <div className="footer-links-section">
                <h6 className="text-white mb-3">Links Rápidos</h6>
                <div className="footer-links">
                  <a href="#home" className="footer-link">Início</a>
                  <a href="#sobre" className="footer-link">Sobre</a>
                  <a href="#projetos" className="footer-link">Projetos</a>
                  <a href="#tecnologias" className="footer-link">Tecnologias</a>
                  <a href="#experiencia" className="footer-link">Experiência</a>
                  <a href="#contato" className="footer-link">Contato</a>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12}>
              <div className="footer-social-section">
                <h6 className="text-white mb-3">Redes Sociais</h6>
                <div className="social-buttons mb-3">
                  <a href="https://github.com/Davi257-cmd" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/davi-lucas-049b48269/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/davilucas.dev/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
                <p className="text-white-50 mb-0">Vamos nos conectar e trocar ideias!</p>
              </div>
            </Col>
          </Row>
          
          <div className="footer-bottom">
            <div className="footer-divider mb-3"></div>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                <p className="text-white-50 mb-0">
                  © {currentYear} Davi Lucas. Feito com ❤️ e muito ☕
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <p className="text-white-50 mb-0">
                  Desenvolvido com React + TypeScript + Tailwind CSS
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
      
      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5585996827671" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Fale comigo no WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;
