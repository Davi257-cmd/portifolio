import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const Organizations = () => {
  const organizations = [
    { name: 'Governo do Estado do Ceará', logo: '/imagensDasLogos/GOC-0019-20 Marca Horizontal.png' },
    { name: 'Tercia', logo: '/imagensDasLogos/logo tercia.png' },
    { name: 'Studio W', logo: '/imagensDasLogos/logo studiow.webp' },
    { name: 'Raízes Cearenses', logo: '/imagensDasLogos/logo - raizes cearenses.png' },
    { name: 'JR Contabilidade', logo: '/imagensDasLogos/jr contabilidade - logo.png' },
    { name: 'EMR', logo: '/imagensDasLogos/EMR - LOGO.png' },
    { name: 'Mioche', logo: '/imagensDasLogos/logo - mioche.webp' },
    { name: 'Gaggia', logo: '/imagensDasLogos/logo-gaggia.webp' },
    { name: 'Remadi', logo: '/imagensDasLogos/remadi - logo.webp', specialBg: true }
  ];

  return (
    <section id="organizacoes" className="organizations-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">
              Organizações Impactadas pelo Meu Trabalho em Colaboração com Empresas Contratantes
            </h2>
            <p className="section-subtitle text-white-50">
              Projetos desenvolvidos para empresas que transcendem suas expectativas.
            </p>
          </Col>
        </Row>

        <div className="organizations-carousel">
          <div className="carousel-track">
            {[...organizations, ...organizations, ...organizations].map((org, index) => (
              <div key={index} className="carousel-item">
                <Card className={`organization-card ${org.specialBg ? 'remadi-card' : ''}`}>
                  <Card.Body className="d-flex align-items-center justify-content-center">
                    <img 
                      src={org.logo} 
                      alt={org.name}
                      className="organization-logo"
                    />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <Row className="mt-4">
          <Col lg={12} className="text-center">
            <p className="organizations-count text-white-50">
              Mais de 8 organizações impactadas através de projetos colaborativos
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Organizations;
