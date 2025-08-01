// src/ai/flows/personalized-loan-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized loan recommendations based on user profile and financial needs.
 *
 * - personalizedLoanRecommendations - A function that returns loan recommendations.
 * - PersonalizedLoanInput - The input type for the personalizedLoanRecommendations function.
 * - PersonalizedLoanOutput - The return type for the personalizedLoanRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLoanInputSchema = z.object({
  annualIncome: z.number().describe('The user\'s annual income.'),
  creditScore: z.number().describe('The user\'s credit score.'),
  loanAmountNeeded: z.number().describe('The amount of loan the user needs.'),
  loanPurpose: z
    .string()
    .describe('The purpose of the loan (e.g., education, business).'),
  employmentStatus: z
    .string()
    .describe('The employment status of the user (e.g., employed, unemployed).'),
});
export type PersonalizedLoanInput = z.infer<typeof PersonalizedLoanInputSchema>;

const PersonalizedLoanOutputSchema = z.object({
  recommendedLoans: z
    .array(z.string())
    .describe('A list of loan programs recommended for the user.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the loan recommendations.'),
});
export type PersonalizedLoanOutput = z.infer<typeof PersonalizedLoanOutputSchema>;

export async function personalizedLoanRecommendations(
  input: PersonalizedLoanInput
): Promise<PersonalizedLoanOutput> {
  return personalizedLoanRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLoanRecommendationsPrompt',
  input: {schema: PersonalizedLoanInputSchema},
  output: {schema: PersonalizedLoanOutputSchema},
  prompt: `You are an expert financial advisor specializing in loan recommendations.

  Based on the user's financial profile and needs, recommend suitable loan programs.
  Explain the reasoning behind each recommendation.

  User Profile:
  - Annual Income: {{{annualIncome}}}
  - Credit Score: {{{creditScore}}}
  - Loan Amount Needed: {{{loanAmountNeeded}}}
  - Loan Purpose: {{{loanPurpose}}}
  - Employment Status: {{{employmentStatus}}}

  Provide the recommendations in the following format:
  {
    "recommendedLoans": ["Loan Program 1", "Loan Program 2"],
    "reasoning": "Explanation for each recommendation."
  }`,
});

const personalizedLoanRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedLoanRecommendationsFlow',
    inputSchema: PersonalizedLoanInputSchema,
    outputSchema: PersonalizedLoanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
