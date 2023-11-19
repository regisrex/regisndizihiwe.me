import RexBg from '@/assets/blog-title-bg.png'
import RexImage from '@/assets/me.jpg'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex flex-col gap-6 bg-center backdrop-blur-[700px]  bg-cover   justify-between py-24" >
      <div className="flex gap-2 items-center">
        <div className="p-1 rounded-full  backdrop-blur-3xl border border-slate-200/10 bg-neutral-800 w-fit h-fit">
          <Image src={RexImage.src} width={120} height={120} alt="Rex image" className="rounded-full w-[80px] overflow-clip  object-cover" />
        </div>
        <div className="flex flex-col justify-between  gap-1">
          <h1 className="text-2xl font-bold bg-gradient-to-br">Hey! I&apos;m Rex 👋</h1>
          <p className="opacity-90 italic">Programmer, Blogger, Hack clubber and Student.</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <p className="leading-7">
              Hello! My name is <span className='font-semibold'>Regis NDIZIHIWE</span>. I&apos;m a programmer👨‍💻 and student📚. I love building applications and tools by writing code.
              I&apos;m also a blogger and a member of <span className='font-semibold'></span>Hack Club. Professionally, I&apos;m a <span className='font-semibold'>web and mobile developer</span>. In my spare time, I tinker on useful hacky project ideas including <span className='font-semibold'>CLIs, bots, packages,</span> and much more. You can find some on my GitHub.
            <br/><br/>  Feel free to reach out to me for a chat or collaboration at <a href="mailto:hey@regisndizihiwe.me" className="underline-offset-4 hover:decoration-neutral-200 text-blue-500 decoration-neutral-600">hey@regisndizihiwe.me</a>.
              You can also follow me on <a href="https://github.com/regisrex" className="text-blue-500 decoration-neutral-600  hover:decoration-neutral-200 underline-offset-4">Github</a> and <a href="https://twitter.com/regissrex" className="text-blue-500 decoration-neutral-600 hover:decoration-neutral-200 underline-offset-4">Twitter</a> to see what I&apos;m up to!
            </p>
            <p>
            See you around !
               </p>

            <div className="flex items-center gap-3">
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}