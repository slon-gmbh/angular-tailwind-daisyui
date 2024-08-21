const fs = require('fs');
const path = require('path');

// Path to the template folder in your npm package
const templateDir = path.join(__dirname, 'template');

// Files to copy
const filesToCopy = ['postcss.config.js', 'tailwind.config.js'];

// Function to find the project root directory (where package.json is located)
function findProjectRoot(currentDir) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
        return currentDir;
    }

    const parentDir = path.resolve(currentDir, '..');
    if (parentDir === currentDir) {
        throw new Error('Project root (with package.json) not found.');
    }

    return findProjectRoot(parentDir);
}

// Create file to verify that script has been executed
fs.writeFileSync(path.join(process.cwd(), 'postinstall.txt'), 'Postinstall script executed');

// Find the consumer project's root directory
const projectRoot = findProjectRoot(process.cwd());
filesToCopy.forEach(file => {
    const src = path.join(templateDir, '/', file);
    const dest = path.join(projectRoot, file);

    // Copy file if it doesn't already exist
    if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        console.log(`Created ${file} in the project root`);
    } else {
        console.log(`${file} already exists in the project root`);
    }
});
