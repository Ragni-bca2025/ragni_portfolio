# Deployment Guide - Cyber Rave Portfolio

आपके प्रोजेक्ट को deploy करने के लिए निम्नलिखित steps follow करें:

## Option 1: Render.com पर Deploy करें (Recommended)

### Steps:
1. **GitHub पर code push करें:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Render.com पर account बनाएं:**
   - https://render.com पर जाएं
   - Sign up करें (GitHub से login कर सकते हैं)

3. **New Web Service बनाएं:**
   - Dashboard पर "New +" → "Web Service" चुनें
   - GitHub repository connect करें
   - Settings:
     - **Name:** cyber-rave-portfolio
     - **Environment:** Node
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
     - **Environment Variables:**
       - `NODE_ENV` = `production`
       - `PORT` = `10000` (Render automatically provides PORT)

4. **Deploy करें:**
   - "Create Web Service" पर click करें
   - Build complete होने के बाद आपको URL मिल जाएगी

---

## Option 2: Railway.app पर Deploy करें

### Steps:
1. **GitHub पर code push करें** (ऊपर देखें)

2. **Railway.app पर account बनाएं:**
   - https://railway.app पर जाएं
   - GitHub से login करें

3. **New Project बनाएं:**
   - "New Project" → "Deploy from GitHub repo"
   - अपनी repository select करें
   - Railway automatically `railway.json` detect करेगा

4. **Environment Variables set करें:**
   - Project settings में:
     - `NODE_ENV` = `production`

5. **Deploy:**
   - Railway automatically deploy कर देगा
   - URL आपको dashboard पर मिल जाएगी

---

## Option 3: Vercel पर Deploy करें (Frontend Only)

अगर आप सिर्फ frontend deploy करना चाहते हैं:

1. **Vercel CLI install करें:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy करें:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Project settings में `client` folder को root बनाएं
   - Build command: `cd client && npm install && npm run build`
   - Output directory: `dist/public`

---

## Important Notes:

- **Port:** Production में PORT environment variable automatically set होता है
- **Build:** `npm run build` command client और server दोनों build करता है
- **Start:** `npm start` production server start करता है

---

## Troubleshooting:

अगर deployment में कोई error आए:
1. Build logs check करें
2. Environment variables verify करें
3. Port configuration check करें (Render uses PORT env var automatically)

---

## After Deployment:

Deploy होने के बाद आपको एक public URL मिलेगी जैसे:
- Render: `https://cyber-rave-portfolio.onrender.com`
- Railway: `https://cyber-rave-portfolio.up.railway.app`
- Vercel: `https://your-project.vercel.app`

इस URL को आप कहीं भी share कर सकते हैं!

