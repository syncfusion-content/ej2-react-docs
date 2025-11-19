import OpenAI from "openai";

const OPENAI_API_KEY = "YOUR_API_KEY";

const openAi = new OpenAI({
    apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true
});

export async function getAzureChatAIRequest(options: any) {
    try {
        const completion = await openAi.chat.completions.create({
            model: "gpt-4o-mini",
            messages: options.messages,
            temperature: options.temperature ?? 0.7,
            max_tokens: options.maxTokens ?? 1000
        });
        return completion.choices[0].message.content;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}

export async function OpenAiModel(description: string) {
    const chatCompletion = await getOpenAiModel(description);
    return chatCompletion.choices[0].message.content;
}

export async function getOpenAiModel(query: string) {
    return await openAi.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
    });
}

// Open AI Embedding.

export async function OpenAiEmbeddingModel(description: string) {
    const embedding = await openAi.embeddings.create({
        model: "text-embedding-ada-002",
        input: description,
        encoding_format: "float",
      });
    return embedding;
}