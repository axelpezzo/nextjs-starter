const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  optimizedImages,
]);

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
 
(async () => {
    await imagemin(['images/*.jpg'], 'build/images', {
        use: [
            imageminMozjpeg()
        ]
    });
 
    console.log('Images optimized');
})();