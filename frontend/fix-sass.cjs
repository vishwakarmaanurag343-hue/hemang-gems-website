const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if(file.endsWith('.scss')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  if (content.includes('@import')) {
    content = content.replace(/@import\s+(['"])(.*?)\1;/g, '@use $1$2$1 as *;');
    modified = true;
  }
  
  if (content.includes('darken(')) {
    content = content.replace(/darken\(#c89b3c,\s*10%\)/g, '#a67f2b');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log('Fixed warnings in ' + file);
  }
});
