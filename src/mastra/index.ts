import { Mastra } from "@mastra/core";
import { myAgent } from "./agents";
import { z } from "zod";
 
export const mastra = new Mastra({
  agents: { myAgent },
});

const response = await myAgent.generate([
  { role: "user", content: "Hello, how can you assist me today?" },
]);
 
console.log("Agent:", response.text);

const stream = await myAgent.stream([
  { role: "user", content: "Tell me a story." },
]);
 
console.log("Agent:");
 
for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}


const schema = z.object({
  summary: z.string(),
  keywords: z.array(z.string()),
});
 
const responseWithSchema = await myAgent.generate(
  [
    {
      role: "user",
      content:
        "Please provide a summary and keywords for the following text: ...",
    },
  ],
  {
    output: schema,
  },
);
 
console.log("Structured Output:", responseWithSchema.object);