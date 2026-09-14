const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const agencies = {
    'pwd_haryana': { abbr: 'PWD', name: 'Haryana PWD' },
    'nbcc': { abbr: 'NBCC', name: 'National Building Construction Corp' },
    'sail': { abbr: 'SAIL', name: 'Steel Authority of India' },
    'jreda': { abbr: 'JREDA', name: 'Jharkhand Renewable Energy' },
    'npcil': { abbr: 'NPCIL', name: 'Nuclear Power Corp of India' },
    'ser': { abbr: 'SER', name: 'South Eastern Railway' },
    'upneda': { abbr: 'UPNEDA', name: 'UPNEDA' },
    'nmdc': { abbr: 'NMDC', name: 'National Mineral Dev Corp' },
    'nitra': { abbr: 'NITRA', name: 'Northern India Textile Research' },
    'mod': { abbr: 'MOD', name: 'Dept of Defence' },
    'bccl': { abbr: 'BCCL', name: 'Bharat Coking Coal' },
    'mahapwd': { abbr: 'PWD', name: 'Maharashtra PWD' }
};

const dir = path.join(__dirname, 'public', 'partners');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function generateLogo(key, info) {
    const svg = `
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" rx="80" fill="#ffffff" />
        <circle cx="200" cy="180" r="110" fill="#f0fdf4" stroke="#16a34a" stroke-width="8"/>
        <text x="200" y="210" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#14532d" text-anchor="middle">${info.abbr}</text>
        <text x="200" y="340" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#475569" text-anchor="middle">${info.name.length > 25 ? info.name.substring(0, 22) + '...' : info.name}</text>
    </svg>`;
    
    await sharp(Buffer.from(svg))
        .webp({ quality: 90 })
        .toFile(path.join(dir, `${key}.webp`));
    console.log(`Generated ${key}.webp`);
}

(async () => {
    for (const [key, info] of Object.entries(agencies)) {
        await generateLogo(key, info);
    }
})();
