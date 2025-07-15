import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Upload, Type } from "lucide-react";
import { summarizeText } from "@/lib/summarizeText";
import { extractFromFile } from "@/lib/extractFromFile";

const SummarizeSection = () => {
  const [activeTab, setActiveTab] = useState("text");
  const [inputText, setInputText] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    setLoading(true);
    setError("");
    setSummary("");

    try {
      let contentToSummarize = "";

      if (activeTab === "text") {
        if (!inputText.trim()) throw new Error("Text input is empty.");
        contentToSummarize = inputText.trim();
      } else if (activeTab === "upload") {
        if (!selectedFile) throw new Error("Please upload a file.");
        const extracted = await extractFromFile(selectedFile);
        if (!extracted) throw new Error("Could not extract text from file.");
        contentToSummarize = extracted;
      } else {
        throw new Error("Unsupported input method.");
      }

      const result = await summarizeText(contentToSummarize);
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

  return (
    <section id="summarize-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upload a File or Paste Text
            </h2>
            <p className="text-muted-foreground text-lg">
              Our AI extracts content and summarizes it instantly.
            </p>
          </div>

          <Card className="glass border-border/20 p-8">
            <Tabs
              defaultValue="text"
              onValueChange={(val) => setActiveTab(val)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload file
                </TabsTrigger>
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Add text
                </TabsTrigger>
              </TabsList>

              {/* Upload Tab */}
              <TabsContent value="upload" className="space-y-6">
                <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept=".docx,application/pdf,image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setSelectedFile(e.target.files[0]);
                      }
                    }}
                  />
                  {selectedFile && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload a DOCX, PDF, or image. We'll extract the text and summarize it.
                </p>
              </TabsContent>

              {/* Text Tab */}
              <TabsContent value="text" className="space-y-6">
                <Textarea
                  placeholder="Paste your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-32 text-lg glass border-border/50 resize-none"
                />
              </TabsContent>

              {/* Summarize Button */}
              <div className="pt-6">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full"
                  onClick={handleSummarize}
                  disabled={
                    loading ||
                    (activeTab === "text" && !inputText.trim()) ||
                    (activeTab === "upload" && !selectedFile)
                  }
                >
                  {loading ? "Summarizing..." : "SUMMARIZE THIS"}
                </Button>
              </div>

              {/* Summary Output */}
              {summary && (
                <div className="mt-6 p-4 border rounded-lg bg-muted text-sm whitespace-pre-wrap">
                  <h3 className="font-semibold mb-2">Summary:</h3>
                  <p>{summary}</p>
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mt-4 text-sm text-red-500">
                  {error}
                </div>
              )}
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SummarizeSection;
