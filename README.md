# Portfolio Davi Lucas

Portfólio pessoal desenvolvido em React com Bootstrap, apresentando projetos, tecnologias e experiência profissional.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes Bootstrap para React
- **Bootstrap Icons** - Ícones
- **Docker** - Containerização

## 📦 Instalação e Execução

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start
```

### Docker

#### Usando Scripts (Recomendado)

**Windows:**
```cmd
# Construir imagem
build-docker.bat build

# Executar container
build-docker.bat run

# Parar container
build-docker.bat stop

# Limpar tudo
build-docker.bat clean

# Ver logs
build-docker.bat logs
```

**Linux/Mac:**
```bash
# Construir imagem
./build-docker.sh build

# Executar container
./build-docker.sh run

# Parar container
./build-docker.sh stop

# Limpar tudo
./build-docker.sh clean

# Ver logs
./build-docker.sh logs
```

#### Usando Docker Compose

```bash
# Construir e executar
docker-compose up --build

# Executar em background
docker-compose up -d --build

# Parar
docker-compose down
```

#### Comandos Docker Manuais

```bash
# Construir imagem
docker build -t portfolio-davi-lucas .

# Executar container
docker run -d --name portfolio-davi-lucas -p 3000:80 portfolio-davi-lucas

# Parar container
docker stop portfolio-davi-lucas
docker rm portfolio-davi-lucas
```

## 🌐 Acesso

Após executar o container, acesse:
- **Desenvolvimento:** http://localhost:3000
- **Docker:** http://localhost:3000

## 📁 Estrutura do Projeto

```
portfolio-davi-lucas/
├── public/
│   ├── imagensGeral/          # Imagens dos projetos
│   ├── imagensDasLogos/       # Logos das organizações
│   ├── imagensCertificados/   # Imagens dos certificados
│   ├── imagensIcones/         # Ícones das tecnologias
│   └── index.html
├── src/
│   ├── components/            # Componentes React
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Technologies.js
│   │   ├── Organizations.js
│   │   ├── Certifications.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── build-docker.sh
├── build-docker.bat
└── README.md
```

## 🐳 Configuração Docker

### Dockerfile
- **Multi-stage build** para otimização
- **Node.js 18 Alpine** para build
- **Nginx Alpine** para produção
- **Compressão gzip** habilitada
- **Cache otimizado** para arquivos estáticos

### Nginx
- Configuração otimizada para SPA
- Headers de segurança
- Compressão gzip
- Cache para arquivos estáticos

## 📝 Scripts Disponíveis

- `npm start` - Desenvolvimento
- `npm run build` - Build para produção
- `npm test` - Executar testes
- `build-docker.bat build` - Construir imagem Docker
- `build-docker.bat run` - Executar container
- `build-docker.bat stop` - Parar container
- `build-docker.bat clean` - Limpar tudo

## 🔧 Desenvolvimento

Para contribuir com o projeto:

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute em modo desenvolvimento: `npm start`
4. Faça suas alterações
5. Teste com Docker: `build-docker.bat build && build-docker.bat run`

## 📄 Licença

Este projeto é pessoal e não possui licença específica.