const fs = require('fs');

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');

const bdcData = JSON.parse(fs.readFileSync('public/bdc_250_branches.json', 'utf8'));
const abeData = JSON.parse(fs.readFileSync('public/abe_250_branches.json', 'utf8'));

const replaceBank = (content, bankId, newData) => {
  // Find "id": "bankId" or id: "bankId"
  const regex = new RegExp(`{\\s*(?:"id"|id)\\s*:\\s*["']${bankId}["']`, 'g');
  const match = regex.exec(content);
  if (match) {
    const startIdx = match.index; // index of the '{'
    
    // Find the end of this object in the array.
    // The next object will start with '  {', or it will end with '];'
    let endIdx = content.indexOf('\n  },', startIdx);
    if (endIdx === -1) endIdx = content.indexOf('\n  }', startIdx); // if it's the last one
    
    if (endIdx !== -1) {
      // Find the comma if there is one
      let actualEnd = endIdx + 5; // skip '\n  },'
      let isLast = false;
      if (content.substring(startIdx, actualEnd).indexOf('},') === -1) {
          isLast = true;
          actualEnd = endIdx + 4; // skip '\n  }'
      }
      
      const newBankString = JSON.stringify(newData, null, 2).split('\n').map(line => '  ' + line).join('\n');
      
      let newContent = content.substring(0, startIdx) + newBankString.trim();
      if (!isLast) {
          newContent += ',\n  ';
          // Wait, we need to correctly append the rest. Let's just use the index of the next `{` or `]`
          let nextObjStart = content.indexOf('{', actualEnd);
          let arrayEnd = content.indexOf(']', actualEnd);
          
          let nextRealStart = nextObjStart !== -1 ? (arrayEnd !== -1 ? Math.min(nextObjStart, arrayEnd) : nextObjStart) : arrayEnd;
          
          newContent = content.substring(0, startIdx) + newBankString.trim() + content.substring(actualEnd);
      } else {
          newContent = content.substring(0, startIdx) + newBankString.trim() + '\n' + content.substring(actualEnd);
      }
      return newContent;
    }
  }
  console.log(`Could not find ${bankId}`);
  return content;
}

content = replaceBank(content, 'banque_du_caire', bdcData);
content = replaceBank(content, 'abe', abeData);

fs.writeFileSync('src/data/egyptBanksData.ts', content, 'utf8');
console.log("Replaced BDC and ABE successfully");
