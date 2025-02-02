"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import {
  SiAdobe,
  SiEbay,
  SiHashnode,
  SiHonda,
  SiLoom,
  SiMeta,
  SiTailwindcss,
  SiThewashingtonpost,
  SiUnderarmour,
  SiZapier,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaAngular, FaHackerrank, FaVuejs } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="up absolute z-10 lg:-top-48 md:-top-24 -top-10" />

      <div className="w-full h-full  max-w-5xl mx-auto relative z-20 ">
        <Header />

        <div className="mt-20 px-5">
          <h1 className="text-6xl text-center font-InterMedium  text-white bg-gradient-to-r from-[#e0dfdf]  to-black  text-transparent bg-clip-text capitalize">
            Welcome to Amaan's{" "}
            <span className=" font-bold tracking-tighter  bg-gradient-to-r from-[#fffb13] to-yellow-500 text-transparent bg-clip-text text-6xl font-InterBold">
              blog{" "} site
            </span>
          </h1>
          <p className="text-neutral-400 max-w-[41rem] mx-auto mt-4  font-InterRegular text-center">
          I'm a tech enthusiast who loves to explore technology regularly. It serves as my source of escapism, and this blog is where I share my experiences. I write about what I've explored, what I find interesting on a daily basis, recent tech stacks that have impressed me, the ones I've learned from and the insights I gained, and most importantly, how to code better and follow best practices based on my experience.
          </p>

          <div className="flex justify-center mt-11">
            <div>
              {
                <Link href="/posts">
                  <button
                    className="px-4 m-2 bg-transparent
                    border-neutral-800 border  font-InterRegular
                  rounded-full h-8
                  text-l text-neutral-400
                  dark:border-slate-600"
                  >
                    Explore blogs
                  </button>
                </Link>
              }

              {
                <Link
                href="https://amaanbhati.tech"
                target="_blank"
                className="font-semibold hover:underline"
              >
                  <button
                    className="px-4 m-2 bg-transparent
                    border-neutral-800 border  font-InterRegular
                  rounded-full h-8
                  text-l text-neutral-400
                  dark:border-slate-600"
                  >
                    View Portfolio
                  </button>
                </Link>
              }
            </div>
          </div>

          <div className="max-w-4xl mx-auto flex justify-center gap-x-8 mt-10">
          <a href="https://instagram.com/amaanbhatiii" target="blank"> <SiInstagram className="text-neutral-400 text-4xl" /> </a>
          <a href="https://github.com/amaan-bhati" target="blank"><SiGithub className="text-neutral-400 text-4xl" /></a>
          <a href="https://twitter.com/front_end_er" target="blank"> <SiTwitter className="text-neutral-400 text-4xl" /></a>
          <a href="https://linkedin.com/in/amaan-bhati" target="blank"> <SiLinkedin className="text-neutral-400 text-4xl" /></a>
            {/* <FaVuejs className="text-neutral-400 text-4xl" />
            <FaAngular className="text-neutral-400 text-4xl" />
            <FaHackerrank className="text-neutral-400 text-4xl" /> */}
          </div>
        </div>

        {/* <div className="mt-20">
          <h1 className="font-InterRegular uppercase tracking-tighter  bg-gradient-to-b from-[#e0dfdf]  to-black  text-transparent bg-clip-text text-center  ">
            Trusted by the best front end teams
          </h1>
        </div> */}

        {/* <div className="max-w-4xl mx-auto flex flex-col items-center mt-5 gap-y-10">
          <div className="flex gap-x-20">
            <SiAdobe className="text-neutral-400 text-xl" />
            <SiUnderarmour className="text-neutral-400 text-xl" />
            <SiEbay className="text-neutral-400 text-xl" />
            <SiZapier className="text-neutral-400 text-xl" />
            <SiLoom className="text-neutral-400 text-xl" />
          </div>
          <div className="flex gap-x-20">
            <SiHashnode className="text-neutral-400 text-xl" />
            <SiTailwindcss className="text-neutral-400 text-xl" />
            <SiThewashingtonpost className="text-neutral-400 text-xl" />
            <SiHonda className="text-neutral-400 text-xl" />
            <SiMeta className="text-neutral-400 text-xl" />
          </div>
        </div> */}

        {/* <Link href="/posts">
          <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
            Go to Blogs <BsArrowRightShort className="text-3xl ml-1" />
          </div>
        </Link> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
