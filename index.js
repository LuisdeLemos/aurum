import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">Aurum Family Services</h1>
      <p className="text-lg text-gray-600 mt-4">
        Servicios exclusivos para familias extranjeras en España.
      </p>
      <a href="/contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">Contáctanos</a>
    </div>
  );
}
