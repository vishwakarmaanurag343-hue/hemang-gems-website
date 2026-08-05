const fs = require('fs');
const comps = [
  'components/layout/Navbar/Navbar', 
  'components/layout/Footer/Footer', 
  'pages/Home/Home', 
  'pages/About/About', 
  'pages/Catalogue/Catalogue', 
  'pages/ProductDetail/ProductDetail', 
  'pages/Contact/Contact'
];
comps.forEach(c => {
  const p = 'src/' + c + '.jsx';
  const name = c.split('/').pop();
  const content = `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    <div>\n      <h1>${name}</h1>\n    </div>\n  );\n};\n\nexport default ${name};\n`;
  fs.writeFileSync(p, content);
});
