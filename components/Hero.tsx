import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome to Devadh.com</h1>
      <div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={900}
          height={100}
        />
      </div>
      <div className="text-center mt-8">
        <Link href={"https://portfolio.devadh.info"} target="_blank"  className="bg-purple-900 text-white px-4 py-2 rounded  hover:bg-purple-700 transition-colors">
          My Portfolio
        </Link>
      </div>
    </div>
  );
}
