# 📝 Git Setup Instructions

## Windows में Git Commands Run करने के लिए:

### Option 1: Git Bash Use करें (Recommended)

1. **Git Bash खोलें** (Start Menu में search करें "Git Bash")
2. Project folder में navigate करें:
   ```bash
   cd /c/Users/hp/Downloads/5_6176897299386473076/Cyber-Rave-Portfolio
   ```
3. **Setup script run करें:**
   ```bash
   bash git-setup.sh
   ```

### Option 2: Command Prompt में

1. **Command Prompt खोलें** (cmd)
2. Project folder में navigate करें:
   ```cmd
   cd C:\Users\hp\Downloads\5_6176897299386473076\Cyber-Rave-Portfolio
   ```
3. **Setup script run करें:**
   ```cmd
   git-setup.bat
   ```

### Option 3: Manual Commands

अगर scripts काम नहीं करें, तो manually ये commands run करें:

```bash
# 1. Git initialize (अगर पहले से initialized नहीं है)
git init

# 2. सभी files add करें
git add .

# 3. Commit करें
git commit -m "Initial commit: Cyber Rave Portfolio"

# 4. GitHub पर repository बनाएं और remote add करें
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Branch को main में rename करें
git branch -M main

# 6. GitHub पर push करें
git push -u origin main
```

---

## GitHub पर Repository बनाना:

1. **https://github.com** पर login करें
2. **"New repository"** button पर click करें
3. Repository details fill करें:
   - **Name:** `Cyber-Rave-Portfolio` (या कोई भी नाम)
   - **Description:** "Cyber aesthetic portfolio website"
   - **Public** या **Private** चुनें
   - **Initialize with README** को uncheck करें (क्योंकि हमारे पास already files हैं)
4. **"Create repository"** पर click करें
5. GitHub आपको commands देगा - उन्हें copy करें और run करें

---

## Important Files जो Git में Add हो रहे हैं:

✅ सभी source code files
✅ Configuration files (package.json, vite.config.ts, etc.)
✅ Components और pages
✅ Public assets (profile.jpg)
✅ Deployment configs (render.yaml, railway.json)

❌ **Excluded:** `node_modules`, `dist` (already in .gitignore)

---

## Troubleshooting:

### अगर "git command not found" error आए:
- Git Bash use करें
- या Git को PATH में add करें

### अगर authentication error आए:
- GitHub credentials set करें:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### अगर remote already exists error आए:
- Existing remote check करें:
  ```bash
  git remote -v
  ```
- Remote update करें:
  ```bash
  git remote set-url origin YOUR_NEW_REPO_URL
  ```

---

## ✅ Success के बाद:

Repository successfully push होने के बाद:
1. GitHub पर repository URL मिल जाएगी
2. उस URL को Render.com या Railway.app पर use करें deployment के लिए
3. QUICK_DEPLOY.md file देखें deployment के लिए

