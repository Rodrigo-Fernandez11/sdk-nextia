import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Nuestra Primera App con IA
        </h1>
        <Chat />
      </div>
    </main>
  );
}
