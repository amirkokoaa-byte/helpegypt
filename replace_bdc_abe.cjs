const fs = require('fs');

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');

const bdcData = JSON.parse(fs.readFileSync('public/bdc_250_branches.json', 'utf8'));
const abeData = JSON.parse(fs.readFileSync('public/abe_250_branches.json', 'utf8'));

const bdcString = JSON.stringify(bdcData, null, 2).split('\n').map(line => '  ' + line).join('\n');
const abeString = JSON.stringify(abeData, null, 2).split('\n').map(line => '  ' + line).join('\n');

const replaceBank = (content, bankId, newBankString) => {
  let startIdx = content.indexOf(`  {\n    "id": "${bankId}",`);
  if (startIdx === -1) startIdx = content.indexOf(`  {\n    id: "${bankId}",`);
  if (startIdx === -1) startIdx = content.indexOf(`  {\n    id: '${bankId}',`);

  if (startIdx !== -1) {
    let endIdx = content.indexOf('  {\n', startIdx + 10); // find next object
    if (endIdx === -1) {
      endIdx = content.lastIndexOf('];\n'); // it might be the last object
    }
    
    if (endIdx !== -1) {
      // The substring to replace is from startIdx to endIdx
      let newContent = content.substring(0, startIdx) + newBankString;
      if (endIdx === content.lastIndexOf('];\n')) {
          newContent += '\n' + content.substring(endIdx);
      } else {
          newContent += ',\n' + content.substring(endIdx);
      }
      return newContent;
    }
  }
  return content;
};

content = replaceBank(content, 'banque_du_caire', bdcString);
content = replaceBank(content, 'abe', abeString);

fs.writeFileSync('src/data/egyptBanksData.ts', content, 'utf8');
console.log("Replaced BDC and ABE successfully");
