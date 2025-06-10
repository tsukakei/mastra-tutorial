import { Agent } from "@mastra/core/agent";
import { bedrock } from '@ai-sdk/amazon-bedrock';
 
export const myAgent = new Agent({
  name: "My Agent",
  instructions: "You are a helpful assistant.",
  model: bedrock("us.anthropic.claude-sonnet-4-20250514-v1:0"),
});