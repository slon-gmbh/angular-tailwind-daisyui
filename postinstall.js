const fs = require('fs');
const path = require('path');

// Path to the template folder in your npm package
const templateDir = path.join(__dirname, 'template');

// Files to copy
const filesToCopy = ['postcss.config.js', 'tailwind.config.js'];

filesToCopy.forEach(file => {
    const src = path.join(templateDir, '/', file);
    const dest = path.join(process.cwd(), file);

    // Copy file if it doesn't already exist
    if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        console.log(`Created ${file} in the project root`);
    } else {
        console.log(`${file} already exists in the project root`);
    }
});
