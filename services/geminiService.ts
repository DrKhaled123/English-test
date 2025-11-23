import { GoogleGenAI } from "@google/genai";

// Initialize the client safely
let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  // Log a generic error to prevent potential key leakage in stack traces
  console.error("Failed to initialize Gemini client");
}

// Simple in-memory cache to store translations
// This improves speed by avoiding repeat API calls for the same text
const translationCache = new Map<string, string>();

export const translateText = async (text: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key not found. Returning simulated translation.");
    return `(Simulated Arabic Translation for: "${text}") - الرجاء إضافة مفتاح API للحصول على ترجمة حقيقية.`;
  }

  // Check cache first
  if (translationCache.has(text)) {
    return translationCache.get(text)!;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Translate the following English text to Arabic. Only provide the Arabic translation, nothing else. Text: "${text}"`,
    });

    const result = response.text || "Translation unavailable.";
    
    // Store in cache
    translationCache.set(text, result);
    
    return result;
  } catch (error) {
    console.error("Translation service error"); // Generic error message for security
    return "Error retrieving translation.";
  }
};