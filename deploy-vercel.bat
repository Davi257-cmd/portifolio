@echo off
echo 🚀 Deploy Portfolio Davi Lucas para Vercel
echo.

echo 📋 Verificando pré-requisitos...
echo.

REM Verificar se git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git não encontrado. Instale o Git primeiro.
    pause
    exit /b 1
)

REM Verificar se npm está instalado
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ NPM não encontrado. Instale o Node.js primeiro.
    pause
    exit /b 1
)

echo ✅ Git e NPM encontrados
echo.

echo 🔨 Fazendo build do projeto...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Erro no build. Verifique os erros acima.
    pause
    exit /b 1
)

echo ✅ Build concluído com sucesso!
echo.

echo 📦 Verificando imagens...
node check-images.js
if %errorlevel% neq 0 (
    echo ❌ Erro na verificação de imagens.
    pause
    exit /b 1
)

echo ✅ Todas as imagens estão presentes!
echo.

echo 📝 Preparando commit...
git add .
git commit -m "Deploy: Portfolio atualizado para Vercel"
if %errorlevel% neq 0 (
    echo ⚠️ Nenhuma alteração para commit ou erro no git.
)

echo.
echo 🚀 Enviando para GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Erro ao enviar para GitHub. Verifique se o repositório está configurado.
    echo.
    echo 📋 Para configurar o repositório:
    echo    git remote add origin https://github.com/SEU_USUARIO/portfolio-davi-lucas.git
    echo    git push -u origin main
    pause
    exit /b 1
)

echo.
echo ✅ Deploy concluído!
echo.
echo 🌐 Próximos passos:
echo    1. Acesse https://vercel.com
echo    2. Importe seu repositório do GitHub
echo    3. Configure o deploy
echo    4. Aguarde o build automático
echo.
echo 📖 Para mais detalhes, consulte VERCEL-DEPLOY.md
echo.
pause
