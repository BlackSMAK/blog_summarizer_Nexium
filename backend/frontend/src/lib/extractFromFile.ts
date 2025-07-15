import mammoth from "mammoth";
import Tesseract from "tesseract.js";
import pdfParse from "pdf-parse";

export async function extractTextFromFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const uint8 = new Uint8Array(buffer);

  if (file.name.endsWith(".pdf")) {
    const data = await pdfParse(uint8);
    return data.text;
  }

  if (file.name.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    return result.value;
  }

  if (file.type.startsWith("image/")) {
    const { data: { text } } = await Tesseract.recognize(file, "eng");
    return text;
  }

  return "";
}
