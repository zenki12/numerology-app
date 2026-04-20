const mammoth = require('mammoth');
const fs = require('fs');

async function parseDoc() {
    const docPath = 'E:/huyen hoc AI/test/Antigravity/khamphabanthan/data/RAG Thần số học ứng dụng.docx';
    
    try {
        const result = await mammoth.extractRawText({path: docPath});
        const text = result.value;
        
        fs.writeFileSync('extracted_text.txt', text, 'utf8');
        console.log("Extraction complete. Length: " + text.length);
        
        // Print the first 1000 characters to verify content
        console.log("Preview:\n" + text.substring(0, 1000));
    } catch (err) {
        console.error(err);
    }
}

parseDoc();
