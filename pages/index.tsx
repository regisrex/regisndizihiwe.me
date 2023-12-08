import MeImg from '@/assets/me.jpg'
import { GithubIcon, TwitterIcon } from '@/components/icons'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Image src={MeImg.src} alt='' width={60} height={60} className='rounded-full' draggable={false} />
      <div className='text-bluish-200 pt-6' id='bgbck'>
        <p className='mb-4'>
          Hey! <span className='animate-play mt-4 animate-bounce-in-right'>👋</span> I&apos;m R&eacute;gis NDIZIHIWE.
        </p>
        <p className='mb-4'>
          I&apos;m a software developer, open source fanatic, tech advocate and user experience designer.
        </p>
        <p className='mb-4'>
          Professionally, I&apos;m a full stack software developer & ux-designer with almost 3 years of experience. I&apos;m likely to be on the design or the backend team.
          I code in Typescript, Golang and a little bit of Java.
        </p>

        <p className='mb-4'>
          Feel free to reach out to me for a chat or collaboration at hey@regisndizihiwe.me.
          You can also follow me on Github and Twitter to see what I&apos;m up to!
        </p>
        <p className='mb-4'>
          See you!
        </p>

        <div className='my-4 flex gap-4'>
          <a href='https://github.com/regisrex'>
            <div className='work-div hover:shadow-ble hover:shadow-sm py-2 px-8 w-fit rounded-md flex items-center gap-3'>
              <GithubIcon />
              <span>Github</span>
            </div>
          </a>
          <a href='https://twitter.com/regissrex'>
          <div className='work-div hover:shadow-ble hover:shadow-sm py-2 px-8 w-fit rounded-md flex items-center gap-3'>
            <TwitterIcon />
            <span>Twitter</span>
          </div>
          </a>
        </div>

      </div>
    </>
  )
}