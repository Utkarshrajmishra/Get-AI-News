import { GoogleGenerativeAI } from '@google/generative-ai';
import config from '../config/config';
export class AIService{
     genAI=new GoogleGenerativeAI(import.meta.env.VITE_GEMMINI_API_KEY);
    
    

     async run(prompt) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.0-pro"});
        const result=await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;

     }
}

const geminiService = new AIService();
export default geminiService;