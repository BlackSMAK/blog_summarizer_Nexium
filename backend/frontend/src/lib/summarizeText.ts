export async function summarizeText(text: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama3-70b-8192", // you can try llama3 or gemma as well
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes blog posts and articles clearly and concisely.",
        },
        {
          role: "user",
          content: `Please summarize the following text:\n\n${text}`,
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Failed to summarize");
  }

  return data.choices?.[0]?.message?.content?.trim() || "";
}
