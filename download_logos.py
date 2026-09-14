import os
import urllib.request
from io import BytesIO
from PIL import Image
from duckduckgo_search import DDGS

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

with DDGS() as ddgs:
    for name, query in agencies.items():
        print(f"Searching for {query}...")
        try:
            results = list(ddgs.images(query, max_results=1))
            if results:
                url = results[0]['image']
                print(f"Downloading {url}")
                # Use a custom user agent to prevent 403 Forbidden
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
                try:
                    with urllib.request.urlopen(req, timeout=10) as response:
                        img = Image.open(BytesIO(response.read()))
                        # Ensure the image has an alpha channel if needed, or convert to RGB
                        # WebP supports RGBA
                        if img.mode != 'RGBA':
                            img = img.convert('RGBA')
                        
                        output_path = os.path.join(public_dir, f"{name}.webp")
                        img.save(output_path, "WEBP", quality=85)
                        print(f"Saved {name}.webp")
                except Exception as req_err:
                    print(f"Failed to download {name}, error: {req_err}")
            else:
                print(f"No results for {name}")
        except Exception as e:
            print(f"Error processing {name}: {e}")
