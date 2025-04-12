// src/ai/flows/generate-dino-fact.ts
'use server';

/**
 * @fileOverview Generates a fun fact about dinosaurs or the importance of preserving them.
 *
 * - generateDinoFact - A function that generates a dinosaur fact.
 * - GenerateDinoFactInput - The input type for the generateDinoFact function.
 * - GenerateDinoFactOutput - The return type for the generateDinoFact function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateDinoFactInputSchema = z.object({
  topic: z.string().optional().describe('The topic of the dinosaur fact.'),
});
export type GenerateDinoFactInput = z.infer<typeof GenerateDinoFactInputSchema>;

const GenerateDinoFactOutputSchema = z.object({
  fact: z.string().describe('A fun fact about dinosaurs or their preservation.'),
});
export type GenerateDinoFactOutput = z.infer<typeof GenerateDinoFactOutputSchema>;

export async function generateDinoFact(input: GenerateDinoFactInput): Promise<GenerateDinoFactOutput> {
  return generateDinoFactFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDinoFactPrompt',
  input: {
    schema: z.object({
      topic: z.string().optional().describe('The topic of the dinosaur fact.'),
    }),
  },
  output: {
    schema: z.object({
      fact: z.string().describe('A fun fact about dinosaurs or their preservation.'),
    }),
  },
  prompt: `You are a dinosaur expert. Generate a fun fact about dinosaurs or the importance of preserving them.
{{#if topic}}
The fact should be about the following topic: {{{topic}}}.
{{/if}}
`,
});

const generateDinoFactFlow = ai.defineFlow<
  typeof GenerateDinoFactInputSchema,
  typeof GenerateDinoFactOutputSchema
>({
  name: 'generateDinoFactFlow',
  inputSchema: GenerateDinoFactInputSchema,
  outputSchema: GenerateDinoFactOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
