import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md p-6 flex justify-between items-center fixed top-0 w-full z-50">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">Aurum Family Services</h1>
        <nav className="space-x-6">
          <Link href="/education" className="text-gray-700 hover:text-blue-600 text-lg">Educación</Link>
          <Link href="/lifestyle" className="text-gray-700 hover:text-blue-600 text-lg">Lifestyle</Link>
          <Link href="/home-design" className="text-gray-700 hover:text-blue-600 text-lg">Hogar & Diseño</Link>
          <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Contacto</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <h2 className="text-5xl font-extrabold">Servicios Exclusivos para Familias Extranjeras</h2>
        <p className="text-xl mt-4 max-w-2xl">
          Asesoramiento en educación, lifestyle, hogar y gestión patrimonial en España con un toque de exclusividad.
        </p>
        <Link href="/contact" className="mt-6 px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all">Contáctanos</Link>
      </section>
    </div>
  );
}
