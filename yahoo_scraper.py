import urllib.request, urllib.parse, re, os
from io import BytesIO
from PIL import Image

agencies = {
    'pwd_haryana': 'Haryana PWD official logo',
    'nbcc': 'NBCC India limited logo',
    'sail': 'Steel Authority of India Limited logo',
    'jreda': 'Jharkhand Renewable Energy Development Agency logo',
    'npcil': 'NPCIL Nuclear Power Corporation logo',
    'ser': 'South Eastern Railway logo',
    'upneda': 'UPNEDA logo',
    'nmdc': 'NMDC National Mineral Development Corporation logo',
    'nitra': 'Northern India Textile Research Association logo',
    'mod': 'Ministry of Defence India logo',
    'bccl': 'Bharat Coking Coal Limited logo',
    'mahapwd': 'Maharashtra PWD official logo'
}

public_dir = r"d:\code\Web\Aslor\public\partners"
os.makedirs(public_dir, exist_ok=True)

for name, query in agencies.items():
    print(f"Searching {name} on Yahoo...")
    url = f"https://images.search.yahoo.com/search/images?p={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        html = resp.read().decode('utf-8')
        matches = re.findall(r'imgurl=(http[^&]+)', html)
        
        success = False
        for m in matches:
            img_url = urllib.parse.unquote(m)
            print(f"Trying: {img_url}")
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            try:
                img_resp = urllib.request.urlopen(req_img, timeout=10)
                img = Image.open(BytesIO(img_resp.read()))
                if img.mode != 'RGBA': img = img.convert('RGBA')
                img.save(os.path.join(public_dir, f"{name}.webp"), "WEBP", quality=85)
                print(f"Saved {name}.webp")
                success = True
                break
            except Exception as e:
                print(f"Failed to download {img_url}: {e}")
        if not success:
            print("No valid image found on Yahoo")
    except Exception as e:
        print(f"Search failed: {e}")
