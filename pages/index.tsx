
export default function Home() {
  return (
    <main className="flex flex-col gap-6   justify-between py-24 ">
      <div className="flex-col gap-2 items-center">
        {/* <div className="p-1 rounded-md bg-white bg-opacity-10 border border-neutral-800 w-fit h-fit">
          <Image src={RexImage.src} width={120} height={120} alt="Rex image" className="rounded-md w-[140px] overflow-clip  object-cover" />
        </div> */}
        <div className="flex flex-col justify-between  gap-2">
          <h1 className="text-4xl font-black bg-gradient-to-br">Hey there! I&apos;m Rex</h1>
          <p className="opacity-90 italic">Programmer, Blogger, Hack clubber and Student.</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <p className="leading-7">
              Hello! My name is Regis NDIZIHIWE. I&apos;m a programmer who loves coding in TypeScript and Go.
              I&apos;m also a blogger and a member of Hack Club. Professionally, I&apos;m a web and mobile developer. In my spare time, I tinker on useful hacky project ideas including CLIs, bots, packages, and much more. You can find some on my GitHub.
              Feel free to reach out to me for a chat or collaboration at <a href="mailto:hey@regisndizihiwe.me" className="underline-offset-4 hover:decoration-neutral-200 text-blue-400 decoration-neutral-600">hey@regisndizihiwe.me</a>.
              You can also follow me on <a href="https://github.com/regisrex" className="text-blue-400 decoration-neutral-600  hover:decoration-neutral-200 underline-offset-4">Github</a> and <a href="https://twitter.com/regissrex" className="text-blue-400 decoration-neutral-600 hover:decoration-neutral-200 underline-offset-4">Twitter</a> to see what I&apos;m up to!
            </p>
            <p className="italic">
            &quot;Life&apos;s too short for bad code!&quot; 😄
               </p>

            <div className="flex items-center gap-3">
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}