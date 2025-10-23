import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'FluxQA: SaaS com IA para Testes',
      description: 'SaaS com IA para navegação e geração de código Cypress para testes de QA',
      image: null, // Sem imagem - será mostrado "Em Breve"
      tags: ['React', 'TypeScript', 'Node.js', 'IA', 'Em Breve'],
      status: 'Em Desenvolvimento',
      company: 'Projeto Próprio',
      year: '2024',
      links: {
        project: '#',
        code: '#'
      }
    },
    {
      title: 'Raízes Cearenses',
      description: 'Plataforma de e-commerce para produtos orgânicos locais do Ceará. Conecta produtores locais com consumidores.',
      image: '/imagensGeral/Site - Raizes Cearenses.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      status: 'Concluído',
      company: 'Colmeia Tecnologia',
      year: '2024',
      links: {
        project: 'https://raizescearenses.com.br/vitrine',
        code: '#'
      }
    },
    {
      title: 'PlusSim',
      description: 'Site para empresa de telecomunicações com e-commerce personalizado para chips de viagem internacional',
      image: '/imagensGeral/Site - Plus Sim.png',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      status: 'Concluído',
      company: 'Simples Inovação',
      year: '2024',
      links: {
        project: 'https://plussim.com/',
        code: '#'
      }
    },
    {
      title: 'Studio W',
      description: 'Landing page para salão de beleza com foco em agendamentos e serviços de beleza',
      image: '/imagensGeral/studiow-site.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      status: 'Concluído',
      company: 'Freelance',
      year: '2024',
      links: {
        project: 'https://studiow.com.br/home',
        code: '#'
      }
    },
    {
      title: 'Beauty Salon IA Solutions Pro',
      description: 'Sistema mobile-first para salões com foco em agendamento e fidelização de clientes',
      image: '/imagensGeral/BeautySallon - site.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      status: 'Concluído',
      company: 'Projeto Próprio',
      year: '2024',
      links: {
        project: 'https://beauty-aura-connect.lovable.app/auth',
        code: '#'
      }
    },
    {
      title: 'LeadFinder',
      description: 'SaaS para encontrar e qualificar leads automaticamente através do Google Maps',
      image: '/imagensGeral/leadfinder-Site.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      status: 'Concluído',
      company: 'Projeto Próprio',
      year: '2024',
      links: {
        project: 'https://leadsaasbr.vercel.app/',
        code: '#'
      }
    },
    {
      title: 'JR Gestão',
      description: 'Site institucional para empresa de gestão empresarial com foco em consultoria e serviços contábeis',
      image: '/imagensGeral/site - JR Gestão.png',
      tags: ['WordPress', 'Elementor', 'PHP'],
      status: 'Concluído',
      company: 'Simples Inovação',
      year: '2024',
      links: {
        project: 'https://jrgestao.com/',
        code: '#'
      }
    },
    {
      title: 'EMR Advisory',
      description: 'Site para empresa de consultoria em estruturação de empresas nos Emirados Árabes Unidos',
      image: '/imagensGeral/Site - EMR.png',
      tags: ['WordPress', 'Elementor', 'PHP'],
      status: 'Concluído',
      company: 'Simples Inovação',
      year: '2024',
      links: {
        project: 'https://emradvisoryco.com/',
        code: '#'
      }
    }
  ];

  return (
    <section id="projetos" className="projects-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title text-white mb-3">Meus Projetos</h2>
            <p className="section-subtitle text-white-50 mb-4">
              Uma seleção dos meus trabalhos mais recentes e significativos, demonstrando diferentes tecnologias e abordagens de desenvolvimento.
            </p>
            <Button 
              variant="primary" 
              className="mb-4"
              href="https://github.com/Davi257-cmd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Mais no GitHub <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="project-card h-100">
                <div className="project-image-container">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-coming-soon">
                      <h4>Em Breve</h4>
                      <p>Projeto em desenvolvimento</p>
                    </div>
                  )}
                </div>
                <Card.Body>
                  <div className="project-header mb-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="project-title text-white mb-0">{project.title}</h5>
                      <span className={`project-status ${project.status === 'Em Andamento' ? 'status-ongoing' : 'status-completed'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="project-company text-white-50 mb-2">{project.company}</p>
                    <p className="project-year text-white-50 mb-3">{project.year}</p>
                  </div>
                  
                  <p className="project-description text-white-50 mb-3">{project.description}</p>
                  
                  <div className="project-tags mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.links.project !== '#' && (
                      <Button 
                        variant="outline-light" 
                        size="sm"
                        href={project.links.project}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Site
                      </Button>
                    )}
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

export default Projects;
