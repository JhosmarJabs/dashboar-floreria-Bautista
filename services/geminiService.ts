import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert florist assistant for 'Lumina Florist'. Your goal is to provide concise, helpful care tips for flowers, specifically specializing in Sunflowers, Blue Hydrangeas, and White Roses. Keep answers under 100 words. Be polite and professional.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response about these flowers right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while consulting the AI florist.";
  }
};