import { GoogleGenAI } from "@google/genai";

import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


const AI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function askGemini(text) {
  const response = await AI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: text,
  });

  try {
    console.log(response.text)
    return response.text;

  } catch (error) {
    console.log(error)
    return "Cavab alına bilmədi."
  }
}

