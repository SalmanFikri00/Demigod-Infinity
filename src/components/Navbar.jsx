import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#ffffff00] backdrop-blur-lg shadow-[rgba(255,255,255,.1)] shadow-2xl px-4 sm:px-6 md:px-10 lg:px-20 fixed z-40">
      {/* Navbar Start: Logo */}
      <div className="navbar-start">
        <img
          src="/logo/logo-full.png"
          className="mix-blend-screen h-8 sm:h-10 md:h-12 lg:h-20"
          alt="Demigod Infinity Logo"
        />
      </div>

      {/* Navbar Center: Menu untuk Layar Besar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a href="/#tentang-kami" className="hover:text-gray-300">Tentang Kami</a>
          </li>
          <li>
            <a href="/#produk&jasa" className="hover:text-gray-300">Produk & Jasa</a>
          </li>
          <li>
            <a href="/#testimoni" className="hover:text-gray-300">Testimoni</a>
          </li>
          <li>
            <a href="/#kontak" className="hover:text-gray-300">Kontak</a>
          </li>
        </ul>
      </div>

      {/* Navbar End: Ikon Sosial Media */}
      <div className="navbar-end flex items-center gap-2 sm:gap-3">
        <div className="flex gap-2 sm:gap-3">
          <a href="https://wa.me/6289501007666" target="_blank">
            <img src="/icon/whatsapp.png" className="w-5 sm:w-6" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/demigod.infinity">
            <img src="/icon/instagram.png" className="w-5 sm:w-6" alt="Instagram" />
          </a>
        </div>

        {/* Hamburger Menu untuk Layar Kecil */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52"
            >
              <li>
                <a href="/#tentang-kami" className="hover:bg-gray-700">Tentang Kami</a>
              </li>
              <li>
                <a href="/#produk&jasa" className="hover:bg-gray-700">Produk & Jasa</a>
              </li>
              <li>
                <a href="/#testimoni" className="hover:bg-gray-700">Testimoni</a>
              </li>
              <li>
                <a href="/#kontak" className="hover:bg-gray-700">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;