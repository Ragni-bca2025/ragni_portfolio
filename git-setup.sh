#!/bin/bash

# Git repository setup script
# Run this script in Git Bash

echo "🚀 Setting up Git repository..."

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Add all files
echo "➕ Adding all files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit. All files are already committed."
else
    echo "💾 Committing changes..."
    git commit -m "Initial commit: Cyber Rave Portfolio with all features

- Added profile photo
- Updated GitHub and LinkedIn links
- Added share functionality
- View-only portfolio ready for deployment
- All pages: Home, About, Projects, Contact
- Responsive design with neon cyber aesthetic"
    
    echo "✅ Files committed successfully!"
fi

# Show status
echo ""
echo "📊 Current Git status:"
git status

echo ""
echo "✨ Next steps:"
echo "1. Create a repository on GitHub: https://github.com/new"
echo "2. Run these commands:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Or if repository already exists:"
echo "   git remote add origin YOUR_REPO_URL"
echo "   git push -u origin main"

