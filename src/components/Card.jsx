'use client'
import React from "react";
import 'aos/dist/aos.css';

const Card = ({ title, data, name, delay, image, page }) => {

  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="card w-80 shadow-2xl shadow-[rgba(255,255,255,.2)] border-[.5px] border-[rgba(255,255,255,.2)] ">
      <div className="card-body flex flex-col justify-between">
        <div>
        <div className="">
          <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-2">{name}</p>
        <img src={`/image/16:9/${image}`} alt="" />
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {data.map((item, index) => {
            return index < 5 ? (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>

            ) : (
              ''
            )
          })}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>...</span>
              </li>

        </ul>
        </div>
        <div className="mt-6">
          <a href={page} className="btn btn-outline btn-block ">Lihat Detail</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
