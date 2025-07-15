import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { summarizeText } from "@/lib/summarizeText";
import { Copy } from "lucide-react";

const SummarizeSection = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setError("");
    setSummary("");
    setCopied(false);

    try {
      if (!inputText.trim()) throw new Error("Text input is empty.");
      const result = await summarizeText(inputText.trim());
      setSummary(result);
    } catch (err: unknown) {
      console.error(err);
      setError(
        typeof err === "object" && err !== null && "message" in err
          ? (err as { message: string }).message
          : "Failed to summarize. Check your input or API."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy to clipboard.");
    }
  };

  return (
    <section id="summarize-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paste Text to Summarize
            </h2>
            <p className="text-muted-foreground text-lg">
              Our AI extracts key points and summarizes your text instantly.
            </p>
          </div>

          <Card className="glass border-border/20 p-8 space-y-6">
            <Textarea
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-32 text-lg glass border-border/50 resize-none"
            />

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleSummarize}
              disabled={loading || !inputText.trim()}
            >
              {loading ? "Summarizing..." : "SUMMARIZE THIS"}
            </Button>

            {summary && (
              <div className="mt-6 p-4 border rounded-lg bg-muted text-sm whitespace-pre-wrap relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Summary:</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-xs"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <p>{summary}</p>
              </div>
            )}

            {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SummarizeSection;
