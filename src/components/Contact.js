import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  const socialLinks = [
    { icon: 'bi-github', url: 'https://github.com/Davi257-cmd', label: 'GitHub' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/davi-lucas-049b48269/', label: 'LinkedIn' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/davilucas.dev/', label: 'Instagram' },
    { icon: 'bi-envelope', url: 'mailto:davillucas324567@gmail.com', label: 'Email' },
    { icon: 'bi-whatsapp', url: 'https://wa.me/5585996827671', label: 'WhatsApp' }
  ];

  return (
    <section id="contato" className="contact-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">Entre em Contato</h2>
            <p className="section-subtitle text-white-50">
              Vamos conversar sobre seu próximo projeto!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="contact-card">
              <Card.Body className="text-center p-5">
                <h4 className="text-white mb-4">Vamos Trabalhar Juntos</h4>
                <p className="text-white-50 mb-4">
                  Tem um projeto em mente? Está procurando um desenvolvedor dedicado? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
                </p>
                <p className="text-white-50 mb-4">
                  Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia. Não hesite em entrar em contato!
                </p>
                
                <div className="contact-info mb-4">
                  <p className="text-white mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    davillucas324567@gmail.com
                  </p>
                  <p className="text-white mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    +55 85 9 9682-7671
                  </p>
                  <p className="text-white">
                    <i className="bi bi-geo-alt me-2"></i>
                    Fortaleza, CE 60510 - Brasil
                  </p>
                </div>

                <div className="social-links mb-4">
                  <h6 className="text-white mb-3">Conecte-se comigo</h6>
                  <div className="d-flex justify-content-center flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.label}
                      >
                        <i className={`bi ${social.icon}`}></i>
                        <span className="ms-2">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="lg" 
                  href="mailto:davillucas324567@gmail.com"
                  className="contact-cta-btn"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Enviar Mensagem
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
