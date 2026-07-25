import { promises as fs } from "fs";
import path from "path";

const VIDEO_DIR = path.join(process.cwd(), "public", "videos");
const VIDEO_FILE = path.join(VIDEO_DIR, "face-intro.mp4");
const PUBLIC_PATH = "/videos/face-intro.mp4";

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  const exists = await fileExists(VIDEO_FILE);
  return new Response(JSON.stringify({ exists, path: exists ? PUBLIC_PATH : null }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.startsWith("multipart/form-data")) {
    return new Response(JSON.stringify({ error: "Expected multipart/form-data" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return new Response(JSON.stringify({ error: "No file provided" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.mkdir(VIDEO_DIR, { recursive: true });
  await fs.writeFile(VIDEO_FILE, buffer);

  return new Response(JSON.stringify({ success: true, path: PUBLIC_PATH }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
