/**
 * Generate Open Graph Image for Invoicer
 * This script creates an og-image.jpg file in the public folder
 * 
 * Usage: node generate-og-image.js
 * 
 * Requires: npm install canvas (or use the HTML generator instead)
 */

const fs = require('fs');
const path = require('path');

// Check if canvas is available
let canvas;
try {
  const { createCanvas, loadImage, registerFont } = require('canvas');
  canvas = { createCanvas, loadImage, registerFont };
} catch (e) {
  console.log('Canvas library not found. Please install it with: npm install canvas');
  console.log('Or use the HTML generator: open public/generate-og-image.html in your browser');
  process.exit(1);
}

const { createCanvas, loadImage } = canvas;

async function generateOGImage() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#163300');
  gradient.addColorStop(1, '#1a4a00');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Decorative circle
  ctx.fillStyle = 'rgba(159, 232, 112, 0.1)';
  ctx.beginPath();
  ctx.arc(width - 100, 100, 200, 0, Math.PI * 2);
  ctx.fill();

  // Try to load logo
  const logoPath = path.join(__dirname, 'src', 'assets', 'images', 'logo.png');
  let logoLoaded = false;

  try {
    if (fs.existsSync(logoPath)) {
      const logo = await loadImage(logoPath);
      const logoSize = 200;
      const logoX = 80;
      const logoY = (height - logoSize) / 2;

      // White background circle for logo
      ctx.beginPath();
      ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fill();

      // Draw logo
      ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
      logoLoaded = true;
    }
  } catch (error) {
    console.log('Logo not found or could not be loaded, continuing without logo');
  }

  // Main title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 72px Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  const title = 'Invoicer';
  const titleX = logoLoaded ? 350 : 80;
  const titleY = height / 2 - 80;

  // Text shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;

  ctx.fillText(title, titleX, titleY);

  // Subtitle
  ctx.font = '48px Arial, sans-serif';
  ctx.fillStyle = '#9FE870';
  ctx.shadowBlur = 5;
  ctx.fillText('Best POS & Inventory Management App', titleX, titleY + 80);

  // Description
  ctx.font = '32px Arial, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.shadowBlur = 3;
  ctx.fillText('Track stock, manage sales, and grow your business', titleX, titleY + 140);

  // Reset shadow
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Bottom text
  ctx.font = '28px Arial, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.textAlign = 'center';
  ctx.fillText('Trusted by 2,000+ retailers | Free to use', width / 2, height - 50);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  const outputPath = path.join(__dirname, 'public', 'og-image.jpg');
  fs.writeFileSync(outputPath, buffer);

  console.log('✅ Open Graph image generated successfully!');
  console.log(`📁 Saved to: ${outputPath}`);
  console.log(`📐 Dimensions: ${width}x${height}px`);
}

generateOGImage().catch(console.error);

