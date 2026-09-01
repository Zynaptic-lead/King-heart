const fs = require('fs');
const path = require('path');

const srcImage = 'C:/Users/MAC/.gemini/antigravity/brain/605f4f2b-b01b-439c-9066-1376324c4c0d/.user_uploaded/media_1788288458492.jpg';
const destDir = path.join(__dirname, 'public', 'hero');
const destImage = path.join(destDir, 'designer-primary.jpg');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage);
    console.log('✓ Successfully copied owner photo to public/hero/designer-primary.jpg');
  }
} catch (err) {
  console.error('Copy hero image notice:', err.message);
}
