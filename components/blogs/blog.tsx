import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`}>
            <div>
                <h4 className="font-semibold text-[18px] hover:underline">{props.title}</h4>
                {/* <h4 className="opacity-60">{props.description}</h4> */}
                <span className="opacity-60 italic font-normal">{props.releaseDate}</span>
            </div>
        </Link>
    )
}