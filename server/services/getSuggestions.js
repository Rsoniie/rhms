import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_APIKEY}` });

async function suggestionAi(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);

    return response.text;

}

export default suggestionAi;
