# Generate Open Graph Image for Invoicer

## Method 1: Browser-Based Generator (Recommended - No Installation Required)

1. **Start your development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Open the generator** in your browser:
   ```
   http://localhost:5173/generate-og-image.html
   ```

3. **Generate the image**:
   - The generator will automatically try to load your logo from `src/assets/images/logo.png`
   - If the logo doesn't load automatically, click "Upload Logo" and select your logo file
   - Click "Generate OG Image" to create the preview
   - Right-click on the canvas and select "Save image as..."
   - Save it as `og-image.jpg` in the `public` folder

4. **Verify**:
   - The image should be at: `public/og-image.jpg`
   - Dimensions: 1200x630px
   - Format: JPEG

## Method 2: Using Node.js Script (Requires canvas library)

1. **Install canvas library**:
   ```bash
   npm install canvas
   ```

2. **Run the generator script**:
   ```bash
   node generate-og-image.js
   ```

3. **Check the output**:
   - The image will be automatically saved to `public/og-image.jpg`

## Method 3: Manual Creation (Using Design Tools)

If you prefer to create it manually:

1. **Dimensions**: 1200px × 630px
2. **Background**: Dark green (#163300) with gradient
3. **Elements**:
   - Logo (left side, ~200px)
   - Title: "Invoicer" (white, bold, large)
   - Subtitle: "Best POS & Inventory Management App" (green #9FE870)
   - Description: "Track stock, manage sales, and grow your business" (white)
   - Bottom text: "Trusted by 2,000+ retailers | Free to use"

4. **Save as**: `public/og-image.jpg` (JPEG format, quality 90-95%)

## Testing Your OG Image

After creating the image, test it using:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Just paste your URL: `https://getinvoicer.app/`

## What the OG Image Does

The Open Graph image appears when your site is shared on:
- Facebook
- Twitter
- LinkedIn
- WhatsApp
- Slack
- Other social platforms

It helps increase click-through rates and makes your links stand out!

## Troubleshooting

- **Logo not loading**: Make sure the logo path is correct or upload it manually
- **Image quality**: Ensure the exported image is high quality (90-95% JPEG)
- **File size**: Keep it under 1MB for faster loading
- **Dimensions**: Must be exactly 1200x630px for best results

---

**Note**: Once you've generated the image, you can delete the generator files:
- `public/generate-og-image.html`
- `generate-og-image.js`
- `GENERATE-OG-IMAGE.md` (this file)

