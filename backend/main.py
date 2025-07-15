from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline, BartTokenizer, BartForConditionalGeneration
from PIL import Image
import pdfplumber
import pytesseract
import requests
import unfluff
import io
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

# Existing FastAPI setup (including model, OCR, summarize, extract, etc.)




# 🔹 Load model
model_path = "./model"  # Update if different
tokenizer = BartTokenizer.from_pretrained(model_path)
model = BartForConditionalGeneration.from_pretrained(model_path)
summarizer = pipeline("summarization", model=model, tokenizer=tokenizer)

app = FastAPI()

# 🔹 CORS (open for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 File upload OCR
@app.post("/api/ocr")
async def extract_text(file: UploadFile = File(...)):
    content = await file.read()

    # PDF
    if file.filename.endswith(".pdf"):
        text = ""
        with pdfplumber.open(io.BytesIO(content)) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
        return {"text": text.strip()}

    # Image
    try:
        image = Image.open(io.BytesIO(content))
        text = pytesseract.image_to_string(image)
        return {"text": text.strip()}
    except Exception as e:
        return {"text": "", "error": str(e)}

# 🔹 Summarize endpoint
class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
def summarize_text(request: TextRequest):
    summary = summarizer(request.text, max_length=130, min_length=30, do_sample=False)
    return {"summary": summary[0]["summary_text"]}

# 🔹 Extract from URL
class UrlRequest(BaseModel):
    url: str

@app.post("/api/extract")
def extract_from_url(request: UrlRequest):
    try:
        res = requests.get(request.url)
        parsed = unfluff.unfluff(res.text)
        return {"text": parsed.get("text", "")}
    except Exception as e:
        return {"text": "", "error": str(e)}
    
# Mount static frontend
app.mount("/assets", StaticFiles(directory="frontend/dist/assets"), name="assets")

@app.get("/")
@app.get("/{full_path:path}")
async def serve_frontend(full_path: str = ""):
    file_path = os.path.join("frontend", "dist", "index.html")
    return FileResponse(file_path)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
