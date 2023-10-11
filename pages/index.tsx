import RexImage from "@/assets/me.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center  justify-between py-24 ">
      <div className="flex gap-6 items-center">
        <div className="p-1 rounded-full bg-white bg-opacity-10 border border-neutral-800 h-fit">
          <Image src={RexImage.src} width={200} height={200} alt="Rex image" className="rounded-full w-[140px] overflow-clip  object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-br text-transparent from-blue-600 to-red-500 w-fit bg-clip-text">R&eacute;gis NDIZIHIWE</h1>
          <p className="opacity-60"> Software programmer, student at Rwanda Coding Academy, member of the Hack Club</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <p>Sup nerd! Welcome to my spot.</p>
            <p>I write code, I code in Typescript, Go and I&apos;m planning to add Rust, but I actually enjoy coding in any strongly typed language apart from Java, seriously, Java!</p>
            <p>In my spare time, i build random things that can be useful in some occassions or just scroll into my github feed, that&apos;s where I get some fresh air! </p>
            <p>For a link up, ping me on <a href="mailto:hey@regisndizihiwe.me" className="underline-offset-4 hover:decoration-neutral-200 underline decoration-neutral-600">hey@regisndizihiwe.me</a></p>

            <div className="flex items-center gap-3">
              <a href="https://github.com/regisrex" className="underline decoration-neutral-600  hover:decoration-neutral-200 underline-offset-4">Github</a>
              <a href="https://twitter.com/regissrex" className="underline decoration-neutral-600 hover:decoration-neutral-200 underline-offset-4">Twitter</a>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}