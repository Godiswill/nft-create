const sharp = require('sharp');

sharp('./traits/Background/yellow.png')
  .composite([
    { input: './traits/Skin/watercolor.png' },
    { input: './traits/Face/tiger.png' },
  ])
  .toFile('combined.jpeg');