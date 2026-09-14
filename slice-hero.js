const sharp = require('sharp');
const fs = require('fs');

// Paths
const inputPath = 'public/images/hero/hero-gold-master.png';
const outputDir = 'public/images/hero/';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function sliceHero() {
  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;
    
    console.log(`Original image size: ${width}x${height}`);

    // Calculate crop coordinates
    // 1. Quran Pedestal (left side: x:0-40%, y:0-100%)
    const quranLeft = 0;
    const quranRight = Math.floor(width * 0.40);
    const quranTop = 0;
    const quranBottom = height;

    // 2. Gold Dome Header (center top: x:40-100%, y:0-45%)
    const domeLeft = Math.floor(width * 0.40);
    const domeRight = width;
    const domeTop = 0;
    const domeBottom = Math.floor(height * 0.45);

    // 3. Badges Ribbon (center bottom: x:40-100%, y:45-100%)
    const badgesLeft = Math.floor(width * 0.40);
    const badgesRight = width;
    const badgesTop = Math.floor(height * 0.45);
    const badgesBottom = height;

    // Crop and save each layer
    // 1. Quran Pedestal
    await sharp(inputPath)
      .extract({ left: quranLeft, top: quranTop, width: quranRight - quranLeft, height: quranBottom - quranTop })
      .toFile(`${outputDir}quran-pedestal-3d.png`);
    console.log(`Saved: ${outputDir}quran-pedestal-3d.png`);

    // 2. Gold Dome Header
    await sharp(inputPath)
      .extract({ left: domeLeft, top: domeTop, width: domeRight - domeLeft, height: domeBottom - domeTop })
      .toFile(`${outputDir}gold-dome-header.png`);
    console.log(`Saved: ${outputDir}gold-dome-header.png`);

    // 3. Badges Ribbon
    await sharp(inputPath)
      .extract({ left: badgesLeft, top: badgesTop, width: badgesRight - badgesLeft, height: badgesBottom - badgesTop })
      .toFile(`${outputDir}badges-ribbon.png`);
    console.log(`Saved: ${outputDir}badges-ribbon.png`);

    console.log('\nAll layers sliced successfully!');
  } catch (error) {
    console.error('Error slicing image:', error);
  }
}

sliceHero();
