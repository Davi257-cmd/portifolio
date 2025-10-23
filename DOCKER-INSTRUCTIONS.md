# 🐳 Instruções Docker - Portfolio Davi Lucas

## ⚠️ Pré-requisitos

1. **Docker Desktop** instalado e rodando
2. **Docker Compose** (incluído no Docker Desktop)

## 🚀 Como Executar

### Opção 1: Scripts Automatizados (Recomendado)

**Windows:**
```cmd
# 1. Construir a imagem
build-docker.bat build

# 2. Executar o container
build-docker.bat run

# 3. Acessar: http://localhost:3000
```

**Linux/Mac:**
```bash
# 1. Construir a imagem
./build-docker.sh build

# 2. Executar o container
./build-docker.sh run

# 3. Acessar: http://localhost:3000
```

### Opção 2: Docker Compose

```bash
# Construir e executar em uma linha
docker-compose up --build

# Executar em background
docker-compose up -d --build
```

### Opção 3: Comandos Docker Manuais

```bash
# 1. Construir imagem
docker build -t portfolio-davi-lucas .

# 2. Executar container
docker run -d --name portfolio-davi-lucas -p 3000:80 portfolio-davi-lucas

# 3. Acessar: http://localhost:3000
```

## 🛠️ Comandos Úteis

### Gerenciar Container

```bash
# Ver containers rodando
docker ps

# Parar container
docker stop portfolio-davi-lucas

# Remover container
docker rm portfolio-davi-lucas

# Ver logs
docker logs portfolio-davi-lucas

# Entrar no container
docker exec -it portfolio-davi-lucas sh
```

### Gerenciar Imagem

```bash
# Listar imagens
docker images

# Remover imagem
docker rmi portfolio-davi-lucas

# Limpar tudo (containers + imagens)
docker system prune -a
```

## 🔧 Solução de Problemas

### Docker não está rodando
```bash
# Verificar status
docker version

# Iniciar Docker Desktop (Windows)
# Ou no terminal:
sudo systemctl start docker  # Linux
```

### Porta 3000 ocupada
```bash
# Verificar o que está usando a porta
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Linux/Mac

# Usar porta diferente
docker run -d --name portfolio-davi-lucas -p 8080:80 portfolio-davi-lucas
```

### Rebuild completo
```bash
# Parar e remover tudo
docker stop portfolio-davi-lucas
docker rm portfolio-davi-lucas
docker rmi portfolio-davi-lucas

# Reconstruir
docker build -t portfolio-davi-lucas .
docker run -d --name portfolio-davi-lucas -p 3000:80 portfolio-davi-lucas
```

## 📊 Monitoramento

```bash
# Ver uso de recursos
docker stats portfolio-davi-lucas

# Ver logs em tempo real
docker logs -f portfolio-davi-lucas

# Ver informações do container
docker inspect portfolio-davi-lucas
```

## 🌐 Acesso

Após executar com sucesso:
- **URL:** http://localhost:3000
- **Status:** Container rodando em background
- **Logs:** `docker logs portfolio-davi-lucas`

## 📝 Notas Importantes

1. **Primeira execução** pode demorar alguns minutos para baixar as imagens base
2. **Porta 3000** deve estar livre
3. **Docker Desktop** deve estar rodando
4. **Imagem otimizada** com Nginx para produção
5. **Multi-stage build** para menor tamanho final

## 🆘 Suporte

Se encontrar problemas:
1. Verifique se o Docker Desktop está rodando
2. Verifique se a porta 3000 está livre
3. Execute `docker logs portfolio-davi-lucas` para ver erros
4. Tente rebuild completo com `build-docker.bat clean && build-docker.bat build`
