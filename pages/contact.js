import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-gray-800">Contáctanos</h1>
      <p className="text-lg text-gray-600 mt-4">Déjanos tu mensaje y te responderemos pronto.</p>
      <form className="mt-6 w-full max-w-md">
        <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded mb-4" />
        <input type="email" placeholder="Tu correo" className="w-full p-3 border rounded mb-4" />
        <textarea placeholder="Tu mensaje" className="w-full p-3 border rounded mb-4"></textarea>
        <button className="w-full p-3 bg-blue-600 text-white rounded">Enviar</button>
      </form>
    </div>
  );
}
