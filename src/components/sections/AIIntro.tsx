"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const REMOTE_API = "/api/face-intro";

export default function AIIntro() {
  const [remotePath, setRemotePath] = useState<string | null>(null);
  const [hasRemote, setHasRemote] = useState<boolean | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadRemote() {
      try {
        const res = await fetch(REMOTE_API);
        if (!mounted) return;
        const data = await res.json();
        setHasRemote(Boolean(data.exists));
        setRemotePath(data.path ?? null);
      } catch {
        if (!mounted) return;
        setHasRemote(false);
        setRemotePath(null);
      }
    }

    loadRemote();

    return () => {
      mounted = false;
    };
  }, []);

  async function refreshRemote() {
    try {
      const res = await fetch(REMOTE_API);
      const data = await res.json();
      setHasRemote(Boolean(data.exists));
      setRemotePath(data.path ?? null);
    } catch {
      setHasRemote(false);
      setRemotePath(null);
    }
  }

  async function uploadFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("video")) {
      setUploadMessage("Please upload a valid video file.");
      return;
    }

    setIsUploading(true);
    setUploadMessage(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(REMOTE_API, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (res.ok && result?.path) {
        setUploadMessage("Video uploaded successfully. Reload the page to preview it.");
        setHasRemote(true);
        setRemotePath(result.path);
      } else {
        setUploadMessage(result?.error ?? "Upload failed.");
      }
    } catch (error) {
      setUploadMessage("Upload failed. Try again.");
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  }

  return (
    <section id="ai-intro" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          eyebrow="record 10 / 10 · intro · demo"
          heading="AI Video Intro"
          description="Upload your ready MP4 to make the intro appear in the portfolio."
        />

        <Card className="mt-6 p-6 relative">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-mist">Intro preview</p>
              <div className="mt-4 bg-ink/30 rounded-md overflow-hidden h-64 flex items-center justify-center relative">
                {hasRemote ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={remotePath ?? undefined}
                    autoPlay={autoplay}
                    loop={loop}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center px-4">
                    <p className="text-sm text-mist">No intro video found yet.</p>
                    <p className="text-xs text-mist">Upload your MP4 below or place it at <span className="font-mono">/public/videos/face-intro.mp4</span>.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="block text-xs font-medium text-mist">Upload MP4 intro</label>
              <input
                type="file"
                accept="video/mp4"
                onChange={uploadFile}
                className="block w-full text-sm text-mist file:rounded file:border-0 file:bg-teal file:px-3 file:py-2 file:text-sm file:font-semibold file:text-black"
              />
              {uploadMessage ? <p className="text-xs text-mist">{uploadMessage}</p> : null}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={autoplay} onChange={() => setAutoplay((v) => !v)} />
                <span className="text-xs text-mist">Autoplay</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={loop} onChange={() => setLoop((v) => !v)} />
                <span className="text-xs text-mist">Loop</span>
              </label>
              <button
                onClick={refreshRemote}
                className="rounded bg-slate-700 px-3 py-2 text-sm text-white"
              >
                Refresh Preview
              </button>
            </div>

            <div className="text-xs text-mist space-y-2">
              <p>Instructions:</p>
              <ul className="list-disc ml-4">
                <li>Select your ready MP4 using the upload control above.</li>
                <li>After upload, reload the page if the preview does not appear immediately.</li>
                <li>The file is saved as <span className="font-mono">/public/videos/face-intro.mp4</span>.</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
