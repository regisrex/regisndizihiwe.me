import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }: any) => <h3 className='text-3xl font-bold'>{children}</h3>,
    p: ({ children }: any) => <p className='leading-7 font-[20px]'>{children}</p>,
    h3: ({ children }: any) => <h3 className='text-2xl font-bold'>{children}</h3>,
    h4: ({ children }: any) => <h3 className='text-lg font-semibold'>{children}</h3>,
    hr: () => <div className='border border-white border-opacity-20' ></div>,
    a: ({ children, href }) => <a className='text-blue-500' style={{ color: "#96CBFE" }} href={href}> {children}</a>,
    li: ({ children }) => <li className='text-slate-900 list-disc'><span className='px-2 text-lg font-bold'>•</span>{children}</li>,
    // eslint-disable-next-line @next/next/no-img-element
    img: ({ src, alt }) => <><Image src={src as string} alt={alt as string} width={1000} height={200}  style={{ margin: "10px 0", borderRadius : "4px"}} draggable={false} className='my-10 p-4  w-full rounded-lg bg-slate-900' /><i className='opacity-60 italic -mt-2' > { alt }</i></>,
    ...components,
  }
}