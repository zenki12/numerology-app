const fs = require('fs');
const path = require('path');

const text = fs.readFileSync('extracted_text.txt', 'utf8');
const lines = text.split('\n');

const db = {
    ngay_sinh: {},
    duong_doi: {},
    no_nghiep: {}
};

let currentSection = null;
let currentNumber = null;
let currentBuffer = [];

function flushBuffer() {
    if (currentSection && currentNumber && currentBuffer.length > 0) {
        db[currentSection][currentNumber] = currentBuffer.join('\n\n').trim();
    }
    currentBuffer = [];
}

for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Check for Nợ nghiệp definitions
    let noNghiepMatch = line.match(/^- \*\*(\d+\/\d+):\*\*(.*)/);
    if (noNghiepMatch) {
        flushBuffer();
        db.no_nghiep[noNghiepMatch[1]] = noNghiepMatch[2].trim();
        continue;
    }

    // Check headers
    let ngaySinhMatch = line.match(/^### Con số (?:Ngày sinh|Vua) (\d+)/);
    if (ngaySinhMatch) {
        flushBuffer();
        currentSection = 'ngay_sinh';
        currentNumber = ngaySinhMatch[1];
        continue;
    }

    let duongDoiMatch = line.match(/^## Năng lượng và ý nghĩa của Con số Đường đời (\d+)/);
    if (duongDoiMatch) {
        flushBuffer();
        currentSection = 'duong_doi';
        currentNumber = duongDoiMatch[1];
        continue;
    }

    // If it's a completely new section like `# Ý NGHĨA CỦA...`
    if (line.match(/^# [A-Z]/)) {
        flushBuffer();
        currentSection = null;
        currentNumber = null;
        continue;
    }

    // If we are in a valid parsing state and it's not a markdown heading
    if (currentSection && currentNumber && !line.startsWith('#')) {
        currentBuffer.push(line);
    }
}
flushBuffer();

const outputPath = path.join(__dirname, '../data/parsed_knowledge_base.json');
fs.writeFileSync(outputPath, JSON.stringify(db, null, 2), 'utf8');
console.log("Successfully parsed database.");
console.log("Ngày sinh:", Object.keys(db.ngay_sinh).length);
console.log("Đường đời:", Object.keys(db.duong_doi).length);
console.log("Nợ nghiệp:", Object.keys(db.no_nghiep).length);
