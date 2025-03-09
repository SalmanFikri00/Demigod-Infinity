// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
                src="/logo/logo-full.png"
                className="mix-blend-screen h-12 lg:h-20"
                alt=""
            />
            <p className="text-gray-400 mt-2">
              Kami adalah perusahaan perdagangan dan jasa yang berkomitmen menyediakan produk dan layanan berkualitas tinggi dengan tim berpengalaman.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/demigod.infinity" target="_blank" className="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-600">
                <img src="/icon/instagram.png" className="w-4" alt="instagram" />
              </a>
              <a href="https://wa.me/6289501007666" target="_blank" className="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-600">
                <img src="/icon/whatsapp.png" className="w-4" alt="whatsapp" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <span className="font-semibold">Alamat:</span> Jl. Raya Bisnis No. 123, Jakarta Selatan, Indonesia
              </li>
              <li className="mb-2">
                <span className="font-semibold">Telepon:</span> +62 895-0100-7666
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> info@demigodinfinity.com
              </li>
              <li>
                <span className="font-semibold">Jam Kerja:</span> Senin - Sabtu, 08:00 - 17:00
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Tautan Berguna</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#tentang-kami" className="hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li className="mb-2">
                <a href="#produk&jasa" className="hover:text-white transition-colors">Produk & Jasa</a>
              </li>
              <li className="mb-2">
                <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
              </li>
              <li>
                <a href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Lokasi Kami</h3>
            <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.305070943512!2d106.82216561476994!3d-6.223456895495199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8c8e8b5b5%3A0x4e5e5e5e5e5e5e5e!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1677654321890!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Demigod Infinity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;