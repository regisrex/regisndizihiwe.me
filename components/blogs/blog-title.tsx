export default function BlogTitle({ 
    releaseDate, 
    title, 
    readTime 
} : {
    releaseDate : string, 
    title :  string, 
    readTime : string
     }) {
    return (
        <div className="flex flex-col gap-1 py-4 border-b border-neutral-800">
            <p className="opacity-60 font-sans italic">Released on: {releaseDate}</p>
            <h3 className='text-2xl font-bold bg-gradient-to-bl text-transparent from-blue-600 to-red-600 w-fit bg-clip-text'>{ title }</h3>
            <p className="opacity-60">{ readTime } &nbsp;&nbsp;&nbsp;&nbsp; rust • open-source • cli </p>
        </div>
    )
}