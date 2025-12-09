@echo off
REM Git repository setup script for Windows
REM Run this in Command Prompt or PowerShell

echo 🚀 Setting up Git repository...

REM Check if git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git is not found in PATH. Please install Git or use Git Bash.
    echo.
    echo You can download Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git if not already initialized
if not exist .git (
    echo 📦 Initializing Git repository...
    git init
)

REM Add all files
echo ➕ Adding all files to Git...
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if %ERRORLEVEL% EQU 0 (
    echo ℹ️  No changes to commit. All files are already committed.
) else (
    echo 💾 Committing changes...
    git commit -m "Initial commit: Cyber Rave Portfolio with all features

- Added profile photo
- Updated GitHub and LinkedIn links  
- Added share functionality
- View-only portfolio ready for deployment
- All pages: Home, About, Projects, Contact
- Responsive design with neon cyber aesthetic"
    
    echo ✅ Files committed successfully!
)

REM Show status
echo.
echo 📊 Current Git status:
git status

echo.
echo ✨ Next steps:
echo 1. Create a repository on GitHub: https://github.com/new
echo 2. Run these commands:
echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Or if repository already exists:
echo    git remote add origin YOUR_REPO_URL
echo    git push -u origin main
echo.
pause

