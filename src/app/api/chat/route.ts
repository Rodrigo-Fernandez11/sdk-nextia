import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// Crear un cliente de API de OpenAI (¡amigable para edge!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Configurar el entorno de ejecución a "edge"
export const runtime = "edge";

export async function POST(req: Request) {
  // Extraer los `messages` del cuerpo de la solicitud
  const { messages } = await req.json();

  // Solicitar a OpenAI una completación de chat en tiempo real dada la indicación
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // Convertir la respuesta en un flujo de texto amigable
  const stream = OpenAIStream(response);

  // Responder con el flujo de texto
  return new StreamingTextResponse(stream);
}
