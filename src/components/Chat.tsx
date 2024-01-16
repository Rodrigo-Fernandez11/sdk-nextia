"use client";
// Importa el hook useChat desde el módulo "ai/react"
import { useChat } from "ai/react";

// Define el componente Chat
export function Chat() {
  // Extrae las propiedades y funciones necesarias del hook useChat
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  // Retorna la estructura del componente
  return (
    // Contenedor principal con estilos para centrar y fondo blanco
    <section className="flex justify-center items-center h-screen bg-white">
      {/* Formulario para enviar mensajes */}
      <form onSubmit={handleSubmit} className="max-w-xl w-full p-4">
        {/* Contenedor para mostrar mensajes anteriores */}
        <div className="text-black max-h-96 h-full overflow-y-auto">
          {/* Mapea y muestra cada mensaje en un contenedor con estilos condicionales */}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-gray-200"
                  : "self-start bg-blue-100"
              }`}
            >
              {/* Muestra el rol del mensaje (asistente o usuario) */}
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role}
              </span>{" "}
              {/* Muestra el contenido del mensaje */}
              {m.content}
            </div>
          ))}
        </div>

        {/* Sección para ingresar nuevo mensaje y botón de envío */}
        <div className="flex justify-between my-4">
          {/* Etiqueta para indicar al usuario que escriba algo */}
          <label className="text-black block font-bold my-2">
            Say something...
          </label>
          {/* Botón para enviar el mensaje con estilos condicionales basados en estado de carga y contenido del mensaje */}
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        {/* Área de texto para ingresar el nuevo mensaje */}
        <textarea
          rows={4}
          value={input}
          onChange={handleInputChange}
          className="text-black bg-white px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300"
          placeholder="Type something..."
          autoFocus
        />
      </form>
    </section>
  );
}
