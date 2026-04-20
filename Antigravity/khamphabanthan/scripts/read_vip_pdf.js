const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../data/TSHTD_Thái_2026.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('vip_pdf_extracted.txt', data.text, 'utf8');
    console.log("Extracted VIP PDF successfully. Length:", data.text.length);
    console.log(data.text.substring(0, 1500));
}).catch(function(err){
    console.log("Error extracting:", err);
});
