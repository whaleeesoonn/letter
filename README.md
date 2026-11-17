# Winter Letter

A romantic winter-themed letter built with Vue 3 + Vite, ready for Vercel.

## Deploy on Vercel (easiest: drag and drop via GitHub)
1. Create a GitHub repo and upload this folder's contents.
2. Go to vercel.com > Add New > Project > import the repo.
3. Vercel auto-detects Vite. Click Deploy.
4. Copy your address, e.g. https://winter-letter.vercel.app

## Deploy with the Vercel CLI
    npm i -g vercel
    vercel --prod

## Make the QR code
After deploying, run:

    npm install
    npm run qr -- https://YOUR-SITE.vercel.app

This creates `winter-letter-qr.png`. Scanning it opens your site directly.

## Run locally
    npm install
    npm run dev
