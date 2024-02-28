import About from '@/app/about/page.mdx'
import Tick from '@/components/tick'
import BlogPage from './blog/page'
import Works from './work/page'

export default function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <h1 className='text-4xl text-white'>
          <span className='opacity-50 text-bluish-200'>
            Hey :wave!
          </span>
          <br />
          <span className='opacity-50 font-black'>
            I'm Regis NDIZIHIWE. <Tick />
          </span>
        </h1>
      </div>
      <About />
      <BlogPage />
      <Works />
    </div>
  )
}