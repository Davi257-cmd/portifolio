#!/bin/bash

# Script para build e deploy do Portfolio Davi Lucas
# Uso: ./build-docker.sh [build|run|stop|clean]

set -e

IMAGE_NAME="portfolio-davi-lucas"
CONTAINER_NAME="portfolio-davi-lucas"
PORT="3000"

case "$1" in
    "build")
        echo "🔨 Construindo imagem Docker..."
        docker build -t $IMAGE_NAME .
        echo "✅ Imagem construída com sucesso!"
        ;;
    
    "run")
        echo "🚀 Iniciando container..."
        docker run -d \
            --name $CONTAINER_NAME \
            -p $PORT:80 \
            --restart unless-stopped \
            $IMAGE_NAME
        echo "✅ Container iniciado! Acesse: http://localhost:$PORT"
        ;;
    
    "stop")
        echo "🛑 Parando container..."
        docker stop $CONTAINER_NAME || true
        docker rm $CONTAINER_NAME || true
        echo "✅ Container parado e removido!"
        ;;
    
    "clean")
        echo "🧹 Limpando imagens e containers..."
        docker stop $CONTAINER_NAME || true
        docker rm $CONTAINER_NAME || true
        docker rmi $IMAGE_NAME || true
        echo "✅ Limpeza concluída!"
        ;;
    
    "logs")
        echo "📋 Mostrando logs do container..."
        docker logs -f $CONTAINER_NAME
        ;;
    
    *)
        echo "📖 Uso: $0 [build|run|stop|clean|logs]"
        echo ""
        echo "Comandos disponíveis:"
        echo "  build  - Constrói a imagem Docker"
        echo "  run    - Inicia o container"
        echo "  stop   - Para e remove o container"
        echo "  clean  - Remove imagem e container"
        echo "  logs   - Mostra logs do container"
        echo ""
        echo "Exemplo: $0 build && $0 run"
        ;;
esac
