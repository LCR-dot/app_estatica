import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";



function App() {
  const [status, setStatus] = useState(null);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o0pqczu",
        "template_gfpqqne",
        form.current,
        "GGtgjTwYwKsjojLyD"

      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          // Opcional: ocultar después de 4 segundos
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus("error");

          setTimeout(() => setStatus(null), 4000);
        }
      );
  };


  return (
    <div className="bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      
<nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

    {/* LOGO + NOMBRE */}
    <div className="flex items-center gap-3" >
      <img
        src="img/Logo simple para Inn.png"
        alt="Logo Innovan-Dote"
        className="w-20 h-20 rounded-full p-1 hover:scale-150 transition"
      />
      <h1 className="font-bold text-lg tracking-wide">Innovan-Dote</h1>
    </div>

    {/* MENÚ */}
      <div className="flex items-center gap-6 text-sm font-medium">

        <a href="#inicio" className="hover:text-blue-200 transition">
          Inicio
        </a>

        <a href="#servicios" className="hover:text-blue-200 transition">
          Servicios
        </a>

        <a href="#contacto" className="hover:text-blue-200 transition">
          Contacto
        </a>

        {/* LINK EXTERNO */}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-blue-900 transition"
        >
          🌐 Google
        </a>

      </div>
    </div>
  </nav>










      {/* HERO */}
      <section id="inicio" className="text-center py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Innovación Tecnológica</h2>
        <p className="max-w-2xl mx-auto">
          En Innovan-Dote desarrollamos soluciones digitales modernas enfocadas en la transformación tecnológica.
        </p>
      </section>

      {/* VIDEO CENTRADO */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="w-full md:w-3/4 aspect-video shadow-lg rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Video Innovación"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Servicios</h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">


          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">
  
            {/* Imagen */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Desarrollo Web"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Contenido */}
            <h4 className="font-bold text-lg mb-2">Desarrollo Web</h4>
            <p className="text-gray-600">
              Creación de aplicaciones modernas y responsivas.
            </p>

          </div>




          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Consultoría TI"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h4 className="font-bold text-lg mb-2">Consultoría TI</h4>
            <p className="text-gray-600">
              Optimización de procesos mediante tecnología.
            </p>

          </div>





          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="Soporte Técnico"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h4 className="font-bold text-lg mb-2">Soporte Técnico</h4>
            <p className="text-gray-600">
              Mantenimiento y mejora continua de sistemas.
            </p>

          </div>







        </div>
      </section>

      {/* TABLA */}
      <section className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">Nuestros Clientes</h3>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border border-gray-300 text-center">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-2">Empresa</th>
                <th className="p-2">Servicio</th>
                <th className="p-2">Año</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2">Dart-Art</td>
                <td>Web</td>
                <td>2024</td>
              </tr>
              <tr className="border">
                <td className="p-2">Contabilidad Integral</td>
                <td>Consultoría</td>
                <td>2025</td>
              </tr>
              <tr className="border">
                <td className="p-2">Mobily Versa</td>
                <td>Soporte Técnico</td>
                <td>2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="py-16 bg-white">
        {status === "success" && (
          <div className="max-w-lg mx-auto mb-4 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 text-center shadow">
            ✅ Mensaje enviado correctamente
          </div>
        )}

        {status === "error" && (
          <div className="max-w-lg mx-auto mb-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 text-center shadow">
            ❌ Error al enviar el mensaje
          </div>
        )}


        <h3 className="text-3xl font-bold text-center mb-8">Contacto</h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto bg-gray-100 p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Nombre"
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full p-2 border rounded"
            required
          ></textarea>

          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full">
            Enviar
          </button>
        </form>



      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">

          {/* Redes sociales */}
          <div className="flex justify-center gap-6">

            {/* Facebook */}
            <a href="https://facebook.com" className="hover:text-blue-300 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0022 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://facebook.com" className="hover:text-pink-300 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" className="hover:text-blue-300 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7.2h-4v-6.4c0-1.5 0-3.4-2-3.4s-2.3 1.6-2.3 3.3v6.5H9v-12z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://linkedin.com" className="hover:text-gray-300 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 .1 2 .1 1.1 1.9 3 1.3 3.7 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.9 5.5-5.7 5.8.5.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 .5z"/>
              </svg>
            </a>

          </div>

          {/* Texto */}
          <p className="text-sm">
            © 2026 Innovan-Dote - Todos los derechos reservados
          </p>

        </div>
      </footer>
    </div>
  );
}

export default App;