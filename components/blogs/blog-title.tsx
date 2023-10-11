export default function BlogTitle({
    id,
    releaseDate,
    title,
    description,
    readTime
}: {
    id : string
    releaseDate: string,
    title: string,
    description: string,
    readTime: string
}) {
    return (
        <>
            <div className="flex flex-col gap-2 mb-6 py-4 border-b border-neutral-800">
                <p className="opacity-60 font-sans italic">Released on: {releaseDate}</p>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <p className="opacity-60">{readTime} &nbsp;&nbsp;&nbsp;&nbsp; rust • open-source • cli </p>
            </div>
        </>
    )
}