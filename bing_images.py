import urllib.request, urllib.parse, re, os
from io import BytesIO
from PIL import Image

agencies = {
    'pwd_haryana': 'PWD Haryana logo',
    'nbcc': 'NBCC India logo',
    'sail': 'SAIL Steel Authority of India Limited logo',
    'jreda': 'JREDA Jharkhand Renewable Energy logo',
    'npcil': 'NPCIL Nuclear Power Corporation of India logo',
    'ser': 'South Eastern Railway logo',
    'upneda': 'UPNEDA Uttar Pradesh logo',
    'nmdc': 'NMDC National Mineral Development Corporation logo',
    'nitra': 'NITRA Northern India Textile Research Association logo',
    'mod': 'Department of Defence India logo',
    'bccl': 'BCCL Bharat Coking Coal Limited logo',
    'mahapwd': 'Maharashtra PWD logo'
}

public_dir = r"d:\code\Web\Aslor\public\partners"
os.makedirs(public_dir, exist_ok=True)

for name, query in agencies.items():
    print(f"Searching {name}...")
    url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        resp = urllib.request.urlopen(req)
        html = resp.read().decode('utf-8')
        # Look for murl
        matches = re.findall(r'murl&quot;:&quot;(.*?)&quot;', html)
        if matches:
            img_url = matches[0]
            print(f"Found: {img_url}")
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            try:
                img_resp = urllib.request.urlopen(req_img, timeout=10)
                img = Image.open(BytesIO(img_resp.read()))
                if img.mode != 'RGBA': img = img.convert('RGBA')
                img.save(os.path.join(public_dir, f"{name}.webp"), "WEBP", quality=85)
                print(f"Saved {name}.webp")
            except Exception as e:
                print(f"Failed to download {img_url}: {e}")
        else:
            print("No image found")
    except Exception as e:
        print(e)
