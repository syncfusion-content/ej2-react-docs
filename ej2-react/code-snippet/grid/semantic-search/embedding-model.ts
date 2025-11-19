import { pipeline, env } from "@xenova/transformers";

// Force remote model loading and disable caching to avoid bundler/HTML fetch issues.
env.allowLocalModels = false;
env.useBrowserCache = false;
env.localModelPath = './';
env.allowRemoteModels = true;

let pipe: any = null;

export async function initializePipeline() {
  pipe = await pipeline("feature-extraction", "Supabase/gte-small");
  return pipe;
}

export async function embeddingModel(description: string) {
  if (!pipe) {
    pipe = await initializePipeline();
  }
  try {
    // Generate the embedding from text.
    const output = await pipe(description, {
      pooling: "mean",
      normalize: true,
    });
    // Extract the embedding output.
    const embedding = Array.from(output.data);
    return embedding;
  } catch (error) {
    console.error('Embedding model error:', error);
    // Log raw output if available for debugging (e.g., if it's HTML).
    if (output) {
      console.error('Raw output:', output);
    }
    throw error; // Re-throw to propagate.
  }
}