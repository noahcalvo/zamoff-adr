from PIL import Image

# Load image
image = Image.open("public/logo_trans.png").convert("RGBA")
pixels = image.load()

width, height = image.size

# Loop through every pixel manually
for x in range(width):
    for y in range(height):
        r, g, b, a = pixels[x, y]

        # If pixel is not white AND not fully transparent
        if a > 0 and (r, g, b) != (255, 255, 255):
            pixels[x, y] = (255, 255, 255, 1)  # Make it white, keep alpha

# Save result
image.save("public/logo_2.png")
