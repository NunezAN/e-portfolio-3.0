import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Alexis Nunez",
      "I'm a Frontend Developer",
      "Scroll through and learn more about me and what I do",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: require("/public/hero.json"),
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: ``,
  //   });
  // }, []);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <div className="bg-transparent relative rounded-full mx-auto object-cover overflow-hidden"> */}
      {/* <Image
          // src="https://media-exp1.licdn.com/dms/image/D5603AQEnbDPWuxjFUQ/profile-displayphoto-shrink_200_200/0/1664981551253?e=1671062400&v=beta&t=ejaYcHoOk_FOiNcOTBrg9S8l0W13wPu8C9uwxvuFiK0"
          src="/memoji.GIF"
          layout="fill"
          // objectFit="cover"
          priority
          className="bg-transparent -z-1"
        /> */}
      {/* <img
        className="bg-transparent relative rounded-full h-52 w-52 mx-auto !mt-4 object-cover"
        // src="/hero.png"
        src="/memoji.gif"
        alt=""
      /> */}
      <div className="relative rounded-full h-60 w-60 mx-auto !mt-[-48px] !mb-4 object-cover">
        <Lottie options={defaultOptions} height={260} width={270}></Lottie>
      </div>
      {/* </div> */}
      <div className="z-20">
        <h2 className="text-sm md:text-md uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-xl md:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7289da" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton md:text-lg">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton md:text-lg">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton md:text-lg">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
