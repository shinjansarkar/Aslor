const Scraper = require('images-scraper');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const sharp = require('sharp');

const agencies = {
    'pwd_haryana': 'Haryana PWD logo official',
    'nbcc': 'NBCC India limited logo official',
    'sail': 'SAIL Steel Authority of India Limited logo official',
    'jreda': 'JREDA Jharkhand Renewable Energy Development Agency logo official',
    'npcil': 'NPCIL Nuclear Power Corporation logo official',
    'ser': 'South Eastern Railway logo official',
    'upneda': 'UPNEDA Uttar Pradesh logo official',
    'nmdc': 'NMDC National Mineral Development Corporation logo official',
    'nitra': 'Northern India Textile Research Association logo official',
    'mod': 'Ministry of Defence India logo official',
    'bccl': 'Bharat Coking Coal Limited logo official',
    'mahapwd': 'Maharashtra PWD logo official'
};

const publicDir = path.join(__dirname, 'public', 'partners');

const google = new Scraper({
  puppeteer: {
    headless: 'new',
  }
});

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
    for (const [name, query] of Object.entries(agencies)) {
        console.log(`Searching: ${query}`);
        try {
            const results = await google.scrape(query, 1);
            if (results && results.length > 0) {
                const url = results[0].url;
                console.log(`Found: ${url}`);
                const rawPath = path.join(publicDir, `${name}_raw.png`); // temp
                await download(url, rawPath);
                
                // Convert to WebP using sharp
                await sharp(rawPath)
                    .webp({ quality: 90 })
                    .toFile(path.join(publicDir, `${name}.webp`));
                
                fs.unlinkSync(rawPath);
                console.log(`Saved ${name}.webp`);
            } else {
                console.log(`No results for ${name}`);
            }
        } catch (e) {
            console.error(`Error for ${name}:`, e.message);
        }
    }
})();
