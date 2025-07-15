// src/lib/extractFromFile.ts
import axios from "axios";

export const extractFromFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/api/ocr", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return (response.data as { text?: string })?.text || "";
};
