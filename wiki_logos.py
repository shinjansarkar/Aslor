import urllib.request, json
import os
from io import BytesIO
from PIL import Image

agencies = {
    'pwd_haryana': 'Haryana',
    'nbcc': 'NBCC (India) Limited',
    'sail': 'Steel Authority of India',
    'jreda': 'Jharkhand',
    'npcil': 'Nuclear Power Corporation of India',
    'ser': 'South Eastern Railway zone',
    'upneda': 'Uttar Pradesh',
    'nmdc': 'National Mineral Development Corporation',
    'nitra': 'Northern India Textile Research Association',
    'mod': 'Ministry of Defence (India)',
    'bccl': 'Bharat Coking Coal',
    'mahapwd': 'Maharashtra'
}

public_dir = r"d:\code\Web\Aslor\public\partners"
os.makedirs(public_dir, exist_ok=True)

def search_wikipedia_image(query):
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&utf8=&format=json"
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        if not data['query']['search']: return None
        title = data['query']['search'][0]['title']
        
        images_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=images&format=json"
        req = urllib.request.Request(images_url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        pages = data['query']['pages']
        page_id = list(pages.keys())[0]
        if 'images' not in pages[page_id]: return None
        
        images = pages[page_id]['images']
        logo_title = None
        for img in images:
            t = img['title'].lower()
            if t.endswith('.png') or t.endswith('.jpg') or t.endswith('.jpeg'):
                if 'logo' in t or 'seal' in t or 'emblem' in t or 'flag' in t:
                    logo_title = img['title']
                    break
        if not logo_title:
            for img in images:
                t = img['title'].lower()
                if t.endswith('.png') or t.endswith('.jpg') or t.endswith('.jpeg'):
                    logo_title = img['title']
                    break
                    
        if not logo_title: return None
            
        imginfo_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(logo_title)}&prop=imageinfo&iiprop=url&format=json"
        req = urllib.request.Request(imginfo_url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        pages = data['query']['pages']
        page_id = list(pages.keys())[0]
        return pages[page_id]['imageinfo'][0]['url']
    except Exception as e:
        return None

for name, query in agencies.items():
    url = search_wikipedia_image(query)
    if url:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, timeout=10) as response:
                img = Image.open(BytesIO(response.read()))
                if img.mode != 'RGBA': img = img.convert('RGBA')
                img.save(os.path.join(public_dir, f"{name}.webp"), "WEBP", quality=85)
                print(f"Saved {name}.webp from {url}")
        except Exception as e:
            print(f"Failed to download {name}: {e}")
    else:
        print(f"No image for {name}")
