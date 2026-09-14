import os
import glob
from PIL import Image

brain_dir = r"C:\Users\shinj\.gemini\antigravity-ide\brain\16168fea-777d-4fcc-a7cb-021a226d0322"
public_dir = r"d:\code\Web\Aslor\public\partners"

prefixes = [
    'pwd_haryana', 'nbcc', 'sail', 'jreda', 'npcil', 'ser',
    'upneda', 'nmdc', 'nitra', 'mod', 'bccl', 'mahapwd'
]

for prefix in prefixes:
    # Find all matching screenshots
    pattern = os.path.join(brain_dir, f"{prefix}_*.png")
    matches = glob.glob(pattern)
    
    if matches:
        # Get the latest one (they are timestamped)
        latest_img = sorted(matches)[-1]
        
        try:
            img = Image.open(latest_img)
            if img.mode != 'RGBA': 
                img = img.convert('RGBA')
            
            # Save as webp
            out_path = os.path.join(public_dir, f"{prefix}.webp")
            img.save(out_path, "WEBP", quality=90)
            print(f"Successfully converted {prefix} from {os.path.basename(latest_img)}")
        except Exception as e:
            print(f"Error processing {prefix}: {e}")
    else:
        print(f"Warning: No images found for {prefix}")
