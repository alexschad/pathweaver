import type { Metadata } from "next";
import Adventure from "./adventure";
import { GoogleGenAI } from "@google/genai";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "New Adventure",
};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});

const prompt = `write a text base chose your own adventure book with at least 20 branches. Put at least 2 paragraphs of text on each node. The end nodes need to be a win or failed node
that puts an end to the story. The Title should not indicate a win or a loss. Please put them in the following json format: 
{“id”:number, “title”:text, “text”:text, “action”:text, win”:boolean, “fail”: boolean, children”:[childnodeids]}.
Id = identification Number
title = Title Text for the Node
text = at least 2 paragraphs of text
action = Text for the choice that the user selects to get to this node. not more than 100 characters
win = you won the game can be empty
fail = you failed can be empty
children = list of ids for the next nodes you can go to can be an empty list for the last nodes
Response with valid JSON only. Do not include any explanation or extra text.
`;

export default async function AdventurePage({}) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);
    const respText = response.text || "";
    const regex = /```json\n?|```/g;
    const fixed = respText.replace(regex, "");
    const sanitizedOutput = fixed.replace(/[\u0000-\u0019]+/g, "");
    console.log(sanitizedOutput);
    const adventure = sanitizedOutput ? JSON.parse(sanitizedOutput) : [];

    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <Adventure data={adventure} />
            </div>
        </main>
    );
}
