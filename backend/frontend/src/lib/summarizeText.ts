export async function summarizeText(text: string): Promise<string> {
  const response = await fetch("http://localhost:8000/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Summarization failed: ${errText}`);
  }

  const data = await response.json();
  return data.summary;
}
