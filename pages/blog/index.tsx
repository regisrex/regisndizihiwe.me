import Blog from "@/components/blogs/blog";
import blogs from "@/content/content";

export default function BlogPage() {
    return (
        <div>
            <h2 className="text-2xl my-4 font-bold">Blogs</h2>
            <div className=" min-h-[60vh] flex flex-col">
                {
                    blogs.map((blog, i) => <Blog key={i} {...blog} />)
                }
            </div>
        </div>
    )
}   