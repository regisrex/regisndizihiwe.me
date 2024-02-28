import Blog from "@/components/blogs/blog";
import T from "@/components/title";
import blogs from "@/content/content";

export default function BlogPage() {
    return (
        <div>
            <T>My Writings</T>
            <div className=" min-h-[60vh] flex flex-col gap-3">
                {
                    blogs.map((blog, i) => <Blog key={i} {...blog} />)
                }
            </div>
        </div>
    )
}   