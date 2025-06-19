// images.js
const imageModules = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  as: 'url',
});

// Turn it into a simple object with keys
const images = {};

for (const path in imageModules) {
  // Extract file name (e.g. 'image1.png')
  const name = path.split('/').pop();
  images[name] = imageModules[path];
}

export default images;
