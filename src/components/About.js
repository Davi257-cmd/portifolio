import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const features = [
    {
      icon: '💻',
      title: 'Clean Code',
      description: 'Código limpo e estruturado'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Otimização e alta performance'
    },
    {
      icon: '🎨',
      title: 'UX/UI',
      description: 'Experiência do usuário em foco'
    },
    {
      icon: '💪',
      title: 'Dedicação',
      description: 'Comprometimento com qualidade'
    }
  ];

  const metrics = [
    { number: '3+', label: 'Anos de Experiência' },
    { number: '15+', label: 'Projetos Concluídos' },
    { number: '10+', label: 'Tecnologias' }
  ];

  return (
    <section id="sobre" className="about-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-4">Sobre Mim</h2>
            <h3 className="about-subtitle text-white mb-4">Davi Lucas - Desenvolvedor Full Stack</h3>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <div className="profile-image-container">
              <img 
                src="/imagensGeral/Minha Foto.jpg" 
                alt="Davi Lucas" 
                className="profile-image"
              />
            </div>
          </Col>
          <Col lg={8}>
            <div className="about-content">
              <p className="about-description text-white mb-3">
                Olá! Sou Davi Lucas, um desenvolvedor full stack apaixonado por tecnologia e inovação. 
                Com experiência sólida em desenvolvimento web, especializo-me em criar soluções digitais 
                que combinam funcionalidade excepcional com design intuitivo.
              </p>
              <p className="about-description text-white mb-3">
                Minha jornada na programação começou com curiosidade e evoluiu para uma paixão genuína 
                por resolver problemas complexos através do código. Trabalho principalmente com React, 
                Node.js e TypeScript, sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>
              <p className="about-description text-white">
                Atualmente, atuo como desenvolvedor na Colmeia, onde contribuo para projetos inovadores 
                e colaboro com equipes talentosas. Meu foco está em entregar código limpo, performático 
                e que realmente faça a diferença na experiência do usuário.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h5 className="text-white">{feature.title}</h5>
                  <p className="text-white-50">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {metrics.map((metric, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="metric-card h-100">
                <Card.Body className="text-center">
                  <h3 className="metric-number text-white">{metric.number}</h3>
                  <p className="metric-label text-white-50">{metric.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
