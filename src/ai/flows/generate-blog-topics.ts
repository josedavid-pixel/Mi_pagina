'use server';

/**
 * @fileOverview Generates blog post topic ideas based on trending tech and AI news.
 *
 * - generateBlogTopics - A function that generates blog post topic ideas.
 * - GenerateBlogTopicsInput - The input type for the generateBlogTopics function.
 * - GenerateBlogTopicsOutput - The return type for the generateBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  trendingNews: z
    .string()
    .describe('Trending tech and AI news to generate blog topics from.'),
});

export type GenerateBlogTopicsInput = z.infer<typeof GenerateBlogTopicsInputSchema>;

const GenerateBlogTopicsOutputSchema = z.object({
  topics: z
    .string()
    .array()
    .describe('An array of blog post topic ideas.'),
});

export type GenerateBlogTopicsOutput = z.infer<typeof GenerateBlogTopicsOutputSchema>;

export async function generateBlogTopics(input: GenerateBlogTopicsInput): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a blog topic generator. Given the following trending tech and AI news, generate a list of blog post topic ideas.\n\nTrending News: {{{trendingNews}}}`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
