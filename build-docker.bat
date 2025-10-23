@echo off
REM Script para build e deploy do Portfolio Davi Lucas
REM Uso: build-docker.bat [build|run|stop|clean]

set IMAGE_NAME=portfolio-davi-lucas
set CONTAINER_NAME=portfolio-davi-lucas
set PORT=3000

if "%1"=="build" (
    echo 🔨 Construindo imagem Docker...
    docker build -t %IMAGE_NAME% .
    echo ✅ Imagem construída com sucesso!
    goto :eof
)

if "%1"=="run" (
    echo 🚀 Iniciando container...
    docker run -d --name %CONTAINER_NAME% -p %PORT%:80 --restart unless-stopped %IMAGE_NAME%
    echo ✅ Container iniciado! Acesse: http://localhost:%PORT%
    goto :eof
)

if "%1"=="stop" (
    echo 🛑 Parando container...
    docker stop %CONTAINER_NAME% 2>nul
    docker rm %CONTAINER_NAME% 2>nul
    echo ✅ Container parado e removido!
    goto :eof
)

if "%1"=="clean" (
    echo 🧹 Limpando imagens e containers...
    docker stop %CONTAINER_NAME% 2>nul
    docker rm %CONTAINER_NAME% 2>nul
    docker rmi %IMAGE_NAME% 2>nul
    echo ✅ Limpeza concluída!
    goto :eof
)

if "%1"=="logs" (
    echo 📋 Mostrando logs do container...
    docker logs -f %CONTAINER_NAME%
    goto :eof
)

echo 📖 Uso: %0 [build^|run^|stop^|clean^|logs]
echo.
echo Comandos disponíveis:
echo   build  - Constrói a imagem Docker
echo   run    - Inicia o container
echo   stop   - Para e remove o container
echo   clean  - Remove imagem e container
echo   logs   - Mostra logs do container
echo.
echo Exemplo: %0 build ^&^& %0 run
