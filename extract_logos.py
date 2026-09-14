import cv2
import numpy as np
import os

img_path = r"C:\Users\shinj\.gemini\antigravity-ide\brain\16168fea-777d-4fcc-a7cb-021a226d0322\.user_uploaded\media_1789412026812.png"
public_dir = r"d:\code\Web\Aslor\public\partners"

img = cv2.imread(img_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to find non-white regions
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Get bounding boxes
boxes = [cv2.boundingRect(c) for c in contours]

# Filter out very small boxes (noise) or very large boxes (the whole frame)
h_img, w_img = img.shape[:2]
filtered_boxes = [b for b in boxes if b[2] > 50 and b[3] > 50 and b[2] < w_img*0.8 and b[3] < h_img*0.8]

# We expect 12 logos. Let's see if we can group them into a 3x4 grid.
# Actually, since there are lines between them, we might be detecting the lines too.
# Let's just slice it. The user's image is a 3x4 grid inside a green border, with a header.
# A simpler approach: find the green border.
# Or just use the 3x4 slice, but skip the top 15% (header).

img_h, img_w = img.shape[:2]

# Let's assume the grid starts from y = 15% to y = 95%
grid_y_start = int(img_h * 0.15)
grid_y_end = int(img_h * 0.98)
grid_h = grid_y_end - grid_y_start

col_w = img_w // 3
row_h = grid_h // 4

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
        
        # Bounding box of the cell
        left = col * col_w
        upper = grid_y_start + row * row_h
        right = (col + 1) * col_w
        lower = grid_y_start + (row + 1) * row_h
        
        cell = img[upper:lower, left:right]
        
        # Crop 15% from all sides to remove grid lines
        ch, cw = cell.shape[:2]
        pad_x = int(cw * 0.15)
        pad_y = int(ch * 0.15)
        
        logo = cell[pad_y:ch-pad_y, pad_x:cw-pad_x]
        
        # Save
        out_path = os.path.join(public_dir, f"{name}.webp")
        cv2.imwrite(out_path, logo, [cv2.IMWRITE_WEBP_QUALITY, 90])
        print(f"Saved {name}.webp")
