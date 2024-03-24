import MeImg from '@/assets/me.jpg';
import { Rakkas } from "next/font/google";
const libre = Rakkas({ subsets: ['latin'], weight: '400' })
export default function Home() {
  return (
    <>
      <div className="text-bluish-200 pt-6 flex  flex-col gap-1 min-h-[80vh]">
        <div className="flex items-center gap-4 ">

          <img
            src={MeImg.src}
            alt=""
            width={60}
            height={60}
            className="object-cover w-[140px] h-[140px] rounded-2xl border border-white/10 rotate-45"
            draggable={false}
          />
          {/* <p className="text-bluish-100 text-4xl font-black">R&eacute;gis N.</p> */}
          <p className="text-bluish-100 text-4xl font-semibold" style={libre.style}>
            Hey👋! I'm Regis, I'm a software engineer, a designer, a mentor and a lot more.
          </p>
        </div>

        <p className="my-4">
          I&apos;m a software engineer based in Kigali, Rwanda. I love building things that make an impact on people&apos;s lives.
        </p>
        <p className="my-4">
          Throught my 3 years of experience, I&apos;ve worked with a variety of
          technologies and tools. I&apos;m currently focused on building web
          applications with Typescript and Golang.
        </p>

        <p className="mb-4">
          Feel free to reach out to me for a chat or collaboration at
          hey@regisndizihiwe.me. You can also follow me on Github and Twitter to
          see what I&apos;m up to!
        </p>
        <p className="mb-4">See you!</p>

        <div className="my-4 flex gap-4">
          <a href="https://github.com/regisrex">

            <button className="py-2 px-6 bg-white rounded-full  text-ble">
              GitHub
            </button>
          </a>
          <a href="https://linkedin.com/in/regisndizihiwe">

            <button className="py-2 px-6 border border-bluish-200/10  rounded-full text-bluish-100">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
