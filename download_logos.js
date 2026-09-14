const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const agencies = {
    'pwd_haryana': 'PWD Haryana logo official',
    'nbcc': 'NBCC India logo official',
    'sail': 'SAIL Steel Authority of India Limited logo official',
    'jreda': 'Jharkhand Renewable Energy Development Agency logo official',
    'npcil': 'Nuclear Power Corporation of India logo official',
    'ser': 'South Eastern Railway India logo official',
    'upneda': 'UPNEDA Uttar Pradesh logo official',
    'nmdc': 'National Mineral Development Corporation logo official',
    'nitra': 'Northern India Textile Research Association logo official',
    'mod': 'Department of Defence Production India logo official',
    'bccl': 'Bharat Coking Coal Limited logo official',
    'mahapwd': 'Maharashtra PWD logo official'
};

const publicDir = path.join(__dirname, 'public', 'partners_raw');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const request = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                download(response.headers.location, dest).then(resolve).catch(reject);
            } else {
                reject(new Error(`Status: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
        request.end();
    });
}

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    for (const [name, query] of Object.entries(agencies)) {
        console.log(`Searching: ${query}`);
        try {
            await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=h_&iar=images&iax=images&ia=images`, { waitUntil: 'networkidle2' });
            
            // DuckDuckGo image class is .tile--img__img
            await page.waitForSelector('img.tile--img__img', { timeout: 10000 });
            
            const src = await page.evaluate(() => {
                const img = document.querySelector('img.tile--img__img');
                return img ? img.src : null;
            });
            
            if (src) {
                const rawPath = path.join(publicDir, `${name}.png`);
                if (src.startsWith('data:image')) {
                    const base64Data = src.replace(/^data:image\/\w+;base64,/, "");
                    fs.writeFileSync(rawPath, base64Data, 'base64');
                    console.log(`Saved base64 for ${name}`);
                } else if (src.startsWith('//')) {
                    await download('https:' + src, rawPath);
                    console.log(`Downloaded ${name}`);
                } else {
                    await download(src, rawPath);
                    console.log(`Downloaded ${name}`);
                }
            } else {
                console.log(`No images found for ${name}`);
            }
        } catch (e) {
            console.error(`Error for ${name}:`, e.message);
        }
    }
    
    await browser.close();
})();
