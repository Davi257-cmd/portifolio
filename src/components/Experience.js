import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Júnior',
      company: 'Colmeia Soluções em Tecnologia',
      period: 'março de 2025 - Atual',
      location: 'Fortaleza, CE',
      type: 'Tempo Integral',
      description: 'Desenvolvimento de funcionalidades em NestJS e MongoDB, implementação de interfaces responsivas com React, construção de APIs RESTful.',
      technologies: ['NestJS', 'MongoDB', 'React', 'Node.js', 'TypeScript'],
      status: 'current'
    },
    {
      id: 2,
      title: 'Desenvolvedor Shopify e WordPress',
      company: 'Simples Inovação',
      period: 'fevereiro de 2025 - Atual',
      location: 'Fortaleza, CE',
      type: 'Tempo Integral',
      description: 'Desenvolvimento e customização de temas Shopify, criação de sites com WordPress com elementor, WooCommerce, Wake implementação de funcionalidades personalizadas.',
      technologies: ['Shopify', 'WordPress', 'WooCommerce', 'Liquid', 'PHP'],
      status: 'current'
    },
    {
      id: 3,
      title: 'Estagiário de Qualidade de Software (QA)',
      company: 'Colmeia Tech',
      period: 'novembro de 2024 - março de 2025',
      location: 'Fortaleza, CE',
      type: 'Estágio',
      description: 'Automação de testes com Cypress, documentação de casos de teste com Postman, colaboração com desenvolvedores para resolução de bugs.',
      technologies: ['Cypress', 'Postman', 'JavaScript', 'Testes Automatizados'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Autônomo',
      period: 'dezembro de 2022 - junho de 2024',
      location: 'Fortaleza, CE',
      type: 'Freelance',
      description: 'Especializado em criação de interfaces para e-commerce, desenvolvimento de layouts otimizados para conversão, prototipagem e design de experiência do usuário.',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Design'],
      status: 'completed'
    },
    {
      id: 5,
      title: 'Gestor de Tráfego',
      company: 'Autônomo',
      period: 'maio de 2022 - junho de 2024',
      location: 'Fortaleza, CE',
      type: 'Freelance',
      description: 'Gestão estratégica de campanhas de marketing digital, especializado em Google Ads, Facebook Ads, TikTok Ads e Taboola, com foco em ROI e otimização de conversões.',
      technologies: ['Google Ads', 'Facebook Ads', 'TikTok Ads', 'Taboola', 'Analytics'],
      status: 'completed'
    }
  ];

  const stats = [
    { number: '3+', label: 'Anos de Experiência' },
    { number: '5', label: 'Posições Ocupadas' },
    { number: '15+', label: 'Projetos Entregues' }
  ];

  // Animação de entrada sequencial
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < experiences.length) {
        setVisibleItems(prev => [...prev, currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 300);

    return () => clearInterval(timer);
  }, [currentIndex, experiences.length]);

  return (
    <section id="experiencia" className="experience-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">Experiência Profissional</h2>
            <p className="section-subtitle text-white-50 mb-4">
              Minha jornada profissional, destacando os principais projetos e conquistas em cada posição que ocupei.
            </p>
          </Col>
        </Row>

        {/* Estatísticas */}
        <Row className="mb-5">
          {stats.map((stat, index) => (
            <Col lg={4} md={4} key={index} className="mb-4">
              <div className="experience-stat text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Timeline de Experiências */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${visibleItems.includes(index) ? 'visible' : ''} ${exp.status === 'current' ? 'current' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <Card className="experience-card">
                <Card.Body>
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h4 className="experience-title">{exp.title}</h4>
                      <h5 className="experience-company">{exp.company}</h5>
                    </div>
                    <div className="experience-badges">
                      <Badge 
                        bg={exp.status === 'current' ? 'success' : 'secondary'} 
                        className="status-badge"
                      >
                        {exp.status === 'current' ? 'Atual' : 'Concluído'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <i className="bi bi-calendar-event me-2"></i>
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-geo-alt me-2"></i>
                      <span>{exp.location}</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-briefcase me-2"></i>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-technologies">
                    <h6 className="tech-title">Tecnologias:</h6>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} bg="primary" className="tech-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
