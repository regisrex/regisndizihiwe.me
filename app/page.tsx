
export default function Home() {
  return (
    <main className="bg-neutral-900 min-h-screen flex flex-col  justify-between  ">

      <div className=" flex flex-col gap-4 py-24  px-[26vw]">
        <h1 className="text-2xl font-bold"> &gt;_ R&eacute;gis NDIZIHIWE</h1>
        <p>Sup nerd!  It&apos;s nice that you&apos;ve reached here. </p>
        <p> I&apos;m a software programmer, student at Rwanda Coding Academy and member of the Hack Club  where I learn from my fellow teens around the world. </p>
        <p>Currently, I code in Typescript, Go and I&apos;m planning to add Rust, but I actually enjoy coding in any strongly typed language apart from Java, seriously, Java!</p>
        <p>In my spare time, i build random things that can be useful in some occassions or just scroll into my github feed, that&apos;s where I get some fresh air! </p>
        <p>For a link up, ping me on <a href="mailto:hey@regisndizihiwe.me" className="underline-offset-4 hover:decoration-neutral-200 underline decoration-neutral-600">hey@regisndizihiwe.me</a></p>

        <div className="flex items-center gap-3">
          <a href="https://github.com/regisrex" className="underline decoration-neutral-600  hover:decoration-neutral-200 underline-offset-4">Github</a>
          <a href="https://twitter.com/regissrex" className="underline decoration-neutral-600 hover:decoration-neutral-200 underline-offset-4">Twitter</a>
        </div>

      </div>
      <p className="m-4 text-center text-neutral-500"><a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> {new Date().getFullYear()} &copy; R&eacute;gis NDIZIHIWE</p>
    </main>
  )
}
