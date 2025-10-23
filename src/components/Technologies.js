import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Technologies = () => {
  const mainSkills = [
    { name: 'React', level: 'Especialista', experience: '3+', progress: 95, color: '#61DAFB', category: 'frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', level: 'Especialista', experience: '3+', progress: 95, color: '#F7DF1E', category: 'frontend', logo: 'text', text: 'JS' },
    { name: 'TypeScript', level: 'Avançado', experience: '2+', progress: 85, color: '#3178C6', category: 'frontend', logo: 'text', text: 'TS' },
    { name: 'Node.js', level: 'Avançado', experience: '2+', progress: 88, color: '#339933', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'NestJS', level: 'Avançado', experience: '1+', progress: 80, color: '#E0234E', category: 'backend', logo: '/imagensIcones/ícone - nestjs.png' },
    { name: 'MongoDB', level: 'Avançado', experience: '2+', progress: 85, color: '#47A248', category: 'database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PHP', level: 'Intermediário', experience: '2+', progress: 70, color: '#777BB4', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'WordPress', level: 'Avançado', experience: '2+', progress: 85, color: '#21759B', category: 'tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    { name: 'Shopify', level: 'Avançado', experience: '1+', progress: 80, color: '#96BF48', category: 'tools', logo: '/imagensIcones/shopify - ícone.png' },
    { name: 'Cypress', level: 'Especialista', experience: '1+', progress: 90, color: '#17202C', category: 'tools', logo: '/imagensIcones/ícone - cypress.webp' },
    { name: 'Postman', level: 'Avançado', experience: '2+', progress: 85, color: '#FF6C37', category: 'tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Python', level: 'Avançado', experience: '2+', progress: 80, color: '#3776AB', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', level: 'Básico', experience: '1+', progress: 60, color: '#ED8B00', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', level: 'Básico', experience: '1+', progress: 55, color: '#6DB33F', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Angular', level: 'Intermediário', experience: '1+', progress: 70, color: '#DD0031', category: 'frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'AWS', level: 'Intermediário', experience: '1+', progress: 70, color: '#FF9900', category: 'cloud', logo: 'text', text: 'AWS' },
    { name: 'Docker', level: 'Avançado', experience: '2+', progress: 85, color: '#2496ED', category: 'devops', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Engenharia de Prompt', level: 'Avançado', experience: '1+', progress: 85, color: '#FF6B35', category: 'ai', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'N8N', level: 'Intermediário', experience: '1+', progress: 65, color: '#EA4C89', category: 'automation', logo: '/imagensIcones/ícone n8n.png' },
    { name: 'Flutter', level: 'Básico', experience: '1+', progress: 60, color: '#02569B', category: 'mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'React Native', level: 'Intermediário', experience: '2+', progress: 75, color: '#61DAFB', category: 'mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const skillCategories = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'Angular'],
    backend: ['Node.js', 'NestJS', 'PHP', 'Python', 'Java', 'Spring Boot'],
    cloud: ['AWS'],
    devops: ['Docker'],
    database: ['MongoDB'],
    tools: ['WordPress', 'Shopify', 'Cypress', 'Postman'],
    ai: ['Engenharia de Prompt'],
    automation: ['N8N'],
    mobile: ['Flutter', 'React Native']
  };

  return (
    <section id="tecnologias" className="technologies-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">Tecnologias & Habilidades</h2>
            <p className="section-subtitle text-white-50">
              Ferramentas e tecnologias que domino e utilizo.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {mainSkills.map((skill, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="skill-card h-100">
                <Card.Body>
                  <div className="skill-header d-flex align-items-center mb-3">
                    <div 
                      className="skill-logo me-3"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.logo === 'text' ? (
                        <span className="skill-logo-text">
                          {skill.text}
                        </span>
                      ) : (
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="skill-logo-img"
                        />
                      )}
                    </div>
                    <div>
                      <h5 className="skill-name text-white mb-1">{skill.name}</h5>
                      <p className="skill-level text-white-50 mb-0">{skill.level}</p>
                    </div>
                  </div>
                  
                  <div className="skill-progress mb-3">
                    <div className="progress">
                      <div 
                        className="progress-bar"
                        style={{ 
                          width: `${skill.progress}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="skill-experience text-white-50 mb-0">
                    {skill.experience} Anos de Experiência
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-4">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="category-card">
                <Card.Body>
                  <h6 className="category-title text-white mb-3">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h6>
                  <div className="skill-tags">
                    {skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={12} className="text-center">
            <Card className="learning-philosophy-card">
              <Card.Body>
                <h6 className="text-white mb-3">Sempre Aprendendo</h6>
                <p className="text-white-50 mb-0">
                  A tecnologia está em constante evolução, e eu estou sempre buscando novos 
                  conhecimentos, ferramentas e tecnologias para entregar o melhor resultado possível.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
