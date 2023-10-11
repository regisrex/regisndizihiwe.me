import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="my-2">
            <div className="hover:bg-white/[0.04] rounded-lg duration-150 p-3">
                <h4 className="font-semibold text-lg">{props.title}</h4>
                {/* <h4 className="opacity-60">{props.description}</h4> */}
                <span className="opacity-60 italic font-normal">Released on: {props.releaseDate}</span>
            </div>
        </Link>
    )
}