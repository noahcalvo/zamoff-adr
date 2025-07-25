from PIL import Image

# Load image
image = Image.open("public/zamoffADR-transparent.png").convert("RGBA")
pixels = image.load()

width, height = image.size

# Loop through every pixel manually
for x in range(width):
    for y in range(height):
        r, g, b, a = pixels[x, y]

        # If pixel is not white AND not fully transparent
        if a == 255 and (r, g, b) != (0,0,0):
            pixels[x, y] = (255, 255, 255, 255)  # Make it white
# Save result
image.save("public/zamoffADR-white-transparent.png")