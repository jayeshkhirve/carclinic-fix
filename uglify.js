const fs = require('fs');
const UglifyJS = require('uglify-js');

// Directory where Next.js build output resides
const buildDir = './.next';

// Iterate over all JavaScript files in the build directory
fs.readdirSync(buildDir).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = `${buildDir}/${file}`;
    const code = fs.readFileSync(filePath, 'utf8');

    // Minify and obfuscate the JavaScript code
    const result = UglifyJS.minify(code, {
      mangle: {
        toplevel: true
      }
    });

    // Write the minified/obfuscated code back to the file
    console.log(filePath)
    fs.writeFileSync(filePath, result.code, 'utf8');
  }
});