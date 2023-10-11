import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="my-2 ">
            <div className="py-4 px-1  hover:border-r border-white border-opacity-5">
                <h4 className="">{props.title}</h4>
                <h4 className="opacity-60">{props.description}</h4>
            </div>
        </Link>
    )
}