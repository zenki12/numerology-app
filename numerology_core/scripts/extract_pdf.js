const PDFParser = require('pdf2json');
const fs = require('fs');
const path = require('path');

const pdfPath = 'E:\\huyen hoc AI\\test\\TSHTD_Thái_2026.pdf';
const outputPath = path.join(__dirname, 'pdf_full_text.txt');

const pdfParser = new PDFParser(null, 1);

pdfParser.on('pdfParser_dataError', errData => {
  console.error('Parse Error:', errData.parserError);
  process.exit(1);
});

pdfParser.on('pdfParser_dataReady', pdfData => {
  console.log('PDF loaded successfully!');
  console.log('Number of pages:', pdfData.Pages ? pdfData.Pages.length : 'unknown');
  
  const rawText = pdfParser.getRawTextContent();
  fs.writeFileSync(outputPath, rawText, 'utf8');
  console.log(`\nSaved full text to: ${outputPath}`);
  console.log(`Total characters: ${rawText.length}`);
  
  // Preview first 3000 chars
  console.log('\n=== PREVIEW (first 3000 chars) ===');
  console.log(rawText.substring(0, 3000));
});

pdfParser.loadPDF(pdfPath);
