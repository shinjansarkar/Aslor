import cv2
import numpy as np
import os

img_path = r"C:\Users\shinj\.gemini\antigravity-ide\brain\16168fea-777d-4fcc-a7cb-021a226d0322\.user_uploaded\media_1789412026812.png"
public_dir = r"d:\code\Web\Aslor\public\partners"
os.makedirs(public_dir, exist_ok=True)

img = cv2.imread(img_path)
if img is None:
    print("Could not read image")
    exit(1)

# Convert to grayscale and find edges
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150)

# Find contours
contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest bounding box that has an aspect ratio somewhat close to the grid (e.g., width > height or similar)
# We assume the grid is the largest rectangle in the image.
max_area = 0
best_rect = None

for c in contours:
    x, y, w, h = cv2.boundingRect(c)
    area = w * h
    if area > max_area:
        max_area = area
        best_rect = (x, y, w, h)

if not best_rect:
    print("Could not find grid")
    exit(1)

x, y, w, h = best_rect
print(f"Found grid at x={x}, y={y}, w={w}, h={h}")

# If the detected box is too small, fallback to the entire image except 10% margins
img_h, img_w = img.shape[:2]
if w < img_w * 0.5 or h < img_h * 0.5:
    print("Detected box too small, using fallback")
    x, y = int(img_w * 0.05), int(img_h * 0.15)
    w, h = int(img_w * 0.9), int(img_h * 0.8)

grid = img[y:y+h, x:x+w]

col_w = w // 3
row_h = h // 4

names = [
    'pwd_haryana', 'nbcc', 'sail',
    'jreda', 'npcil', 'ser',
    'upneda', 'nmdc', 'nitra',
    'mod', 'bccl', 'mahapwd'
]

for row in range(4):
    for col in range(3):
        idx = row * 3 + col
        name = names[idx]
        
        left = col * col_w
        upper = row * row_h
        right = (col + 1) * col_w
        lower = (row + 1) * row_h
        
        cell = grid[upper:lower, left:right]
        
        ch, cw = cell.shape[:2]
        # Crop out the dashed lines (approx 15% margin)
        pad_x = int(cw * 0.15)
        pad_y = int(ch * 0.15)
        
        logo = cell[pad_y:ch-pad_y, pad_x:cw-pad_x]
        
        out_path = os.path.join(public_dir, f"{name}.webp")
        cv2.imwrite(out_path, logo, [cv2.IMWRITE_WEBP_QUALITY, 90])
        print(f"Saved {name}.webp")
