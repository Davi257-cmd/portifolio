import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const certifications = [
    {
      title: 'Docker do Zero ao Avançado',
      description: 'Certificação completa em Docker, desde conceitos básicos até implementações avançadas em produção.',
      tags: ['Docker', 'Containerização', 'DevOps'],
      year: '2024',
      category: 'devops',
      image: '/imagensCertificados/certificado - docker -davi.jpg'
    },
    {
      title: 'Fundamentos de Ethical Hacker',
      description: 'Certificação em fundamentos de segurança cibernética e ethical hacking.',
      tags: ['Segurança Cibernética', 'Ethical Hacking', 'Penetration Testing'],
      year: '2024',
      category: 'security',
      image: '/imagensCertificados/certificado - fundamentos -  davi.jpg'
    },
    {
      title: 'Python',
      description: 'Certificação em linguagem Python para desenvolvimento backend e automação.',
      tags: ['Python', 'Backend', 'Automação'],
      year: '2024',
      category: 'development',
      image: '/imagensCertificados/Python - Certificado - DAVI.jpg'
    },
    {
      title: 'React Native',
      description: 'Certificação em desenvolvimento mobile com React Native.',
      tags: ['React Native', 'Mobile', 'JavaScript'],
      year: '2024',
      category: 'development',
      image: '/imagensCertificados/React Native - Certificado - davi.jpg'
    },
    {
      title: 'Segurança da Informação',
      description: 'Certificação em segurança da informação e proteção de dados.',
      tags: ['Segurança da Informação', 'Proteção de Dados', 'LGPD'],
      year: '2024',
      category: 'security',
      image: '/imagensCertificados/IT - SECURITY - DAVI.jpg'
    },
    {
      title: 'Engenharia de Prompt',
      description: 'Certificação em engenharia de prompt para inteligência artificial.',
      tags: ['Prompt Engineering', 'IA', 'ChatGPT'],
      year: '2024',
      category: 'ai',
      image: '/imagensCertificados/certificado - Engenharia de prompt - DAVI.jpg'
    },
    {
      title: 'Cypress',
      description: 'Certificação em automação de testes com Cypress.',
      tags: ['Cypress', 'Automação de Testes', 'E2E Testing'],
      year: '2024',
      category: 'testing',
      image: '/imagensCertificados/cypress - certificado - DAVI.jpg'
    },
    {
      title: 'Teste de Performance com K6',
      description: 'Certificação em testes de performance e carga com K6.',
      tags: ['K6', 'Testes de Performance', 'Load Testing'],
      year: '2024',
      category: 'testing',
      image: '/imagensCertificados/teste de performance com o k6 - certificado - DAVI.jpg'
    },
    {
      title: 'DevOps',
      description: 'Certificação em práticas DevOps, automação e integração contínua.',
      tags: ['DevOps', 'CI/CD', 'Automação'],
      year: '2024',
      category: 'devops',
      image: '/imagensCertificados/DevOps - Certificado - DAVI.jpg'
    },
    {
      title: 'Java COMPLETO Programação Orientada a Objetos',
      description: 'Certificação completa em Java com foco em programação orientada a objetos, Spring Boot e Swagger.',
      tags: ['Java', 'Spring Boot', 'Swagger'],
      year: '2024',
      category: 'development',
      image: '/imagensCertificados/JAVA - CERTIFICADO - DAVI.jpg'
    },
    {
      title: 'Flutter',
      description: 'Certificação em desenvolvimento mobile multiplataforma com Flutter.',
      tags: ['Flutter', 'Dart', 'Mobile'],
      year: '2024',
      category: 'development',
      image: '/imagensCertificados/certificado - flutter - DAVI.jpg'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos (11)', count: 11 },
    { key: 'development', label: 'Desenvolvimento (4)', count: 4 },
    { key: 'security', label: 'Segurança (2)', count: 2 },
    { key: 'testing', label: 'Testes (2)', count: 2 },
    { key: 'devops', label: 'DevOps (2)', count: 2 },
    { key: 'ai', label: 'IA (1)', count: 1 }
  ];

  const filteredCertifications = activeFilter === 'todos' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section id="certificacoes" className="certifications-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">Certificações</h2>
            <p className="section-subtitle text-white-50">
              Certificações e cursos que comprovam minha dedicação ao aprendizado contínuo e especialização em tecnologias modernas.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={12} className="text-center">
            <ButtonGroup className="filter-buttons">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'primary' : 'outline-light'}
                  onClick={() => setActiveFilter(filter.key)}
                  className="me-2 mb-2"
                >
                  {filter.label}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <Row>
          {filteredCertifications.map((cert, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="certification-card h-100">
                <div className="certification-image-container">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="certification-image"
                  />
                </div>
                <Card.Body>
                  <h5 className="certification-title text-dark mb-3">{cert.title}</h5>
                  <p className="certification-description text-dark mb-3">{cert.description}</p>
                  
                  <div className="certification-tags mb-3">
                    {cert.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="certification-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="certification-year text-dark">
                    <strong>{cert.year}</strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;