import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="my-2">
            <div className="hover:bg-white/[0.02] hover:bg-opacity-[0.02] py-2 px-1">
                <h4 className="font-semibold">{props.title} - <span className="opacity-60 font-normal">{props.releaseDate}</span></h4>
                <h4 className="opacity-60">{props.description}</h4>
            </div>
        </Link>
    )
}