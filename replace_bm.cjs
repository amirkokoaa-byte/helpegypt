const fs = require('fs');

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');
const bmData = JSON.parse(fs.readFileSync('public/banque_misr_300_branches.json', 'utf8'));
const bmString = JSON.stringify(bmData, null, 2).split('\n').map(line => '  ' + line).join('\n');

const startToken = '  {\n    id: "banque_misr",';
let startIdx = content.indexOf(startToken);

if (startIdx === -1) {
  startIdx = content.indexOf('  {\n    "id": "banque_misr",');
}
if (startIdx === -1) {
  startIdx = content.indexOf('  {\n    id: \'banque_misr\',');
}

if (startIdx !== -1) {
  // Find the next bank starting
  let endIdx = content.indexOf('  {\n    "id": "cib",', startIdx);
  if (endIdx === -1) endIdx = content.indexOf('  {\n    id: "cib",', startIdx);
  if (endIdx === -1) endIdx = content.indexOf('  {\n    id: "cbe",', startIdx); // just in case
  if (endIdx === -1) endIdx = content.indexOf('  {', startIdx + 10); // find next { at root level array
  
  if (endIdx !== -1) {
    let newContent = content.substring(0, startIdx) + bmString + ',\n' + content.substring(endIdx);
    fs.writeFileSync('src/data/egyptBanksData.ts', newContent, 'utf8');
    console.log("Replaced banque_misr successfully");
  } else {
    console.log("Could not find end of banque_misr");
  }
} else {
  console.log("Could not find banque_misr");
}
