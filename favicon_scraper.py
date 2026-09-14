import urllib.request
import os
from io import BytesIO
from PIL import Image

agencies = {
    'pwd_haryana': 'haryana.gov.in',
    'nbcc': 'nbccindia.in',
    'sail': 'sail.co.in',
    'jreda': 'jreda.com',
    'npcil': 'npcil.nic.in',
    'ser': 'ser.indianrailways.gov.in',
    'upneda': 'upneda.org.in',
    'nmdc': 'nmdc.co.in',
    'nitra': 'nitratextile.org',
    'mod': 'mod.gov.in',
    'bccl': 'bcclweb.in',
    'mahapwd': 'mahapwd.gov.in'
}

public_dir = r"d:\code\Web\Aslor\public\partners"
os.makedirs(public_dir, exist_ok=True)

for name, domain in agencies.items():
    url = f"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://{domain}&size=256"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            img = Image.open(BytesIO(response.read()))
            if img.mode != 'RGBA': img = img.convert('RGBA')
            img.save(os.path.join(public_dir, f"{name}.webp"), "WEBP", quality=100)
            print(f"Saved {name}.webp from favicon")
    except Exception as e:
        print(f"Failed {name}: {e}")
