"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import cardData from "@/data/ProductData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import testimonials from "@/data/testimoniData.js";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center relative flex-col">
        <div>
          <img
            src="/logo/Logo.png"
            alt="Demigod Infinity Logo"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] mix-blend-screen drop-shadow-[0_2px_50px_rgba(255,255,255,.4)]"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold drop-shadow-[0_2px_50px_rgba(255,255,255,.4)] text-center mt-4">
            TRADE AND SERVICES
          </h1>
        </div>
      </section>

{/* Tentang Kami Section */}
      <section
        id="tentang-kami"
        className="min-h-[50vh] py-16 sm:py-24 md:py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10"
      >
        <div className="flex-1 w-full px-4 sm:px-0">
          <h2
            data-aos="fade-right"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-[0_2px_35px_rgba(255,255,255,.3)] relative after:absolute after:w-20 sm:after:w-24 md:after:w-32 lg:after:w-40 after:h-1 after:rounded-xl after:bg-white after:bottom-[-10px] after:left-0 w-fit"
          >
            Tentang Kami
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay={200}
            className="py-6 w-full sm:w-[90%] md:w-[80%] lg:w-[900px]"
          >
            <p className="text-base sm:text-lg md:text-xl">
              Demigod Infinity adalah perusahaan yang bergerak di bidang perdagangan dan jasa. Dengan pengalaman dan pengetahuan tim yang professional serta ahli di setiap bidangnya, kami berkomitmen kuat untuk menyediakan solusi yang professional dan berkualitas.
            </p>
            <br />
            <p className="text-base sm:text-lg md:text-xl">
              Kami mengutamakan kualitas andalan dan produk unggulan dalam setiap aspek layanan yang kami berikan, berfokus untuk memenuhi kebutuhan klien dengan pelayanan terbaik yang tidak hanya efektif, tetapi juga istimewa.            </p>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center items-center relative mt-8 lg:mt-0 px-4 sm:px-0 ">
          <img
            src="/image/3:4/ayam-potong.png"
            className="shadow-2xl shadow-[black] rounded-md absolute w-32 sm:w-40 md:w-48 lg:w-52 -translate-x-20 sm:-translate-x-24 md:-translate-x-28 lg:-translate-x-36 translate-y-16 sm:translate-y-24 md:translate-y-28 lg:translate-y-32"
            alt="Ayam Potong"
          />
          <img
            src="/image/3:4/barberstudio.png"
            className="shadow-2xl shadow-[black] rounded-md z-10 w-36 sm:w-48 md:w-56 lg:w-60 "
            alt="Barberstudio"
          />
          <img
            src="/image/3:4/konveksi.png"
            className="shadow-2xl shadow-[black] rounded-md absolute w-32 sm:w-40 md:w-48 lg:w-52 translate-x-20 sm:translate-x-24 md:translate-x-28 lg:translate-x-36 -translate-y-16 sm:-translate-y-24 md:-translate-y-28 lg:-translate-y-32"
            alt="Konveksi"
          />
        </div>
      </section>
      {/* Produk & Jasa Section */}
      <section id="produk&jasa" className="py-16 sm:py-24 md:py-32 lg:py-40 flex w-full justify-center items-center flex-col">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-[0_2px_35px_rgba(255,255,255,.5)] text-center">
            Produk & Jasa
          </h2>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center">
          {cardData.map((data, index) => (
            <Card
              key={data.title}
              page={data.page}
              image={data.image}
              delay={(index + 1) * 200}
              title={data.title}
              data={data.data}
              name={data.name}
            />
          ))}
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="min-h-[50vh] py-16 sm:py-24 md:py-32 lg:py-40 flex w-full items-center flex-col">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-[0_2px_35px_rgba(255,255,255,.5)] text-center">
            Testimoni
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card border-[#ffffff46] border shadow-lg p-4 sm:p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              <p className="text-gray-300 italic mb-4 text-sm sm:text-base">"{testimonial.quote}"</p>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Produk: <span className="font-semibold">{testimonial.product}</span>
              </p>
              <div className="flex items-center">
                <div className="avatar placeholder">
                  <div className="bg-gray-700 text-white rounded-full w-10 sm:w-12">
                    <span>{testimonial.author[0]}</span>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="font-bold text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}