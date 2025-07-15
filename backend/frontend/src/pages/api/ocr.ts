// pages/api/ocr.ts
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import Tesseract from "tesseract.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err || !files.file) {
      return res.status(400).json({ error: "File upload failed" });
    }

    const file = files.file as formidable.File;

    try {
      const buffer = fs.readFileSync(file.filepath);
      let text = "";

      if (file.mimetype === "application/pdf") {
        const data = await pdfParse(buffer);
        text = data.text;
      } else if (file.originalFilename?.endsWith(".docx")) {
        const result = await mammoth.extractRawText({ buffer });
        text = result.value;
      } else if (file.mimetype?.startsWith("image/")) {
        const {
          data: { text: ocrText },
        } = await Tesseract.recognize(file.filepath, "eng");
        text = ocrText;
      } else {
        return res.status(400).json({ error: "Unsupported file type" });
      }

      res.status(200).json({ text });
    } catch (error: unknown) {
      console.error(error);
      res.status(500).json({ error: "Failed to process file" });
    }
  });
}
