import MeImg from "@/assets/me.jpg";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <Image
        src={MeImg.src}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
        draggable={false}
      /> */}
      <div className="text-bluish-200 pt-6" id="bgbck">
        <div className="flex flex-col gap-4 ">
          <p className="text-bluish-100 text-4xl font-black">R&eacute;gis N.</p>
          <p className="text-bluish-100 text-xl font-semibold">
            I write code and design experiences.
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
          <button className="py-2 px-6 bg-bluish-100 rounded-md text-ble">
            My Github
          </button>
          <button className="py-2 px-6 border border-bluish-200/10 rounded-md text-bluish-100">
            LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}
