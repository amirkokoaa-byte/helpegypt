const fs = require('fs');

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');
const nbeData = JSON.parse(fs.readFileSync('public/nbe_250_branches.json', 'utf8'));

// Convert the nbeData object to a nicely formatted string
const nbeString = JSON.stringify(nbeData, null, 2).split('\n').map(line => '  ' + line).join('\n');

// Find the start of the NBE object
const nbeIdIndex = content.lastIndexOf('"id": "nbe"');
if (nbeIdIndex !== -1) {
  // Find the '{' that comes right before the nbe id
  const startIdx = content.lastIndexOf('{', nbeIdIndex);
  
  if (startIdx !== -1) {
    // Keep everything before the nbe object
    let newContent = content.substring(0, startIdx);
    
    // Check if there are other NBE objects in the file
    // Wait, earlier the user had a duplicate key error! So there might be TWO NBE objects.
    // Let's just remove ALL objects that have "id": "nbe" or id: "nbe" (but we already deleted the first one with sed).
    
    // Wait, since it's the last element in the array, let's just slice until startIdx and append the new NBE object.
    newContent += nbeString.trim() + '\n];\n';
    
    fs.writeFileSync('src/data/egyptBanksData.ts', newContent, 'utf8');
    console.log("Replaced NBE successfully");
  }
} else {
  console.log("Could not find nbe");
}
