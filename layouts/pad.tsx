export default function Pad({ children, className }: { children: React.ReactNode, className: string }) {
    return <div className={"sm:px-[2vw] sm:px-[4vw] md:px-[10vw] lg:px-[22vw]" + " " + className}>
        {children}
    </div>
}