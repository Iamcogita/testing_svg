# Load and inspect the contents of the uploaded SVG file
svg_file_path = "./client/src/assets/andro.svg"

with open(svg_file_path, "r", encoding="utf-8") as file:
    svg_content = file.read()

# Display a snippet of the SVG content to understand its structure
svg_content[:1000]  # Showing only the first 1000 characters for preview
