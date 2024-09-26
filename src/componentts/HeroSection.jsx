import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import video from "../assets/carne.mp4";
import logo from "../assets/jardin.png";
import hero from "../assets/hero.jpeg";
import logo1 from "../assets/logo4.png"; // Asegúrate de importar el logo

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Fondo de Video */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>

      {/* Menú de Navegación */}
      <nav className="absolute top-4 left-1/2 z-30 flex w-[95%] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full bg-gray-800 bg-opacity-50 py-4 px-8 text-white shadow-md md:top-6">
  {/* Logo */}
  <img src={logo1} alt="restaurante" className="w-20 h-20" />

  {/* Ícono de Hamburguesa (solo en móviles) */}
  <div className="flex items-center md:hidden">
    <button onClick={toggleMenu} className="text-3xl">
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Menú (visible en pantallas grandes) */}
  <div className="hidden md:flex space-x-6">
    <a href="#dishes" className="text-sm md:text-lg hover:text-yellow-500">Nuestros platos</a>
    <a href="#menu" className="text-sm md:text-lg hover:text-yellow-500">Menú</a>
    <a href="#about" className="text-sm md:text-lg hover:text-yellow-500">Nosotros</a>
    <a href="#contact" className="text-sm md:text-lg hover:text-yellow-500">Contacto</a>
  </div>

  {/* Menú desplegable (solo en móviles) */}
  {isOpen && (
    <div className="absolute top-16 left-1/2 z-40 w-[80%] -translate-x-1/2 rounded-lg bg-gray-800 bg-opacity-50 py-6 text-center shadow-lg md:hidden">
      <a href="#dishes" className="block py-2 text-lg text-white hover:text-yellow-500" onClick={toggleMenu}>
        Nuestros platos
      </a>
      <a href="#menu" className="block py-2 text-lg text-white hover:text-yellow-500" onClick={toggleMenu}>
        Menú
      </a>
      <a href="#about" className="block py-2 text-lg text-white hover:text-yellow-500" onClick={toggleMenu}>
        Nosotros
      </a>
      <a href="#contact" className="block py-2 text-lg text-white hover:text-yellow-500" onClick={toggleMenu}>
        Contacto
      </a>
    </div>
  )}
</nav>


      {/* Gradiente y Contenido Principal */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
          <img src={logo} alt="restaurante" className="w-full p-4" />
          <p className="p-4 text-lg tracking-tighter text-white">Bienvenido a Nuestro Restaurante</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
