import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="flex text-bluish-200 items-start  cursor-pointer gap-2  px-4 border border-neutral-800 rounded-md py-3">
            <div>
                <h4 className=" font-semibold text-bluish-200 ">{props.title}</h4>
                <h4 className="text-bluish-200 ">{props.description}</h4>
            </div>
        </Link>
    )
}   