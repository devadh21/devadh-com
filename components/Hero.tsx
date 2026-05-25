import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome to Devadh.com</h1>
  <div className="relative w-full max-w-6xl mx-auto">
  <Image
    src="/hero-image.png"
    alt="Hero Image"
    width={1400}
    height={800}
    priority
    className="w-full h-auto object-cover rounded-3xl"
  />
</div>
       
      <div className="text-center mt-8">
        <Link
          href={"https://portfolio.devadh.com"}
          target="_blank"
          className="bg-purple-900 text-white px-4 py-2 rounded  hover:bg-purple-700 transition-colors"
        >
          My Portfolio
        </Link>

      </div>
    </div>
  );
}
