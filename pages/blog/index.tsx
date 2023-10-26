import Blog from "@/components/blogs/blog";
import blogs from "@/content/content";

export default function BlogPage() {
    return (
        <div>
            <h2 className="text-2xl mt-6 font-bold">Blog</h2>
            <div className="mt-10 min-h-[60vh]">
                {
                    blogs.map((blog, i) => <Blog key={i} {...blog} />)
                }
            </div>
        </div>
    )
}