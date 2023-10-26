
export default function Home() {
  return (
    <main className="flex flex-col gap-6   justify-between py-24 ">
      <div className="flex-col gap-2 items-center">
        {/* <div className="p-1 rounded-md bg-white bg-opacity-10 border border-neutral-800 w-fit h-fit">
          <Image src={RexImage.src} width={120} height={120} alt="Rex image" className="rounded-md w-[140px] overflow-clip  object-cover" />
        </div> */}
        <div className="flex flex-col justify-between  gap-2">
          <h1 className="text-xl font-bold bg-gradient-to-br">R&eacute;gis NDIZIHIWE</h1>
          <p className="opacity-60 text-sm">Programmer</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <p>Howdy!</p>
            <p>I write code in Typescript and Go </p>
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