import { GoogleGenAI } from "@google/genai";
import { Answers, Bundle } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateProductBundles = async (answers: Answers): Promise<Bundle[]> => {
  const prompt = `
    You are an expert on baby gear with access to Google Search. Based on the user's preferences, generate 3 distinct baby gear bundles. Each bundle must include a stroller and an infant car seat or be a travel system.

    User Preferences:
    - Budget: ${answers.budget}
    - Lifestyle: ${answers.lifestyle}
    - Key Feature: ${answers.features}
    - Car Situation: ${answers.cars}

    CRITICAL INSTRUCTIONS:
    1.  For each product, you MUST use your search tool to find its real-world average 'rating' and total 'ratingCount'. The 'rating' should be a number (e.g., 4.8) and 'ratingCount' should be a number (e.g., 1523). If you cannot find this information for a product, return null for those fields.
    2.  Provide a specific 'type' for each product, such as "Infant Car Seat", "Jogging Stroller", or "Travel System".
    3.  The 'searchQuery' MUST be the most specific term to find the exact product (e.g., "Chicco Bravo Trio Travel System").
    4.  Based on all user preferences, identify the ONE bundle that is the single best overall match. For that one bundle object, add the property \`"isBestMatch": true\`. The other two bundles must not have this property.
    5.  Your entire response MUST be a single, valid JSON array of 3 bundle objects. Do not include any text, markdown, or explanations outside of this raw JSON array.

    The required JSON structure:
    [
      {
        "bundleName": "string",
        "totalPriceRange": "string",
        "description": "string",
        "isBestMatch": boolean,
        "products": [
          {
            "type": "string", // E.g., "Infant Car Seat", "Travel System"
            "name": "string",
            "brand": "string",
            "description": "string",
            "priceRange": "string",
            "searchQuery": "string",
            "pros": ["string"],
            "cons": ["string"],
            "rating": number | null,
            "ratingCount": number | null
          }
        ]
      }
    ]
  `;

  try {
     const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
       config: {
        temperature: 0.2,
        tools: [{googleSearch: {}}],
      }
    });
    
    // Clean potential markdown and parse
    let jsonText = response.text.trim().replace(/^```json\n/, '').replace(/\n```$/, '');
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error generating or parsing product bundles:", error);
    if (error instanceof Error && 'response' in error) {
      console.error("Raw AI response:", (error as any).response);
    }
    throw new Error("Failed to generate product bundles. The AI returned an unexpected response.");
  }
};