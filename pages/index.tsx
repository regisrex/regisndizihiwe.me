import MeImg from '@/assets/me.jpg'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Image src={MeImg.src} alt='' width={80} height={80} className='rounded-full' draggable={false} />
      <div className='text-bluish-200' id='bgbck'>
        <h4 className='text-bluish-100 font-semibold text-xl my-4'>About</h4>
        <p className='mb-4'>
          Hey! <span className='animate-play animate-bounce-in-right'>👋</span> I&apos;m R&eacute;gis NDIZIHIWE.
        </p>
        <p className='mb-4'>
          I&apos;m a software developer, open source fanatic, tech advocate and user experience designer.
        </p>
        <p className='mb-4'>
          Professionally, I&apos;m a full stack software developer & ux-designer with almost 3 years of experience. I&apos;m likely to be on the design or the backend team.
          I code in Typescript, Golang and a little bit of Java.
        </p>
        <p className='mb-4'>
          About libraries and frameworks, I use react, next.js on the frontend vue.js, node.js, express.js, nest.js on the backend. I also use gin and mux in the Golang ecosystem.
        </p>
        <p className='mb-4'>
          When codes and designs feel boring that day, I engage into open source by building up some tools and packages or just contributing to what others have been doing.
        </p>
        <p className='mb-4'>
          I believe connecting and  building is a great way to expand the tech universe and that&apos;s why I&apos;m always looking for other people
          with same interests as mines so that I can collaborate on projects and share skills with them.
        </p>
        <p className='mb-4'>
          Out of the world of programming, I try visual arts and business.
        </p>
        <p className='mb-4'>
          Feel free to reach out to me for a chat or collaboration at hey@regisndizihiwe.me.
          You can also follow me on Github and Twitter to see what I&apos;m up to!
        </p>

        See you around !
      </div>
      {/* <h4 className='text-bluish-100 font-semibold text-xl my-4'>Works</h4>
      <div className='work-div p-4 rounded-md'>
        <h4 className="text-bluish-100 font-semibold">DTECH Software</h4>
        <p className="text-bluish-200">Backend developer of invictus.rmf.gov.rw</p>
      </div>
      <div className='work-div p-4 rounded-md'>
        <h4 className="text-bluish-100 font-semibold">Irumva-c-group</h4>
        <p className="text-bluish-200">Designer and developer / irumvacgroup.org</p>
      </div> */}

    </>
  )
}