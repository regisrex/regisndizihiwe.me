import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="flex items-start cursor-pointer gap-2  py-3">
            <div>
                <h4 className="font-semibold text-[18px]">{props.title}</h4>
                {/* <h4 className="opacity-60">{props.description}</h4> */}
                <span className="opacity-60 italic first-letter:font-normal">{props.releaseDate}</span>
            </div>
        </Link>
    )
}